import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
  

  return (
    <li>
      {props.children}
      <div className="list--button">
        <button>Upvote</button>
        <button >Delete</button>
      </div>
    </li>
  );
};

export default ListItem;
