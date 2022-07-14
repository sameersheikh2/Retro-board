import React , {useState} from 'react'

const Input = (props) => {
  const [inputData , setInputData] = useState();

  const onAddHandler = event => {
    setInputData(event.target.value)
  }

  const onSubmitHandler = (event)=>{
    event.preventDefault();
    const data ={
        id: Math.random(),
        title: inputData,
      }
      props.onGetData(data)
    }

  return (
    <form onSubmit={onSubmitHandler} className='form'>
      <input type="text"  required onChange={onAddHandler} />
      <button className="form-btn">Add</button>
    </form>
  );
};

export default Input