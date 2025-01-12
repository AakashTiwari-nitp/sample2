"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function PerformancePage() {
  // Example data for the line chart
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Bitcoin Price (USD)",
        data: [16500, 16800, 17200, 17800],
        borderColor: "#0052FE",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides legend to match the clean UI
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USD)",
        },
      },
    },
  };

  return (
    <div className="font-sans p-5 bg-white">
      {/* Tabs */}
      <div className="flex gap-5 mb-5">
        {["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"].map((tab, idx) => (
          <button
            key={idx}
            className={`px-5 py-2 rounded ${
              idx === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Performance Section */}
      <h2 className="text-2xl font-bold mb-4 text-black">Performance</h2>
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">
        {/* Today's Low and 52W Low */}
        <div className="flex flex-col w-full space-y-4">
  {/* Line 1: Today's Low */}
  <div className="flex flex-col w-full">
    <div className="flex items-center w-full">
      <span className="text-gray-600">Today's Low</span>
    </div>
    <div className="flex items-center w-full">
    <span className="ml-2 font-bold text-black">$46,930.22</span>
      <div className="relative flex-1 mx-4 h-4 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded">
        <span className="absolute top-[-10px] left-[60%] transform -translate-x-1/2 font-bold text-black">
          $48,637.83
        </span>
      </div>
    </div>
  </div>

  {/* Line 2: 52W Low */}
  <div className="flex flex-col w-full">
    <div className="flex items-center w-full">
      <span className="text-gray-600">52W Low</span>
    </div>
    <div className="flex items-center w-full">
    <span className="ml-2 font-bold text-black">$46,930.22</span>
      <div className="relative flex-1 mx-4 h-4 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded">
        
      </div>
    </div>
  </div>
</div>


        {/* High values */}
        <div className="flex flex-col space-y-4">
  {/* Today's High */}
  <div className="flex flex-col">
    <span className="text-gray-600">Today's High</span>
    <span className="ml-2 font-bold text-black">$46,930.22</span>
  </div>

  {/* 52W High */}
  <div className="flex flex-col">
    <span className="text-gray-600">52W High</span>
    <span className="ml-2 font-bold text-black">$46,930.22</span>
  </div>
</div>

      </div>

      {/* Fundamentals Section */}
      <h2 className="text-2xl font-bold mb-4 text-black">Fundamentals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
  {[
    { title: "Bitcoin Price", value: "$16,815.46" },
    { title: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
    { title: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
    { title: "Trading Volume", value: "$23,249,202,782" },
    { title: "Market Cap", value: "$323,507,290,047" },
    { title: "Market Cap Rank", value: "#1" },
    { title: "All-Time High", value: "$69,044.77 (Nov 10, 2021)" },
    { title: "All-Time Low", value: "$67.81 (Jul 06, 2013)" },
  ].map((fundamental, idx) => (
    <div key={idx} className="p-4 border rounded shadow-sm bg-white">
      <div className="text-sm text-gray-600 border-b pb-1">{fundamental.title}</div>
      <div className="font-bold text-lg">{fundamental.value}</div>
    </div>
  ))}
</div>


     
    </div>
  );
}

export default PerformancePage;