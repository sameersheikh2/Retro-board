import React from "react";
import ImprovementItem from "./ImprovementItem";
import "./ImprovementList.css";

const ImprovementList = (props) => {
  return (
    <React.Fragment>
    <div className="goal-list">
    <ul >
      {props.data.map((items) => (
        <ImprovementItem key={items.id} id={items.id} onDelete={props.onDelete}>
          {items.title}
          <br />
        </ImprovementItem>
      ))}
    </ul>
    </div>
    </React.Fragment>
  );
};

export default ImprovementList;
