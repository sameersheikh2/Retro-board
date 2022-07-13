import React, { useState } from "react";
import "./GoodPointInput.css";

const GoodPointInput = (props) => {
  const [qinput, setQinput] = useState("");
  const [add, setAdd] = useState(false);

  const InputHandler = (event) => {
    setQinput(event.target.value);
  };

  const onAddHandler = () => {
    setAdd(!add);
  };


  const SubmitHandler = (e) => {
    e.preventDefault();

    // if (qinput.trim().length === 0) {
    //   return;
    // }
    const data = {
      id: Math.random(),
      title: qinput,
      value: 0,
    };
    props.onAdd(data);
    setQinput("");
    setAdd(false);
  };

  return (
    <div className="heading--div">
      <h2 className="q--heading">
        What went well
        <button onClick={onAddHandler} className="q--add--btn">
          +
        </button>
      </h2>

      {add && (
        <form onSubmit={SubmitHandler} className="q--input--form">
          <input type="text" value={qinput} onChange={InputHandler} required/>
          <br />
          <button >Add</button>
        </form>
      )}
    </div>
  );
};

export default GoodPointInput;
