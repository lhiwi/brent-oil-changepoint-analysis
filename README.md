# Brent Oil Change Point Analysis Dashboard

This project investigates how major global events influence **Brent crude oil prices** over time using **Bayesian Change Point Detection** and presents findings through an **interactive dashboard** powered by **Flask (backend)** and **React (frontend)**.

> Developed as part of the 10 Academy Week 10 Challenge.


##  Project Motivation

Oil is among the most geopolitically sensitive commodities. Wars, sanctions, pandemics, and OPEC policies can send prices soaring or crashing. This project seeks to:

- Detect structural changes (change points) in oil price time series.
- Link detected shifts to real-world geopolitical and economic events.
- Make findings interpretable through an interactive web dashboard.

---

##  Project Overview

### Task 1: Data Preparation and Event Tagging

- Cleaned `BrentOilPrices.csv`, parsed dates, and ensured consistency.
- Compiled a manually curated list of impactful global events (`events_data.csv`).
- Explored oil price trends and return volatility.

### Task 2: Bayesian Change Point Modeling

- Implemented a PyMC3-based Bayesian model to detect when structural changes occurred in the time series.
- Calculated posterior distributions for change points.
- Visualized volatility, pre/post-change distributions, and event alignments.

### Task 3: Interactive Dashboard Development

- **Backend:** Flask API serving historical prices, change points, and global events.
- **Frontend:** React dashboard with interactive charts using Chart.js.
- Filters by date range, highlights event impact, and visualizes volatility.


##  Project Structure

```

brent-oil-changepoint-analysis/
├── backend/               # Flask backend API
│   ├── app.py             # Main Flask app
│   ├── static/            # Contains JSON files (cleaned data, change points, events)
│   └── requirements.txt   # Backend Python dependencies
│
├── frontend/              # React frontend
│   ├── public/            # Static HTML and favicon
│   ├── src/
│   │   ├── App.js         # Main React app with interactive components
│   │   └── ...
│   └── package.json       # Frontend dependencies
│
├── data/
│   ├── raw/               # Original datasets
│   ├── interim/           # Cleaned CSV files
│   └── processed/         # Output JSON files for dashboard
│
├── notebooks/
│   └── change\_point\_model.ipynb  # Modeling and visualization notebook
│
├── scripts/               # Helper scripts for data transformation (optional)
├── README.md
├── interim.md            # Task 1 interim report
└── final\_report.md       # Final blog-style report

````



## Installation & Running the App

###  1. Clone the Repository

```bash
git clone https://github.com/lhiwi/brent-oil-changepoint-analysis.git
cd brent-oil-changepoint-analysis
````

###  2. Start the Flask Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate        # On Windows
pip install -r requirements.txt
python app.py
```

The backend will run on: `http://127.0.0.1:5000`

Make sure `cleaned_price_data.json`, `events_data.json`, and `change_point_results.json` are present in `backend/static/`.

###  3. Start the React Frontend

```bash
cd ../frontend
npm install
npm start
```

The frontend will run on: `http://localhost:3000`


##  Dashboard Features

*  Line chart of Brent oil prices with **change point overlays**.
*  Timeline of **annotated global events**.
*  Date range filter and zoomable view.
*  Interactive volatility plots.
*  Toggle pre- and post-event averages to see price impact.

---

##  Data Sources

* [`BrentOilPrices.csv`](data/raw/): Historical Brent oil prices.
* [`events_data.csv`](data/raw/): Manually compiled list of impactful global events affecting oil markets.


##  Tech Stack

* **Modeling:** Python, PyMC3, pandas, matplotlib
* **Backend:** Flask
* **Frontend:** React.js, Axios, Chart.js




