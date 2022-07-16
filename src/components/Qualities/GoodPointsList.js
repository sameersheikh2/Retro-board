import React, { useState } from "react";
import Input from "../UI/Input";
import ListItem from "../UI/ListItem";
import "./GoodPointList.css";

const GoodPointsList = () => {
  const [showInput, setShowInput] = useState(false);
  const [data, setData] = useState([]);
  const [editTitle, setEditTitle] = useState(false);

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

  const editTitleHandler = (id)=>{
      setEditTitle(!editTitle)
  }

  return (
    <>
      <h2>
        What went well
        <button className="btn" onClick={showInputHandler}>
          +
        </button>
      </h2>
      {showInput && <Input onGetData={dataHandler} />}
      <ul className="goodpoint--list">
        {data.map((dataItems) => (
          <ListItem
            key={dataItems.id}
            id={dataItems.id}
            onDelete={onDeleteHandler}
            onEdit={editTitleHandler}
          >
            {dataItems.title}
            {editTitle && <input value={dataItems.title} type='text'/>}
          </ListItem>
        ))}
      </ul>
    </>
  );
};

export default GoodPointsList;
