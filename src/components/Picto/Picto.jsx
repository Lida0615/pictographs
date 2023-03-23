import "./picto.scss";
import PictoImg from "../../assets/brand/picto.png";
const Picto = () => {
  return (
    <div className="picto">
      <div className="picto_data">
        <h2>PICTO vs Traditional Photo Apps</h2>
        <p>
          Unlike traditional photo apps, Pictographs uses a customized ai
          photo-recognition software that identifies shape and color points for
          quest fulfillment. Paired with Web3 technology every picture taken
          with the Pictograph interface will connect seamlessly with the
          gamification and game-fi points of the app. This ensures that each
          play-to-earn user action is streamlined and ensures optimal
          functionality for prime game results.
        </p>
      </div>
      <div className="picto_img">
        <img src={PictoImg} alt="" />
      </div>
    </div>
  );
};

export default Picto;
