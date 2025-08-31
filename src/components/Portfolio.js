import React, { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area
} from "recharts";
import data from "../data/navData.json";

function Portfolio() {
  const [chartData, setChartData] = useState([]);
  const [drawdownData, setDrawdownData] = useState([]);

  useEffect(() => {
    const processed = data.map((d) => ({
      date: d.Date.slice(0, 10),
      nav: d.NAV
    }));
    setChartData(processed);

    // Compute drawdowns
    let peak = -Infinity;
    const dd = processed.map((d) => {
      peak = Math.max(peak, d.nav);
      return { date: d.date, dd: ((d.nav - peak) / peak) * 100 };
    });
    setDrawdownData(dd);
  }, []);

  return (
    <div>
      <h1>Trailing Returns</h1>
      <table className="returns">
        <thead>
          <tr>
            <th>Name</th>
            <th>YTD</th>
            <th>1D</th>
            <th>1W</th>
            <th>1M</th>
            <th>3M</th>
            <th>6M</th>
            <th>1Y</th>
            <th>3Y</th>
            <th>SI</th>
            <th>DD</th>
            <th>MAX DD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Focused</td>
            <td>-1.7%</td>
            <td>43.5%</td>
            <td>23.9%</td>
            <td>22.5%</td>
            <td>22.5%</td>
            <td>22.5%</td>
            <td>22.5%</td>
            <td>22.5%</td>
            <td>22.5%</td>
            <td>22.5%</td>
            <td>22.5%</td>
            
          </tr>
          <tr>
            <td>NIFTY50</td>
            <td>3.1%</td>
            <td>26.2%</td>
            <td>16.0%</td>
            <td>14.5%</td>
            <td>22.5%</td>
            <td>22.5%</td>
            <td>22.5%</td>
            <td>22.5%</td>
            <td>22.5%</td>
            <td>22.5%</td>
            <td>22.5%</td>
          </tr>
        </tbody>
      </table>

      <h2>Equity Curve</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" hide />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="nav" stroke="green" dot={false} />
        </LineChart>
      </ResponsiveContainer>

      <h2>Drawdown</h2>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={drawdownData}>
          <XAxis dataKey="date" hide />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="dd" stroke="red" fill="red" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Portfolio;
