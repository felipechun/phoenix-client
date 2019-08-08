import React from 'react'

const SubmitBtn = (props) => {
  return (
    <button type={props.type} className={props.className} disabled={props.disabled}>{props.children} </button>
  )
}

export default SubmitBtn;