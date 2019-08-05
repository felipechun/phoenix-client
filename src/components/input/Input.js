import React from 'react'

const Input = (props) => {
  return (
    <input
    id={props.id}
    placeholder={props.placeholder} 
    className={props.className} 
    name={props.name} 
    type={props.type} 
    onChange={props.onChange}>
    </input>
  )
}

export default Input;