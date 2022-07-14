import React , {useState} from "react";
import "./ListItem.css";

const ListItem = (props) => {
  const [upvote, setUpvote] = useState(0);

  const upvoteIncrementHandler = () => {
    setUpvote((prevUpvote) => prevUpvote + 1);
  };

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li>
      {props.children}
      <div className="list--button">
        <button onClick={upvoteIncrementHandler}>+{upvote}</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </li>
  );
};

export default ListItem;
