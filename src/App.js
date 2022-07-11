import React, { useState } from "react";
import ImprovementInput from "./components/improvement/ImprovementInput";
import ImprovementList from "./components/improvement/ImprovementList";
import GoodPointInput from "./components/Qualities/GoodPointInput"; //
import GoodPointList from "./components/Qualities/GoodPointList";
import "./App.css";

function App(props) {
  const [items, setItems] = useState([]);
  const [qitems, setQitems] = useState([]);

  const improvementDataHandler = (data) => {
    setItems((prevItems) => {
      return [...prevItems, data];
    });
  };
  const qualitiesDataHandler = (qdata) => {
    setQitems((prevQitems) => {
      return [...prevQitems, qdata];
    });
  };

  const deleteHander = (impId) => {
    setItems((prevItems) => {
      return prevItems.filter((items) => items.id !== impId);
    });
  };

  return (
    <React.Fragment>
      <div className="main-container">
        <div className="sec-container">
          <GoodPointInput onAdd={qualitiesDataHandler} />
          <GoodPointList qdata={qitems} />
        </div>
        <div className="first-container">
          <ImprovementInput onAdd={improvementDataHandler} />
          <ImprovementList data={items} onDelete={deleteHander} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
