import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
  return (
    <tr>
      <td>
        <img src={props.imageUrl} className="img-thumbnail rounded float-left mt-1 mr-2 cart-item" alt="Product" />
        <div>
          <h5>{props.finalName}</h5>
          <p>{props.finalDescription}</p>
          <p>{props.specs}</p>
        </div>
      </td>
      <td className="text-right align-middle">R$ {props.totalPrice} <button type="button" onClick={() => props.remove(props.index)} className="btn btn-sm btn-outline-danger"><i className="fas fa-trash-alt"></i></button></td>
    </tr>
  )
}

export default CartItem;
