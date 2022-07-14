import React , {useState} from "react";
import Input from "../UI/Input";

const GoodPointList = () => {
  const [showInput, setShowInput] = useState(false);

  const showInputHandler = () => {
    setShowInput(!showInput);
  };
  return (
    <>
      <h2>
        What went well
        <button className="btn-red" onClick={showInputHandler}>
          +
        </button>
      </h2>
      {showInput && <Input />}
      <ul className="improve--list"></ul>
    </>
  );
};

export default GoodPointList;
