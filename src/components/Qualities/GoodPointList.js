import React from "react";
import QualitiesItem from "./GoodPointItem";
import "./GoodPointList.css";

const GoodPointList = (props) => {
  // const [selectedOption , setSelectedOption] = useState('')

  // const sortHandler =(e) =>{
  //   setSelectedOption(e.target.value)
  // }

  return (
    <React.Fragment>
<div className='goal--list'>
      {/* <select onChange={sortHandler}>
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
            // onSelected={selectedOption}
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
