import React from 'react'

const Input = (props) => {
  return (
    <input className={props.className} type={props.type} onChange={props.onChange} placeholder={props.placeholder} />
  )
}

export default Input;