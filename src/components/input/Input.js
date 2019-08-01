import React from 'react'

const Input = (props) => {
  return (
    <input placeholder={props.placeholder} className={props.className} type={props.type} onChange={props.onChange}></input>
  )
}

export default Input;