import React, { useState } from "react";
import QualitiesItem from "./GoodPointItem";
import "./GoodPointList.css";

const GoodPointList = (props) => {
  const [filteredValue, setFiteredValue] = useState();

  const filterHandler = (event) => {
    setFiteredValue(event.target.value);
  };
  console.log(filteredValue);

  return (
    <React.Fragment>
      <div className="goal--list">
        <select onChange={filterHandler} defaultValue={'default'}>
          <option value={'default'} disabled>Sort by</option>
          <option value="high">Upvote (high-low)</option>
          <option value="low">Upvote (low-high)</option>
        </select>
        <ul>
          {props.goodpointItem.map((items) => (
            <QualitiesItem
              key={items.id}
              id={items.id}
              value={items.value}
              onRemove={props.onRemove}
              onSelected={filteredValue}
              items = {items}
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
