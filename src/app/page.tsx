import Header from "../components/Header";
import Sentiment from "../components/Sentiment";
import AboutBitcoin from "../components/AboutBitcoin";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";
import GettingStarted from "../components/GettingStarted";
import TrendingCoin from "../components/TrendingCoin";

export default function Home() {
  return (
    <>
      <Header />
      <Sentiment />
      <AboutBitcoin />
      <Tokenomics />
      <Team />
      <GettingStarted />
      <TrendingCoin />
    </>
  );
}
