import React, { useState } from "react";
import ImprovementInput from "./components/improvement/ImprovementInput";
import ImprovementList from "./components/improvement/ImprovementList";
import GoodPointInput from "./components/Qualities/GoodPointInput"; //
import GoodPointList from "./components/Qualities/GoodPointList";
import "./App.css";

function App(props) {
  const [items, setItems] = useState([]);
  const [goodPoints, setGoodPoints] = useState([]);


  const improvementDataHandler = (data) => {
    setItems((prevItems) => {
      return [...prevItems, data];
    });
  };
  
  const qualitiesDataHandler = (qdata) => {
    setGoodPoints((prevGoodPoints) => {
      return [...prevGoodPoints, qdata];
    });
  };

  const deleteHander = (impId) => {
    setItems((prevItems) => {
      return prevItems.filter((items) => items.id !== impId);
    });
  };

  const goodPoinDeleteHander = (impId) => {
    setGoodPoints((prevGoodPoints) => {
      return prevGoodPoints.filter((items) => items.id !== impId);
    });
  };

  return (
    <React.Fragment>
      <header className="header-container">
          <GoodPointInput onAdd={qualitiesDataHandler} />
          <ImprovementInput onAdd={improvementDataHandler} />
      </header>
      <div className="main-container">
        <div className="sec-container">
          <GoodPointList
            goodpointItem={goodPoints}
            onRemove={goodPoinDeleteHander}
          />
        </div>
        <div className="first-container">
          <ImprovementList data={items} onDelete={deleteHander} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
