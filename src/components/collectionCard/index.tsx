import React from "react"; // import React
import "./index.scss"; // import index.scss
import Weth from "../../assets/weth.png"; // import weth image

interface CollectionCardProps {
  id: string;
  name: string;
  traits: {
    value: string;
  }[];
  image: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  id,
  name,
  traits,
  image,
}) => {
  return (
    //  Collection Card
    <div className="collection__card">
      <img src={image} alt={name} />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">·#{id}</div>
        </div>

        {/* Price Container */}
        <div className="price__container">
          <img src={Weth} alt="Weth" className="weth__image" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
