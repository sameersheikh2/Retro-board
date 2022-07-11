import React, { useState } from "react";
import "./ImprovementInput.css";

const ImprovementInput = (props) => {
  const [input, setInput] = useState("");
  const [add, setAdd] = useState(false);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const onAddHandler = () => {
    setAdd(!add);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // if (input.trim().length === 0) {
    //   return;
    // }
    const data = {
      id: Math.random(),
      title: input,
    };
    props.onAdd(data);
    setInput("");
    setAdd(false)
  };

  return (
    <React.Fragment>
      <h2 className="heading">What didn't go well<button onClick={onAddHandler} className="add--btn">
        +
      </button></h2>      
      {add && (
        <form onSubmit={submitHandler} className="input--form">
          <input type="text" value={input} onChange={inputHandler} required />
          <br />
          <button >Add</button>
        </form>
      )}
    </React.Fragment>
  );
};

export default ImprovementInput;
