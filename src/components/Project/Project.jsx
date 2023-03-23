import "./project.scss";
import Project1 from "../../assets/brand/project1.png";
import Project2 from "../../assets/brand/project2.png";
const Project = () => {
  return (
    <div className="project">
      <div className="project_img">
        <img src={Project1} alt="" />
      </div>
      <div className="project_img">
        <img src={Project2} alt="" />
      </div>
      <div className="project_data">
        <h3>PICTOGRAPHS</h3>
        <h2>Project</h2>
        <p>
          Equipped with their Picto-Camera, users can take pictures andcomplete
          Picto-Quests to receive currency rewards and NFT prizes.The better the
          Picto-Camera equipped, the more advanced thequest the user can take
          on, the higher the payout. In-gamecurrency can be cashed out for
          profit, and NFTs can be “used forparts” in the game’s minting
          mechanism to create better camerasand more advanced NFTs for gameplay,
          collection, or profit.
        </p>
      </div>
    </div>
  );
};

export default Project;
