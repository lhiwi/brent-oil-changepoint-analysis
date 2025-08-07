import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Scatter, ScatterChart
} from 'recharts';

function App() {
  const [priceData, setPriceData] = useState([]);
  const [events, setEvents] = useState([]);
  const [changePoints, setChangePoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [priceRes, eventsRes, changeRes] = await Promise.all([
          axios.get('/api/price'),
          axios.get('/api/events'),
          axios.get('/api/change-point')
        ]);

        setPriceData(priceRes.data);
        setEvents(Array.isArray(eventsRes.data) ? eventsRes.data : []);
        setChangePoints(Array.isArray(changeRes.data) ? changeRes.data : []);
      } catch (err) {
        console.error("Error loading data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Brent Oil Price Change Point Dashboard</h1>

      {/* Main Price Chart with Change Points */}
      <h2>Brent Oil Prices Over Time</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={priceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" tick={{ fontSize: 10 }} />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Price" stroke="#1f77b4" dot={false} />

          {/* Mark change points with red dots */}
          <Scatter data={changePoints} fill="red" shape="circle" line legendType="none">
            {changePoints.map((pt, idx) => (
              <Scatter key={idx} data={[{ Date: pt.Date, Price: pt.MuAfter }]} fill="red" />
            ))}
          </Scatter>
        </LineChart>
      </ResponsiveContainer>

      {/* Event Listing */}
      <h2>Key Events Impacting Prices</h2>
      <ul>
        {events.map((e, idx) => (
          <li key={idx}>
            <strong>{e.Date}:</strong> {e.EventName} - <em>{e.Description}</em>
          </li>
        ))}
      </ul>

      {/* Summary of Change Points */}
      <h2>Detected Change Points</h2>
      <table border="1" cellPadding={8} style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Mu Before</th>
            <th>Mu After</th>
            <th>Volatility Before</th>
            <th>Volatility After</th>
          </tr>
        </thead>
        <tbody>
          {changePoints.map((pt, i) => (
            <tr key={i}>
              <td>{pt.Date}</td>
              <td>{pt.MuBefore?.toFixed(2)}</td>
              <td>{pt.MuAfter?.toFixed(2)}</td>
              <td>{pt.VolatilityBefore?.toFixed(2)}</td>
              <td>{pt.VolatilityAfter?.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
