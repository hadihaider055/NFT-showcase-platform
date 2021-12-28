import InstagramLogo from "../../assets/owner/instagram.png"; // import Instagram Logo
import TwitterLogo from "../../assets/owner/twitter.png"; // import Twitter Logo
import MoreIcon from "../../assets/owner/more.png"; // import More Icon
import "./index.scss"; // import index.scss
import React, { useState, useEffect } from "react"; // import react and useState

interface Props {
  punkListData: any;
  selectedPunk: number;
}

const Main: React.FC<Props> = ({ punkListData, selectedPunk }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  console.log(activePunk);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      {/* Main Content  */}
      <div className="main__content">
        <div className="punk__highlight">
          <div className="punk__container">
            <img
              src={activePunk.image_original_url}
              alt={activePunk.name}
              className="selected__punk"
            />
          </div>

          {/* Punk Details */}
          <div className="punk__details" style={{ color: "#fff" }}>
            <div className="title">{activePunk.name}</div>
            <span className="item__number">·#{activePunk.token_id}</span>
          </div>
        </div>
        <div className="owner">
          <div className="ownerImage__container">
            <img src={activePunk.owner.profile_img_url} alt={activePunk.name} />
          </div>

          {/* Owner Details */}
          <div className="owner__details">
            <div className="ownerName__handles">
              <div className="owner__handle">{activePunk.owner.address}</div>
            </div>
            <div className="owner__link">
              <img src={InstagramLogo} alt="Instagram" />
            </div>
            <div className="owner__link">
              <img src={TwitterLogo} alt="Twitter" />
            </div>
            <div className="owner__link">
              <img src={MoreIcon} alt="More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
