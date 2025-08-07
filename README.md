# Task 3: Interactive Dashboard – Brent Oil Change Point Analysis

This module implements an interactive dashboard to visualize the results of Bayesian Change Point Detection on Brent oil price data, highlighting how major global events correlate with shifts in price behavior.

The dashboard helps stakeholders explore key insights from the analysis using dynamic charts, responsive tables, and API-driven event annotations.


##  Objective

The goal is to build a user-friendly dashboard that:

* Visualizes oil price trends over time
* Highlights detected change points in the price series
* Shows the impact of key historical events (e.g., conflicts, pandemics, economic shocks)
* Enables filtering and interactivity to explore the data deeply


## Architecture

The dashboard is built with a **Flask backend** and a **React frontend**:

| Component | Technology          | Purpose                                                                          |
| --------- | ------------------- | -------------------------------------------------------------------------------- |
| Backend   | Flask (Python)      | Serves preprocessed datasets and change point analysis results via API endpoints |
| Frontend  | React.js + Chart.js | Renders interactive charts and tables based on the backend API                   |


##  Directory Structure

```
brent-oil-changepoint-analysis/
│
├── backend/
│   ├── app.py                 # Flask app with REST API endpoints
│   ├── cleaned_data.json      # JSON file of historical price series
│   ├── change_points.json     # JSON file with model-detected change points
│   └── events_data.json       # JSON file listing key historical events
│
├── frontend/
│   ├── src/
│   │   └── App.js             # Main React component
│   └── public/
│       └── index.html
│
├── data/
│   └── raw/                   # Contains original data and CSV versions
│
├── README.md                  # This file
└── requirements.txt
```


## API Endpoints

The backend serves the following endpoints:

| Endpoint             | Description                                           |
| -------------------- | ----------------------------------------------------- |
| `/api/price-data`    | Returns the cleaned Brent oil price time series       |
| `/api/change-points` | Returns detected change points with statistics        |
| `/api/events`        | Returns the list of major events affecting oil prices |

All APIs return JSON.


##  Features

 Interactive line chart of Brent oil prices
 Change points visually marked
 Dynamic table of model-inferred metrics (μ before/after, volatility)
 Table of annotated events with dates and descriptions
 Responsive layout for web and mobile views
 Modular design for easy integration of additional filters and enhancements



## 🛠️ How to Run Locally

### 1. Backend (Flask)

```bash
cd backend
python app.py
```

The backend runs at: [http://127.0.0.1:5000](http://127.0.0.1:5000)

### 2. Frontend (React)

```bash
cd frontend
npm install
npm start
```

The frontend runs at: [http://localhost:3000](http://localhost:3000)


##  Future Enhancements

* Add filters for selecting date ranges or event categories
* Display volatility spikes alongside price
* Include time-series forecasting
* Deploy online using Docker + Heroku or Render


##  Related Tasks

* **Task 1**: Data preparation and event annotation
* **Task 2**: Bayesian change point modeling with PyMC3
* **Task 3**:  (this module) - Dashboard for exploration and insight

