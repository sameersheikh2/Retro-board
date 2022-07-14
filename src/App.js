import React from "react";
import "./App.css";
import GoodPointsList from "./components/Qualities/GoodPointsList";
import ImprovementsList from "./components/improvement/ImprovementsList";

const App = () => {
  return (
    <div className="main-container">
      <div className="first-container">
        <GoodPointsList />
      </div>
      <div className="sec-container">
        <ImprovementsList />
      </div>
    </div>
  );
};

export default App;
