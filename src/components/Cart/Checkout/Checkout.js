import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('shoppingCart checkout ---------->', this.props.shoppingCart)
    console.log('cartLength checkout ---------->', this.props.cartLength)
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <h4 className="border-bottom text-uppercase"><small>Cart Checkout</small></h4>
            <div className="row d-flex flex-row-reverse flex-wrap">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card">
                  <div className="card-header d-flex flex-row justify-content-between">
                    <span>Your Products</span> <Link to="/cart"><small>Edit Cart</small></Link>
                  </div>
                  <div className="card-body border-top">
                    { this.props.cartLength === 1 ? <p className="card-text">{this.props.cartLength} item</p> : <p className="card-text">{this.props.cartLength} items</p> }
                  </div>
                  <div className="card-body border-top">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text"><img src="http://placeimg.com/50/50/tech/sepia" id="checkout" alt="..." className="img-thumbnail" /></p>
                  </div>
                  <div className="card-body border-top">
                    <p className="card-text"><img src="http://placeimg.com/50/50/tech/sepia" id="checkout" alt="..." className="img-thumbnail" /></p>
                  </div>
                  <div className="card-body border-top">
                    <p className="card-text"><img src="http://placeimg.com/50/50/tech/sepia" id="checkout" alt="..." className="img-thumbnail" /></p>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between">
                  <span>TOTAL</span> <span>R$ </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <h6>Corfim your infos</h6>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-3 col-md-3 col-lg-2 col-xl-2">
                      <img src="../../../../images/users.png" id="infos-checkout" className="card-img p-4" alt="..." />
                    </div>
                    <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                      <div className="card-body">
                        <p className="card-text">Name: <br />
                        E-mail: <br />
                        Phone: </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h6>Confirm your shipping address</h6>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-3 col-xl-2">
                      <img src="../../../../images/shipping.png" id="infos-checkout" className="card-img p-4" alt="..." />
                    </div>
                    <div className="col-9 col-xl-10">
                      <div className="card-body">
                        <p className="card-text">Adress:  <br />
                        City:  <br />
                        Cep: </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h6>Confirm to generate your billing</h6>
                <div className="mb-3 text-center">
                  <button type="button" className="btn btn-outline-success d-inline-block">Pay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout;
