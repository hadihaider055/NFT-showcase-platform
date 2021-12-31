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
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="main__content">
        <div className="punk__highlight">
          <div className="punk__container">
            <img
              className="selected__punk"
              src={activePunk.image_original_url}
              alt="bandana punk"
            />
          </div>
        </div>

        <div className="punk__details">
          <div className="title">
            {activePunk.name}
            <span className="item__number">#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImage__container">
              <img src={activePunk.owner.profile_img_url} alt="owner" />
            </div>
            <div className="owner__details">
              <div className="ownerName__handles">
                <div>{activePunk.owner.address}</div>
                <div className="owner__handle">@Hadi</div>
              </div>
              <div className="owner__link">
                <img src={InstagramLogo} alt="instagram" />
              </div>
              <div className="owner__link">
                <img src={TwitterLogo} alt="twitter" />
              </div>
              <div className="owner__link">
                <img src={MoreIcon} alt="more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
