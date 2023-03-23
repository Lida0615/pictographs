import "./download.scss";
import DownloadPic from "../../assets/brand/download.png";
import DownloadPhone from "../../assets/brand/download-phone.png";
import DownloadPhone2 from "../../assets/brand/download-phone2.png";
import { Link } from "react-router-dom";
import Apple from "../../assets/svg/apple.svg";
import GooglePl from "../../assets/svg/google-play.svg";

const Download = () => {
  return (
    <div className="download">
      <div className="download_data">
        <h2>Download Soon</h2>
        <span>Install the PTCTOGRAPS app</span>
        <div className="download_data__apps">
          <Link to="#">
            <img src={Apple} alt="download" />
            <div>
              <span>Download on the</span>
              <span>App store</span>
            </div>
          </Link>
          <Link to="#">
            <img src={GooglePl} alt="download" />
            <div>
              <span>Download on the</span>
              <span>Google Play</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="download_pic">
        <img src={DownloadPhone} alt="" />
        <img src={DownloadPhone2} alt="" />
      </div>
    </div>
  );
};

export default Download;
