"use client";
import React, { useEffect, useState, memo } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function TradingViewWidget() {
  const [chartData, setChartData] = useState(null);
  const [interval, setInterval] = useState("30");

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${interval}&interval=daily`
        );
        const data = await response.json();

        const labels = data.prices.map((price) =>
          new Date(price[0]).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
          })
        );
        const prices = data.prices.map((price) => price[1]);

        setChartData({
          labels,
          datasets: [
            {
              label: "Bitcoin Price (USD)",
              data: prices,
              borderColor: "#0052FE",
              backgroundColor: "rgba(0, 0, 255, 0.1)",
              tension: 0.3,
              borderWidth: 2,
              pointRadius: 0,
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              shadowBlur: 5,
              shadowColor: "rgba(0, 0, 255, 0.4)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    fetchBitcoinData();
  }, [interval]);

  const timeIntervals = [
    { label: "24 H", value: "1" },
    { label: "7 D", value: "7" },
    { label: "1 M", value: "30" },
    { label: "1 Y", value: "365" },
  ];

  return (
    <div className="bg-[#fff] rounded-md text-black px-10 py-5 my-3 mx-5 md:w-[70%] mb-5">
      {/* Time interval buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6 w-full max-w-2xl">
        {timeIntervals.map((time) => (
          <button
            key={time.label}
            onClick={() => setInterval(time.value)}
            className={`
              px-3 py-2 md:px-4 md:py-2 
              text-xs md:text-sm
              rounded
              transition-colors
              ${interval === time.value 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }
            `}
          >
            {time.label}
          </button>
        ))}
      </div>

      {/* Chart container */}
      {chartData ? (
        <div className="w-full h-[300px] md:h-[400px] lg:h-[600px]">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "#000",
                    font: {
                      size: window.innerWidth < 768 ? 10 : 12
                    }
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "",
                    color: "#000",
                  },
                  ticks: {
                    color: "#000",
                    maxTicksLimit: window.innerWidth < 768 ? 4 : 5,
                    font: {
                      size: window.innerWidth < 768 ? 10 : 12
                    }
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Price (USD)",
                    color: "#000",
                  },
                  ticks: {
                    color: "#000",
                    font: {
                      size: window.innerWidth < 768 ? 10 : 12
                    }
                  },
                },
              },
            }}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-[300px] md:h-[400px] lg:h-[600px]">
          <p className="text-gray-600">Loading chart...</p>
        </div>
      )}
    </div>
  );
}

export default memo(TradingViewWidget);