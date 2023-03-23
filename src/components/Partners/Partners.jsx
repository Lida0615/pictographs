import "./partners.scss";
import Solana from "../../assets/svg/solanaLogoMark3.svg";
import Phantom from "../../assets/svg/phantom-wallet.svg";
import Arrow from "../../assets/svg/Arrow.svg";

import Solsea from "../../assets/svg/solsea.svg";
import PartnersPhoto from "../../assets/brand/how-to-photo.png";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <div className="partners">
      <h2>Partners & Sponsors</h2>
      <div className="partners__list">
        <div className="partners__item">
          <img src={Solana} alt="partner1" />
          <div className="partners__item__text">
            <span className="partners__item__text-small">BUILT ON</span>
            <span className="partners__item__text-big">SOLANA</span>
          </div>
        </div>
        <div className="partners__item">
          <img src={Phantom} alt="partner2" />
          <div className="partners__item__text">
            <span className="partners__item__text-big">Phantom</span>
            <span className="partners__item__text-small">WALLET</span>
          </div>
        </div>
        <div className="partners__item">
          <img src={Solsea} alt="partner3" />
          <div className="partners__item__text">
            <span className="partners__item__text-big">solsea</span>
            <span className="partners__item__text-small">MARKETPLACE</span>
          </div>
        </div>
      </div>
      <div className="partners_how">
        <div className="partners_how__text">
          <h3>How to earn PICTOS</h3>
          <p>
            Players can earn in-game currency by completing quests and using it
            to upgrade their equipment or to cash out for profit. Players can
            earn by using their photography skills along with engaging in the
            PICTO community. PICTO promote an active and engaging experience for
            users who enjoy taking pictures with their mobile devices.
          </p>
          <Link to="#" className="partners_btn">
            Lets go
            <img src={Arrow} alt="" />
          </Link>
        </div>
        <div className="partners_how__photo">
          <img src={PartnersPhoto} alt="" />
        </div>
        <div className="partners_item"></div>
      </div>
    </div>
  );
};

export default Partners;
