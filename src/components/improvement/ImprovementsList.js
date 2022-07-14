import React, { useState } from "react";
import Input from "../UI/Input";

const ImprovementList = () => {
  const [showInput, setShowInput] = useState(false);
  const [data, setData] = useState([]);

  const showInputHandler = () => {
    setShowInput(!showInput);
  };

  const dataHandler = (data) => {
    setShowInput(false);
    setData((prevData) => {
      return [...prevData, data];
    });
  };

  return (
    <>
      <h2>
        What didn't go well
        <button className="btn-red" onClick={showInputHandler}>
          +
        </button>
      </h2>
      {showInput && <Input onGetData={dataHandler}/>}
      <ul className="improve--list"></ul>
    </>
  );
};

export default ImprovementList;
