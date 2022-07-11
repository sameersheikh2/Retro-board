import React from "react";
import ImprovementItem from "./ImprovementItem";
import "./ImprovementList.css";

const ImprovementList = (props) => {
  return (
    <ul className="goal-list">
      {props.data.map((items) => (
        <ImprovementItem key={items.id} id={items.id} onDelete={props.onDelete}>
          {items.title}
          <br />
        </ImprovementItem>
      ))}
    </ul>
  );
};

export default ImprovementList;
