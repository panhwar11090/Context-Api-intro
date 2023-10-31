import React, { useContext, useState } from 'react'
import globalContext from '../../context/global/globalContext';

const Form = () => {
  const {addStudents} = useContext(globalContext);
  const [state, setState] = useState({
    username:'',
    age:''
  });

  const onChange = e => setState({
    ...state,
    [e.target.name]:[e.target.value]
  })

  const onSubmit = e =>{
    e.preventDefault();
    const{username, age} = state;
    if(username === '' || age === ''){
      alert('Some credential are missing');
    }else{
      addStudents(state)
      setState({
        username:'',
        age:''
      })
    }
  }




  return (
    
      <form onSubmit={onSubmit}>
        <h2>Add Students</h2>
        <div className='form-control'>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" name="username" value={state.username} onChange={onChange} placeholder="Enter username" />
        </div>
        <div className='form-control'>
            <label htmlFor="age">Age</label>
            <input type="text" id="age" name="age" value={state.age} onChange={onChange} placeholder="Enter age" />
        </div>
        <input type="submit" value="Add" />
    </form>
    
  )
}

export default Form;
