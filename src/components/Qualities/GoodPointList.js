import React from "react";
import QualitiesItem from "./GoodPointItem";
import "./GoodPointList.css";

const GoodPointList = (props) => {
  return (
    <ul className="q--goal-list">
      {props.goodpointItem.map((items) => (
        <QualitiesItem key={items.id} id={items.id} value={items.value} onRemove={props.onRemove}>
          {items.title}
          <br />
        </QualitiesItem>
      ))}
    </ul>
  );
};

export default GoodPointList;
