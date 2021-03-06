import React, { Component } from 'react';
import AuthService from '../authentication/auth-service/auth-service';
import ProductCard from '../ProductCard/ProductCard';
import CompanyCard from '../CompanyCard/CompanyCard';

export class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: null,
      allCompanies: null,
      user: this.props.userObj,
      flag: false,
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

    this.service.getCompanies()
      .then(answer => {
        this.setState({
          allCompanies: answer,
        })
      })
      .catch(err => console.log(err))
  }

    updateIfHell = () =>{
      window.location.reload();
  }

  render() {
    if (!this.state.allProducts || !this.state.allCompanies) {
      return (
        <div></div>
      )
    } else {
      return (
        <div className="container mt-3">
          <div className="row">
            <div className="col-3">
              <div className="card mb-3 nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                <div className="card-header text-uppercase">
                  <span>Management</span>
                </div>
                <a className="nav-link border-bottom active" id="v-pills-products-tab" data-toggle="pill" href="#v-pills-products" role="tab" aria-controls="v-pills-products" aria-selected="true">Products</a>
                <a className="nav-link border-bottom" id="v-pills-companies-tab" data-toggle="pill" href="#v-pills-companies" role="tab" aria-controls="v-pills-companies" aria-selected="false">Companies</a>
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-products" role="tabpanel" aria-labelledby="v-pills-products-tab">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">All Products</h5>
                        </div>
                        <div className="card-body">
                          {
                            this.state.allProducts.map((singleProduct, index) => {
                              return <ProductCard key={index} singleProduct={singleProduct} userObj={this.state.user} update={this.updateIfHell}/>
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-companies" role="tabpanel" aria-labelledby="v-pills-companies-tab">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">All Companies</h5>
                        </div>
                        <div className="card-body">
                          {
                            this.state.allCompanies.map((singleCompany, index) => {
                              return <CompanyCard key={index} singleCompany={singleCompany} />
                            })
                          }
                        </div>
                      </div>
                    </div>
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

export default AdminProfile
