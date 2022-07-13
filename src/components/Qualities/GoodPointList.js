import React from "react";
import QualitiesItem from "./GoodPointItem";
import "./GoodPointList.css";

const GoodPointList = (props) => {

 
  return (
    <React.Fragment>
<div className='goal--list'>
      {/* <select >
        <option selected disabled>sort by</option>
        <option value='high'>Upvote (high-low)</option>
        <option value='low'>Upvote (low-high)</option>
      </select> */}
      <ul>
        {props.goodpointItem.map((items) => (
          <QualitiesItem
            key={items.id}
            id={items.id}
            value={items.value}
            onRemove={props.onRemove}
          >
            {items.title}
            <br />
          </QualitiesItem>
        ))}
      </ul>
    </div>
    </React.Fragment>
  );
};

export default GoodPointList;
