import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../authentication/auth-service/auth-service';
import ProductCard from '../ProductCard/ProductCard';
import ProfileProdBought from './ProfileProdBought';
import ProfileProdSold from './ProfileProdSold';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userObj,
      userProducts: [],
      userPurchases: [],
    };
    this.service = new AuthService();
    this.flagHell = false;
    this.status = false;
  }

  componentDidMount = () => {
    this.service.populateProducts()
      .then(answer => {
        this.status = true;
        this.setState({
          userProducts: answer,
        })
   

      })
      .catch(err => console.log(err))

    this.service.getMyPurchases()
      .then(answer => {
        this.setState({
          userPurchases: answer,
        })
      })

      if(this.props.userObj.company.length <= 0){
        this.flagHell = false;
      } else {
        this.flagHell = true;
      }
  }

  updateIfHell = () =>{
    window.location.reload();
}

  render() {

    if(!this.status){
      return (
        <>
        </>
      )
    } else {
      return (
        <div className="container mt-3">
          <div className="row">
            <div className="col-3">
              <div id="v-pills-tab" className="card mb-3 nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                <div className="card-header text-uppercase"><span>Profile</span></div>
                <ul className="list-group list-group-flush">
                  {/* <li className="list-group-item"><Link to="/edit-profile">Edit Profile</Link></li> */}
                  <li className="list-group-item"><Link to="/sell-form">Add Product</Link></li>
                </ul>
              </div>
              <div className="card mb-3 nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                <div className="card-header text-uppercase">
                  <span>Products</span>
                </div>
                <a className="nav-link border-bottom" id="v-pills-bought-tab" data-toggle="pill" href="#v-pills-bought" role="tab" aria-controls="v-pills-bought" aria-selected="true">Bought</a>
                <a className="nav-link border-bottom active" id="v-pills-repaired-tab" data-toggle="pill" href="#v-pills-repaired" role="tab" aria-controls="v-pills-repaired" aria-selected="false">Repaired</a>
                <a className="nav-link" id="v-pills-sold-tab" data-toggle="pill" href="#v-pills-sold" role="tab" aria-controls="v-pills-sold" aria-selected="false">Sold</a>
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade" id="v-pills-bought" role="tabpanel" aria-labelledby="v-pills-bought-tab">
                  <div className="row">
                    {
                      !this.state.userPurchases
                      ? null
                      : (this.state.userPurchases.map((item, index) => {
                        return <ProfileProdBought key={index} {...item} userObj={this.state.user} />
                      }))
                    }
                  </div>
                </div>
                <div className="tab-pane fade show active" id="v-pills-repaired" role="tabpanel" aria-labelledby="v-pills-repaired-tab">
                  <div>
                    {
                      this.flagHell ? !this.state.userProducts.company[0].products ? null
                      : (this.state.userProducts.company[0].products.map((item, index) => {
                      return <ProductCard key={index} singleProduct={item} userObj={this.state.user} update={this.updateIfHell}/>
                      }))
                      : !this.state.userProducts.product
                      ? null
                      : (this.state.userProducts.product.map((item, index) => {
                      return <ProductCard key={index} singleProduct={item} userObj={this.state.user} update={this.updateIfHell}/>
                      }))
                    }
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-sold" role="tabpanel" aria-labelledby="v-pills-sold-tab">
                  <div className="row">
                    {
                      !this.state.userProducts.product
                      ? null
                      : (this.state.userProducts.product.map((item, index) => {
                        return <ProfileProdSold key={index} singleProduct={item} userObj={this.state.user} />
                      }))
                    }
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

export default Profile;
