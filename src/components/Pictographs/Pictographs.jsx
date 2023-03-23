import "./pictographs.scss";
import Solana from "../../assets/svg/solanaLogoMark2.svg";
import PictographsApp from "../../assets/brand/pictographs-app.png";
import Telegram from "../../assets/svg/telegram.svg";
import Discord from "../../assets/svg/discord.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Medium from "../../assets/svg/medium.svg";
import Twitter from "../../assets/svg/twitter.svg";
import Reddit from "../../assets/svg/reddit.svg";
import Arrow from "../../assets/svg/Arrow.svg";
import { Link } from "react-router-dom";
const Pictographs = () => {
  return (
    <div className="pictographs">
      <div className="pictographs_item">
        <h1>PICTOGRAPHS</h1>
        <span className="pictographs_by">
          Powered by
          <img src={Solana} alt="" />
          Solana
        </span>

        <h2>What is PICTOGRAPHS </h2>
        <p>
          PICTO is a community-based photo app game incorporating social media
          on the blockchain with a layer of finance. Along with, rewarding
          players financially for their time and effort placed into the game.
          The interactive user experience encourages user creativity and
          engagement with peer-to- peer photography via game quests.
        </p>
        <img src={PictographsApp} alt="" className="pictographs_mainpic" />
      </div>

      <div className="pictographs_item">
        <Link to="#">
          <img src={Telegram} alt="" />
          Telegram news
        </Link>
        <Link to="#">
          <img src={Telegram} alt="" />
          Telegram chat
        </Link>
        <Link to="#">
          <img src={Discord} alt="" />
          Discord
        </Link>
        <Link to="#">
          <img src={Instagram} alt="" />
          Instagram
        </Link>
        <Link to="#">
          <img src={Medium} alt="" />
          Medium
        </Link>
        <Link to="#">
          <img src={Twitter} alt="" />
          Twitter
        </Link>
        <Link to="#">
          <img src={Reddit} alt="" />
          Reddit
        </Link>
      </div>
      <div className="pictographs_item">
        <Link to="#" className="pictographs_btn">
          Lets go
          <img src={Arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Pictographs;
