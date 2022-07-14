import React, { useState } from "react";
import Input from "../UI/Input";
import ListItem from "../UI/ListItem";
import "./ImprovementsList.css";

const ImprovementsList = () => {
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

  const onDeleteHandler = (Id) => {
    setData((prevData) => {
      return prevData.filter((items) => items.id !== Id);
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
      {showInput && <Input onGetData={dataHandler} />}
      <ul className="improve--list">
        {data.map((dataItems) => (
          <ListItem
            key={dataItems.id}
            id={dataItems.id}
            onDelete={onDeleteHandler}
          >
            {dataItems.title}
          </ListItem>
        ))}
      </ul>
    </>
  );
};

export default ImprovementsList;
