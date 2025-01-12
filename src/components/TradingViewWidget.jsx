"use client";
import React, { useEffect, useState, memo } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function TradingViewWidget() {
  const [chartData, setChartData] = useState(null);
  const [interval, setInterval] = useState("30"); // Default interval (30 days)

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        // Fetch historical market data for Bitcoin based on selected interval
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${interval}&interval=daily`
        );
        const data = await response.json();

        // Process the data for the chart
        const labels = data.prices.map((price) =>
          new Date(price[0]).toLocaleDateString("en-US", { day: "numeric", month: "long" })
        );
        const prices = data.prices.map((price) => price[1]);

        setChartData({
          labels,
          datasets: [
            {
              label: "Bitcoin Price (USD)",
              data: prices,
              borderColor: "#0052FE",
              backgroundColor: "rgba(0, 0, 255, 0.1)", // Shaded area color
              tension: 0.3,
              borderWidth: 2, // Line width
              pointRadius: 0, // Remove the circles at each data point
              // Add shadow properties here
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              shadowBlur: 5,
              shadowColor: "rgba(0, 0, 255, 0.4)", // Light shadow around the line
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    fetchBitcoinData();
  }, [interval]); // Fetch new data whenever interval changes

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column", // To stack the chart and buttons vertically
        padding: "20px",
        backgroundColor: "white", // Background color
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        height: "100vh", // Take up full height
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button onClick={() => setInterval("1")} style={buttonStyle}>1 H</button>
        <button onClick={() => setInterval("1")} style={buttonStyle}>24 H</button>
        <button onClick={() => setInterval("7")} style={buttonStyle}>7 D</button>
        <button onClick={() => setInterval("30")} style={buttonStyle}>1 M</button>
        <button onClick={() => setInterval("365")} style={buttonStyle}>1 Y</button>
      </div>
      {chartData ? (
        <div style={{ width: "90%", height: "600px" }}>
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "#000", // Legend text color
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "",
                    color: "#000", // Axis label color
                  },
                  ticks: {
                    color: "#000", // Tick text color
                    maxTicksLimit: 5, // Limit the number of ticks to ~5
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Price (USD)",
                    color: "#000", // Axis label color
                  },
                  ticks: {
                    color: "#000", // Tick text color
                  },
                },
              },
            }}
          />
        </div>
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: "8px 12px",
  fontSize: "14px",
  backgroundColor: "#0052FE",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

export default memo(TradingViewWidget);