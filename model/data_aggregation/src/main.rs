use reqwest::Error;
use serde::Deserialize;
use std::fs::OpenOptions;
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;
use indicatif::{MultiProgress, ProgressBar, ProgressStyle};
use rand::Rng;

#[derive(Debug, Deserialize)]
struct AirQuality {
    data: Data,
}

#[derive(Debug, Deserialize)]
struct Data {
    current: Current,
}

#[derive(Debug, Deserialize)]
struct Current {
    pollution: Pollution,
}

#[derive(Debug, Deserialize)]
struct Pollution {
    aqius: u32,
}

fn fetch_aqi_with_backoff(api_key: &str, lat: f64, lon: f64, attempt: u32) -> Result<u32, Error> {
    let url = format!(
        "https://api.airvisual.com/v2/nearest_city?lat={}&lon={}&key={}",
        lat, lon, api_key
    );
    
    let client = reqwest::blocking::Client::new();
    let response = client.get(&url).send()?;
    
    if response.status() == 429 {
        let backoff_duration = Duration::from_secs(2u64.pow(attempt));
        thread::sleep(backoff_duration);
        return fetch_aqi_with_backoff(api_key, lat, lon, attempt + 1);
    }
    
    let air_quality: AirQuality = response.json()?;
    Ok(air_quality.data.current.pollution.aqius)
}

fn generate_coordinates(rng: &mut rand::rngs::ThreadRng) -> (f64, f64) {
    // northern california bounds (+ Bay Area woop woop)
    let lat = rng.gen_range(36.0..42.0);
    let lon = rng.gen_range(-124.0..-120.0);
    (lat, lon)
}

fn main() {
    let keys = vec![
        "ef9e9972-b9ea-402a-9a37-f1594109e945",
        "6ce8ec19-2411-4aec-b354-eee7bc6e8258",
        "d14fdafe-5958-4cff-aa66-f731c7dbbdb8",
        "5d49d86f-39ff-422a-92e2-8f82ac9be2b8",
        "4663aa9e-35c1-4faa-b361-e4f1df9f60fc",
        "8f73bfed-aee4-4184-b132-aaf2442cda8f",
        "e2acdee3-82a1-45dd-9ab6-16cb02bee0f7",
        "17fef187-705b-49f2-9abc-52658f92fe3a",
        "03aa7ab6-a1c9-4263-b3cd-70921c6a2ecb",
        "74b63d8c-4456-48b7-b7d3-083836266778",
        "6fa22fb7-c624-46db-999b-82d08b2d0c42"
    ];

    std::fs::create_dir_all("data").expect("Failed to create data directory");

    let file = OpenOptions::new()
        .create(true)
        .write(true)
        .truncate(true)
        .open("data/northern_california_aqi.csv")
        .expect("Could not create file");
    let wtr = Arc::new(Mutex::new(csv::Writer::from_writer(file)));

    // Write headers
    {
        let mut wtr = wtr.lock().unwrap();
        wtr.write_record(&["lat", "long", "aqi"]).expect("Could not write headers");
    }

    let keys = Arc::new(keys);
    let multi_progress = MultiProgress::new();

    let handles: Vec<_> = (0..keys.len())
        .map(|i| {
            let keys = Arc::clone(&keys);
            let wtr = Arc::clone(&wtr);
            let progress_bar = multi_progress.add(ProgressBar::new(1000));
            progress_bar.set_style(
                ProgressStyle::default_bar()
                    .template("{spinner:.green} [{elapsed_precise}] [{bar:40.cyan/blue}] {pos}/{len} ({eta}) {msg}")
                    .progress_chars("#>-"),
            );
            progress_bar.set_message(format!("API Key {}", i + 1));

            thread::spawn(move || {
                let mut entries = 0;
                let mut rng = rand::thread_rng();

                while entries < 1000 {
                    let (lat, lon) = generate_coordinates(&mut rng);
                    match fetch_aqi_with_backoff(&keys[i], lat, lon, 0) {
                        Ok(aqi) => {
                            let mut wtr = wtr.lock().unwrap();
                            wtr.write_record(&[lat.to_string(), lon.to_string(), aqi.to_string()])
                                .expect("Could not write record");
                            wtr.flush().expect("Could not flush writer");
                            entries += 1;
                            progress_bar.set_message(format!("API Key {} - Last: ({:.2}, {:.2})", i + 1, lat, lon));
                            progress_bar.inc(1);
                        }
                        Err(e) => {
                            progress_bar.set_message(format!("API Key {} - Error: {}", i + 1, e));
                            thread::sleep(Duration::from_secs(1));
                        }
                    }
                    thread::sleep(Duration::from_secs(1));
                }
                progress_bar.finish_with_message(format!("API Key {} - Completed", i + 1));
            })
        })
        .collect();

    multi_progress.join().unwrap();

    for handle in handles {
        handle.join().unwrap();
    }
}