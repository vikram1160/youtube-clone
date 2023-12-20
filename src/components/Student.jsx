import React from 'react'
import PropTypes from 'prop-types'; 

function Student(props) {

    const {name, age, city} = props;

  return (
    <div style={{border: "1px solid red", width: "400px", margin:"10px", padding: "10px"}}>
      <h3 style={{color:"orange", fontSize:"36px"}}>Name: {name}</h3>
      <p style={{color:"green", fontSize:"28px"}}>Age: {age}</p>
      <p style={{color:"blue", fontSize:"28px"}}>City: {city}</p>
    </div>
  )
}

Student.propTypes = {
   name: PropTypes.string.isRequired,
   age: PropTypes.number.isRequired,
   city: PropTypes.string.isRequired
}

Student.defaultProps = {
  name: 'enter name',
  age: 'enter age',
  city: 'enter city'
}

export default Student
