import React, {  useState } from "react";
import "./GoodPointItem.css";

const GoodPointItem = (props) => {
  const value = props.value;
  const [upvote, setUpvote] = useState(value);
  // const [sortValue , setSortValue] = useState(props.onSelected)

  console.log(props.onSelected)
  console.log(props.items)

  const upvoteHandler = () => {
    setUpvote((prevUpvote) => prevUpvote + 1);
  };
  console.log(upvote)

  const removeDataHandler = () => {
    props.onRemove(props.id);
  };


  return (
    <li className="q--goal-item">
        {props.children}
        <button onClick={upvoteHandler}>+{upvote}</button>
        <button onClick={removeDataHandler}>Delete</button>
      </li>
  );
};

export default GoodPointItem;
