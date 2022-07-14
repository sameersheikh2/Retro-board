import React from 'react'
import Input from '../UI/Input'


const GoodPointList = () => {
  return (
    <>
    <h2>
      What went well
      <button className="btn-red" o>
        +
      </button>
    </h2>
    <Input/>
    <ul className="improve--list">
      
    </ul>
  </>
  )
}

export default GoodPointList