import React, { Component } from 'react'
import AuthService from '../authentication/auth-service/auth-service';
import ProductCard from '../ProductCard/ProductCard';

export class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: null,
      user: this.props.userObj,
      x: null,
    }
    this.service = new AuthService();
  }

  componentDidMount = () => {
    this.service.getAllProducts()
      .then(answer => {
        this.setState({
          allProducts: answer,
        })
      })
      .catch(err => console.log(err))
  } 


  render() {
    if (!this.state.allProducts) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
          {
            this.state.allProducts.map((singleProduct, index) => {
              return <ProductCard key={index} singleProduct={singleProduct} userObj={this.state.user}/>
            })
          }
        </div>
      )
    }
  }
}

export default AdminProfile
