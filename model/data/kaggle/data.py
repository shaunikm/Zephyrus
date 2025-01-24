# Dataset from: https://www.kaggle.com/datasets/calebreigada/us-air-quality-1980present

import pandas as pd

input_file = "US_AQI.csv"
output_file = "CA_AQI.csv"

print("Reading CSV...")
df = pd.read_csv(input_file)

filtered_df = df[df['state_id'] == 'CA']

print(f"Outputting DF into {output_file}...")
filtered_df.to_csv(output_file, index=False)
