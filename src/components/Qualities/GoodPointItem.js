import React, { useState } from "react";
import "./GoodPointItem.css";

const GoodPointItem = (props) => {
  const [upvote, setUpvote] = useState(0);

  const upvoteHandler = () => {
    setUpvote((prevUpvote) => prevUpvote + 1);
  };

  return (
    <li className="q--goal-item">
      {props.children}
      <button onClick={upvoteHandler}>+{upvote}</button>
    </li>
  );
};

export default GoodPointItem;
