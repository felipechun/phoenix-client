import React from 'react';

const CheckoutItem = (props) => {
  console.log(props)
  return (
    <div className="card-body border-top">
      <p className="card-text">
        <img src={props.imageUrl} alt={`${props.finalName}`} className="img-thumbnail checkout mr-2" />
        <small><span>{props.finalName}</span>{/* <br /><span>R$ {props.sellingPrice}</span> */}</small>
        </p>
    </div>
  )
}

export default CheckoutItem;
