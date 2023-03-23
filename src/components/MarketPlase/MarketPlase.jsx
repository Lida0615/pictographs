import "./market-place.scss";
import Mp1 from "../../assets/brand/mp1.png";
import Mp2 from "../../assets/brand/mp2.png";
import Mp3 from "../../assets/brand/mp3.png";
const MarketPlase = () => {
  return (
    <div className="mp">
      <h2>Market Place</h2>
      <p>
        Picto-Cameras will be available in three starting models : Base, Wide
        Lens, and Rare
      </p>
      <div className="mp_items">
        <div className="mp_item">
          <div className="mp_item_img">
            <img src={Mp1} />
          </div>
          <div className="mp_data">
            <h4>Base model</h4>
            <p>
              A basic camera that can take basic Pictographs in square format
            </p>
          </div>
        </div>
        <div className="mp_item">
          <div className="mp_item_img">
            <img src={Mp2} />
          </div>
          <div className="mp_data">
            <h4>Wide Lens Model</h4>
            <p>
              A camera capable of taking wider shots, best for Pictographs that
              need more length or width
            </p>
          </div>
        </div>
        <div className="mp_item">
          <div className="mp_item_img ">
            <img src={Mp3} />
          </div>
          <div className="mp_data">
            <h4>Rare Model</h4>
            <p>
              A camera that can take wider shots with awider gamma-range of
              Picto-Colors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlase;
