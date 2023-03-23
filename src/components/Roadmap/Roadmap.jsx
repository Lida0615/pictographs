import "./roadmap.scss";
import Map from "../../assets/svg/roadmap.svg";
const Roadmap = () => {
  return (
    <div className="roadmap">
      <h2>Roadmap</h2>
      {/* <img src={Map} className="roadmap_liner" /> */}
      <div className="roadmap_items">
        <div className="roadmap_item">
          <h5>Q1 / PHASE 1</h5>
          <ul>
            <li>Development Stage :</li>
            <li>NFT Design</li>
            <li>Gamification Draft</li>
            <li>Whitepaper Draft</li>
            <li>Tokenomics</li>
            <li>Website</li>
            <li>Solana Smart </li>
            <li>Contract</li>
          </ul>
        </div>
        <div className="roadmap_item">
          <h5>Q2 / PHASE 2</h5>
          <ul>
            <li>Private Investment</li>
            <li>Round</li>
            <li>NFT Creation & </li>
            <li>Minting on Solana</li>
            <li>Album Creation on</li>
            <li>Marketplace</li>
            <li>ICO Preparation : </li>
            <li>Launchpad, </li>
            <li>Investors</li>
          </ul>
        </div>
        <div className="roadmap_item">
          <h5>Q3 / PHASE 3</h5>
          <ul>
            <li>ICO Launch</li>
            <li>NFT Drop 1: Q2 &</li>
            <li> Q3 Participants</li>
          </ul>
        </div>
        <div className="roadmap_item">
          <h5>Q4 / PHASE 4</h5>
          <ul>
            <li>Application</li>
            <li>Development </li>
            <li> Stage 1</li>
          </ul>
        </div>
        <div className="roadmap_item">
          <h5>Q5 / PHASE 5</h5>
          <ul>
            <li>IDO (Binance,</li>
            <li>Kucoin, etc…)</li>
            <li>Game Demo & </li>
            <li>NFT Drop 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
