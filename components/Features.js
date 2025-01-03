import { useEffect, useState } from "react";

export default function Features() {
  const [isInView, setIsInView] = useState(false);

  // Create an intersection observer to detect when elements are in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, { threshold: 0.5 });

    const elements = document.querySelectorAll(".fade-element");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="features" className="py-0"> {/* Reduced padding-top to py-6 */}
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-offwhite md:leading-tight md:tracking-normal dark:text-offwhite md:text-4xl">
          Supporting the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-offwhite via-vanilla to-neutralgray dark:from-offwhite dark:via-vanilla dark:to-neutralgray">
            finest
          </span>{" "}
          and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-offwhite via-vanilla to-neutralgray dark:from-offwhite dark:via-vanilla dark:to-neutralgray">
            most effective
          </span>{" "}
          features.
        </h1>
        <p className="max-w-md mx-auto mb-10 text-lg text-vanilla dark:text-vanilla md:text-lg">
          Simultaneously tracking and protecting through...
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-10 space-y-6 fade-element">
            <h1 className="text-xl font-bold text-center text-offwhite dark:text-offwhite md:text-2xl sm:text-left">
              GNNs
            </h1>
            <div className="h-auto">
              <img
                className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                src="/images/GNNs.webp"
                alt="Placeholder for Next.js"
              />
            </div>
            <p className="mx-2 font-normal text-vanilla dark:text-vanilla text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <span className="font-semibold">Overview</span>: Geospatial neural networks (GNNs) are AI models 
                  focused on analyzing spatial data and solving location-based problems 
                  in mapping, logistics, and urban planning.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Improved Performance</span>:
                  GNNs are a cost-effective method of creating a denser AQI grid to guarantee in-depth air quality analysis of every community
                </li>
              </ul>
            </p>
          </div>
          <div className="mb-10 space-y-6 fade-element">
            <h1 className="text-xl font-bold text-center text-offwhite dark:text-offwhite md:text-2xl sm:text-left">
              Infrared Spectroscopy Sensors
            </h1>
            <div className="h-auto">
              <img
                className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                src="/images/infraredsensors.webp"
                alt="Placeholder for TailwindCSS JIT"
              />
            </div>
            <p className="mx-2 font-normal text-vanilla dark:text-vanilla text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <span className="font-semibold"></span>A
                  faster, more thorough particle detection system
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    Replaces clunky particle sensors
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    One sensor for every three particle sensors used by other trackers, one device analyzes all types of pollutant
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    A better, more effective performance in detection
                  </span>
                </li>
              </ul>
            </p>
          </div>
          <div className="mb-10 space-y-6 fade-element">
            <h1 className="text-xl font-bold text-center text-offwhite dark:text-offwhite md:text-2xl sm:text-left">
              Cutting-Edge Tech
            </h1>
            <div className="h-auto">
              <img
                className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                src="/images/nvidiaa100.webp"
                alt="Placeholder for Dark Mode"
              />
            </div>
            <p className="mx-2 font-normal text-vanilla dark:text-vanilla text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  The NVIDIA A100 GPU allows us to train our model until it surpassed perfection
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Systems</span>: Uses
                  state-of-the-art technology to guarantee up-to-date tracking
                </li>
                <li className="mb-2">
                  <span className="font-semibold">AWS Sagemaker</span>: The management of hundreds of GNNs runs 
                  through the most powerful machine learning platforms.
                </li>
              </ul>
            </p>
          </div>
          <div className="mb-10 space-y-6 fade-element">
            <h1 className="text-xl font-bold text-center text-offwhite dark:text-offwhite md:text-2xl sm:text-left">
              CNNs
            </h1>
            <div className="h-auto">
              <img
                className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                src="/images/CNNs.webp"
                alt="Placeholder for Next-SEO"
              />
            </div>
            <p className="mx-2 font-normal text-vanilla dark:text-vanilla text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  Convolutional Neural Networks: Advanced AI architectures designed to efficiently process and analyze visual data, 
                  powering advancements in image recognition and computer vision.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Data Optimization</span>: CNNs allow Zephyrus to predict future AQI trends in 
                  every community, allowing filtration companies to efficiently manage their expenditures
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
