import React, { useState } from "react";
import "./ImprovementItem.css";

const ImprovementItem = (props) => {
  const [upvote, setUpvote] = useState(0);


  const upvoteHandler = () => {
    setUpvote((prevUpvote) => prevUpvote + 1);
  };

  const deleteHandler = () =>{
    props.onDelete(props.id)
  }

  return (
    <li className="goal-item" >
      {props.children}
      <button onClick={upvoteHandler}>+{upvote}</button>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default ImprovementItem;
