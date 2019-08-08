import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import AuthService from '../authentication/auth-service/auth-service';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myCart: '',
    }
    this.service = new AuthService();
  }

  componentDidMount = () => {
    // get user cart
  this.service.getCart()
    .then(answer => {
      this.setState={
        myCart: answer,
      }
    })

  }

  render() {
    if (this.props.shoppingCart.length === 0) {
      return (
        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
              <h4 className="border-bottom text-uppercase">Cart</h4>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 text-center">
              <div className="alert alert-info" role="alert">
                Your shopping cart is empty.
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
              <h4 className="border-bottom text-uppercase">Cart</h4>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
              <h5 className="border-bottom">This is your checkout area</h5>
              <table className="table table-sm">
                <thead className="thead-light">
                  <tr>
                    <th>Product</th>
                    <th className="text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  { this.props.shoppingCart.map((item, index) => {
                    return <CartItem key={item._id} index={index} {...item} remove={this.props.remove} />
                  })}
                </tbody>
                <tfoot className="thead-dark">
                  <tr>
                    <th>Total Value</th>
                    <th className="text-right">R$ {this.props.total}</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 text-center">
              <Link to="/cart/checkout" onClick={() => this.props.checkout()} className="btn btn-outline-success">Checkout</Link>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Cart;