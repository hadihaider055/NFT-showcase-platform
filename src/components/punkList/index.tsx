import React from "react"; // import React
import CollectionCard from "../collectionCard"; // import CollectionCard Component
import "./index.scss"; // import index.scss

interface PunkListProps {
  punkListData: any[];
  setSelectedPunk: any;
}

const PunkList: React.FC<PunkListProps> = ({
  punkListData,
  setSelectedPunk,
}) => {
  const handleChange = (index: number) => {
    setSelectedPunk(index);
  };
  return (
    <div className="punk__list">
      {punkListData.map((punk) => (
        <div key={punk.token_id} onClick={() => handleChange(punk.token_id)}>
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
