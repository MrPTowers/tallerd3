import csv
import random

filename = "data.csv"
header = ["id", "color", "amount"]
colors = ["red", "green", "blue", "yellow", "purple", "orange"]

num_rows = 30

with open(filename, mode="w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(header)

    for i in range(num_rows):
        id = i
        color = random.choice(colors)
        amount = round(random.uniform(10.0, 500.0), 2)
        writer.writerow([id, color, amount])
