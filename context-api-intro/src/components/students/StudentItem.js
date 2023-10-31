import React from 'react'

const StudentItem = ({index, student}) => {
    const {username, age} = student;
  return (
    <div>
        <li>
            <h4>{index+1}. {username}</h4>
            <p>his age is {age}</p>
        </li>
      
    </div>
  )
}

export default StudentItem
