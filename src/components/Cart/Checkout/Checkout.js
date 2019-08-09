import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';
import CheckoutItem from './CheckoutItem';
import AuthService from '../../authentication/auth-service/auth-service';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userObj,
      myCart: [],
    }
    this.service = new AuthService();
  }

  componentDidMount = () => {
    this.service.getCart()
      .then(answer => {
        console.log(answer[0])
        this.setState({
          myCart: answer[0],

        })
        
      })
      .catch(err => console.log(err))
  }

  purchased = () => {
    console.log(this.state.myCart._id)
    this.service.editCart(this.state.myCart._id, 'Purchased')
    .then(answer => {
      console.log(answer)
    })
    .catch()
  }

  render() {
    if(this.state.myCart.length === 0) {
      return (
        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
              <h4 className="border-bottom text-uppercase"><small>Cart Checkout</small></h4>
              <div className="row d-flex flex-row-reverse flex-wrap">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="card">
                    <div className="card-header d-flex flex-row justify-content-between">
                      <span>Your Products</span> <Link to="/showcase"><i className="fas fa-trash-alt"></i></Link>
                    </div>
                    <div className="card-body border-top">
                    </div>
                     {/* { this.state.flag ? <p>loading</p> : 
                      console.log(this.state.myCart)
                    }  */}
                      <p>im there</p>
                    <div className="card-footer d-flex flex-row justify-content-between">
                    <span>TOTAL</span> <span>R$ {this.state.myCart.total}</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                  <h6>Corfim your infos</h6>
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-3 col-md-3 col-lg-2 col-xl-2">
                        <img src="/images/users.png" id="infos-checkout" className="card-img p-4" alt="..." />
                      </div>
                      <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                        <div className="card-body">
                          <p className="card-text"><span className="font-weight-bold">Name:</span> {this.state.user.name}<br />
                          <span className="font-weight-bold">E-mail:</span> {this.state.user.username}<br />
                          <span className="font-weight-bold">CPF:</span> {this.state.user.cpf}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6>Confirm your shipping address</h6>
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-3 col-xl-2">
                        <img src="/images/shipping.png" id="infos-checkout" className="card-img p-4" alt="..." />
                      </div>
                      <div className="col-9 col-xl-10">
                        <div className="card-body">
                          <p className="card-text"><span className="font-weight-bold">Adress:</span> {this.state.user.address}<br />
                          <span className="font-weight-bold">City:</span> {this.state.user.city}<br />
                          <span className="font-weight-bold">Cep:</span> {this.state.user.cep}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 text-center">
                  <h6>Click to generate your billing</h6>
                    <button type="button" className="btn btn-outline-success d-inline-block">Pay</button>
                  </div>
                </div>
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
              <h4 className="border-bottom text-uppercase"><small>Cart Checkout</small></h4>
              <div className="row d-flex flex-row-reverse flex-wrap">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="card">
                    <div className="card-header d-flex flex-row justify-content-between">
                      <span>Your Products</span> <Link to="/showcase"><i className="fas fa-trash-alt"></i></Link>
                    </div>
                     { 
                      this.state.myCart.products.map((item, index) => {
                        return <CheckoutItem key={index} {...item} />
                      })
                    }  
  
                    <div className="card-footer d-flex flex-row justify-content-between">
                    <span>TOTAL</span> <span>R$ {this.state.myCart.total}</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                  <h6>Corfim your infos</h6>
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-3 col-md-3 col-lg-2 col-xl-2">
                        <img src="/images/users.png" id="infos-checkout" className="card-img p-4" alt="..." />
                      </div>
                      <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                        <div className="card-body">
                          <p className="card-text"><span className="font-weight-bold">Name:</span> {this.state.user.name}<br />
                          <span className="font-weight-bold">E-mail:</span> {this.state.user.username}<br />
                          <span className="font-weight-bold">CPF:</span> {this.state.user.cpf}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6>Confirm your shipping address</h6>
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-3 col-xl-2">
                        <img src="/images/shipping.png" id="infos-checkout" className="card-img p-4" alt="..." />
                      </div>
                      <div className="col-9 col-xl-10">
                        <div className="card-body">
                          <p className="card-text"><span className="font-weight-bold">Adress:</span> {this.state.user.address}<br />
                          <span className="font-weight-bold">City:</span> {this.state.user.city}<br />
                          <span className="font-weight-bold">Cep:</span> {this.state.user.cep}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 text-center">
                    <h6>Click to generate your billing</h6>
                    <Link to="/profile">
                      <button type="button" onClick={this.purchased} className="btn btn-outline-success d-inline-block">Pay</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

  }
}

export default Checkout;
