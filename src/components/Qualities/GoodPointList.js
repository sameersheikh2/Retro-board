import React from "react";
import QualitiesItem from "./GoodPointItem";
import "./GoodPointList.css";

const GoodPointList = (props) => {
  return (
    <ul className="q--goal-list">
      {props.qdata.map((items) => (
        <QualitiesItem key={items.id} id={items.id}>
          {items.title}
          <br />
        </QualitiesItem>
      ))}
    </ul>
  );
};

export default GoodPointList;
