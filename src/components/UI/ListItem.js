import React from "react";
import "./ListItem.css";

const ListItem = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li>
      {props.children}
      <div className="list--button">
        <button>Upvote</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </li>
  );
};

export default ListItem;
