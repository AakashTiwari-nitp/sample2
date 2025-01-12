"use client";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { FaInfoCircle } from "react-icons/fa";

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

  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const renderPriceRangeBar = (low, current, high) => {
    const range = high - low;
    const position = ((current - low) / range) * 100;

    return (
      <div className="relative w-full h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full my-2">
        <div
          className="absolute top-[-12px] transform -translate-x-1/2"
          style={{ left: `${position}%` }}
        >
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black mx-auto"></div>
          <span className="text-sm font-medium whitespace-nowrap">
            ${current.toLocaleString()}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#fff] rounded-md text-black px-10 py-5 my-3 mx-5 md:w-[70%] mb-5">
      {/* Tabs */}
      <div className="w-full border-b border-gray-200">
        {/* Scrollable container for tabs */}
        <div className="overflow-x-auto">
          <div className="flex min-w-max gap-8 px-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                py-4 px-1 text-sm font-medium relative
                ${
                  activeTab === tab
                    ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }
                transition-colors duration-200
              `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Section */}
      <h2 className="text-xl md:text-2xl font-bold mb-6">Performance</h2>

      <div className="space-y-6 mb-8">
        {/* Today's Range */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-500">Today's Low</span>
              <span className="text-sm text-gray-500">Today's High</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">$46,930.22</span>
              {renderPriceRangeBar(46930.22, 48637.83, 49343.83)}
              <span className="text-sm font-medium">$49,343.83</span>
            </div>
          </div>
        </div>

        {/* 52W Range */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-500">52W Low</span>
              <span className="text-sm text-gray-500">52W High</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">$16,930.22</span>
              {renderPriceRangeBar(16930.22, 48637.83, 49743.83)}
              <span className="text-sm font-medium">$49,743.83</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div className="mb-6 flex items-center gap-2">
        <h2 className="text-xl md:text-2xl font-bold">Fundamentals</h2>
        <FaInfoCircle className="text-gray-400" size={16} />
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
        {[
          {
            label: "Bitcoin Price",
            value: "$16,815.46",
          },
          {
            label: "24h Low / 24h High",
            value: "$16,382.07 / $16,874.12",
          },
          {
            label: "7d Low / 7d High",
            value: "$16,382.07 / $16,874.12",
          },
          {
            label: "Trading Volume",
            value: "$23,249,202,782",
          },
          {
            label: "Market Cap Rank",
            value: "#1",
          },
          {
            label: "Market Cap",
            value: "$323,507,290,047",
          },
          {
            label: "Market Cap Dominance",
            value: "38.343%",
          },
          {
            label: "Volume / Market Cap",
            value: "0.0718",
          },
          {
            label: "All-Time High",
            value: (
              <div className="flex items-center gap-2">
                <span>$69,044.77</span>
                <span className="text-red-500 text-sm">-75.6%</span>
                <div className="text-sm text-gray-500">
                  Nov 10, 2021 (about 1 year)
                </div>
              </div>
            ),
          },
          {
            label: "All-Time Low",
            value: (
              <div className="flex items-center gap-2">
                <span>$67.81</span>
                <span className="text-green-500 text-sm">24729.1%</span>
                <div className="text-sm text-gray-500">
                  Jul 06, 2013 (over 9 years)
                </div>
              </div>
            ),
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-between py-3 border-b border-gray-200 last:border-b-0"
          >
            <span className="text-sm text-gray-500">{item.label}</span>
            <div className="text-sm font-medium text-right">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerformancePage;
