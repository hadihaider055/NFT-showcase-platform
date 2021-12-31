import "./App.scss"; // import App.scss
import Header from "./components/header"; // import Header Component
import { useState, useEffect } from "react"; // import useState and useEffect
import axios from "axios"; // import axios
import PunkList from "./components/punkList"; // import PunkList
import Main from "./components/main"; // import Main Component

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getNfts = async () => {
      const openseaData = await axios.get(
        `https://testnets-api.opensea.io/assets?asset_contract_address=${process.env.REACT_APP_ASSET_CONTRACT_ADDRESS}&order_direction=asc`
      );
      setPunkListData(openseaData.data.assets);
      console.log(openseaData.data.assets);
    };
    getNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
