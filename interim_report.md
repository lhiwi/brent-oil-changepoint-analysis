# Interim Report: Task 1 – Laying the Foundation for Analysis

## Project Objective

The goal of this project is to investigate how significant global events influence Brent oil prices, using Bayesian Change Point Detection to extract meaningful, data-driven insights. Given the oil market's sensitivity to geopolitical decisions, economic disruptions, and OPEC policies, I aim to identify when such events caused structural shifts in oil price behavior and communicate these findings clearly through visualizations and reports. Ultimately, this analysis is designed to support better decision-making for investors, policymakers, and analysts.

## Plan for the Workflow and Approach

### 1. Getting the Data Ready

The first step involves loading the provided historical Brent oil price dataset, which spans from May 1987 to September 2022. I will ensure date formats are properly parsed, and all price values are clean and consistent. Any missing values or inconsistencies will be addressed to maintain a reliable dataset for analysis.

### 2. Compiling a List of Impactful Global Events

Since the oil price dataset does not contain contextual information about real-world events, I have manually compiled a list of key events that are historically known to influence oil prices. This list is saved as `events_data.csv` and includes:

* The date of the event
* Event name
* A brief description
* A category (e.g., Conflict, OPEC Policy, Economic Shock)

This event data will later be used to cross-reference the change points detected by the Bayesian model.

### 3. Exploring and Understanding the Data (EDA)

Before modeling, I plan to conduct an exploratory data analysis to better understand the behavior of the oil price series. This includes:

* Plotting the raw oil price over time to observe trends and significant shocks.
* Calculating log returns to transform the price series into a more stable form suitable for modeling.
* Visualizing the log returns to examine patterns of volatility clustering, which are common in financial time series.

### 4. Building the Change Point Detection Model (Preview of Task 2)

For the core analysis in Task 2, I will implement a Bayesian Change Point Detection model using PyMC3. The model will identify statistically significant structural breaks in the time series and estimate:

* The approximate date of the change point (τ)
* The mean price behavior before and after the change

I will then compare these detected change points with the events in `events_data.csv` and hypothesize which events might have triggered the observed shifts.

### 5. Communicating the Results Effectively

To ensure the findings are accessible and impactful, I plan to:

* Build a Flask API to serve model outputs and data.
* Create a React-based interactive dashboard to visualize price trends, change points, and associated events.
* Prepare a written report for policymakers and investors.
* Write a blog post on Medium to narrate the analytical journey and share key insights in an accessible format.

## Assumptions and Limitations

* The model will identify **correlations**, not causation, between events and price changes.
* By transforming prices to log returns, I assume the time series becomes stationary. This assumption may not hold across the entire timeline.
* Using daily-level data limits the ability to capture short-term or delayed effects of some events.
* Initially, I will focus on modeling a single change point. More complex models handling multiple change points will be explored in later stages.

## Progress So Far

* Cleaned and reviewed the `BrentOilPrices.csv` dataset.
* Compiled a structured list of major global events in `events_data.csv`.
* Set up a well-organized GitHub repository with CI/CD pipeline and a passing test to ensure development workflows are functioning smoothly.

## Next Steps

The next step is to begin detailed Exploratory Data Analysis (EDA) to investigate key time series properties. This will guide the modeling choices. Then I will move on to implementing the Bayesian Change Point Detection model, interpreting the results, and preparing for dashboard development and final reporting.


**Data Files**:

* `BrentOilPrices.csv`: Historical Brent Oil Prices
* `events_data.csv`: Manually Compiled Event Reference Dataset
