"use client";
import React, { useEffect, useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";

const TrendingCoin = () => {
  const [coins, setCoins] = useState([]);

  // Fetch trending coins from the CoinGecko API
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        const trendingCoins = data.coins.slice(7, 10).map((coin) => ({
          name: coin.item.name,
          symbol: coin.item.symbol,
          thumb: coin.item.thumb,
          marketCapRank: coin.item.market_cap_rank,
        }));
        setCoins(trendingCoins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <>
      <div className=" bg-white px-10 py-5 md:w-[35%] lg:w-[30%] rounded-md my-3 mx-5 flex flex-col items-center">
        <section>
          <h1 className="text-2xl font-bold mb-4 text-black">
            Trending Coins (24h)
          </h1>
        </section>
        <section>
          {coins.length === 0 ? (
            <p className="text-black">Loading...</p>
          ) : (
            <ul>
              {coins.map((coin, index) => (
                <li
                  key={index}
                  className="flex items-center mb-3 p-2 bg-gray-100 rounded-md shadow-sm"
                >
                  <img
                    src={coin.thumb}
                    alt={coin.name}
                    className="w-10 h-10 mr-4 rounded-full"
                  />
                  <div className="flex gap-6 items-center">
                    <p className="text-lg font-semibold text-black">
                      {coin.name.split(" ")[0]} ({coin.symbol.toUpperCase()})
                    </p>
                    <div className="bg-green-200 p-2 flex gap-2 text-[#14B079] rounded-md">
                      <BiSolidUpArrow size={20} />
                      <p className="text-sm">
                        {coin.marketCapRank}%
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
};

export default TrendingCoin;
