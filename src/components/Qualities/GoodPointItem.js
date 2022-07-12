import React, { useState } from "react";
import "./GoodPointItem.css";

const GoodPointItem = (props) => {
  const [upvote, setUpvote] = useState(0);

  const upvoteHandler = () => {
    setUpvote((prevUpvote) => prevUpvote + 1);
  };

  const removeDataHandler = () => {
    props.onRemove(props.id);
  };

  return (
    <>
      <li className="q--goal-item">
        <div>{props.children}</div>
        <button onClick={upvoteHandler}>+{upvote}</button>
        <button onClick={removeDataHandler}>Delete</button>
      </li>
    </>
  );
};

export default GoodPointItem;
