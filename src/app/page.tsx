import Header from "../components/Header";
import Sentiment from "../components/Sentiment";
import AboutBitcoin from "../components/AboutBitcoin";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";
import GettingStarted from "../components/GettingStarted";
import TrendingCoin from "../components/TrendingCoin";
import PerformancePage from "../components/PerformancePage";
import TradingViewWidget from "../components/TradingViewWidget"

export default function Home() {
  return (
    <>
      <Header />
      <TradingViewWidget/>
      <PerformancePage />
      <Sentiment />
      <AboutBitcoin />
      <Tokenomics />
      <Team />
      <GettingStarted />
      <TrendingCoin />
    </>
  );
}
