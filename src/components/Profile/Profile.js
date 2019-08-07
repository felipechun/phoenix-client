import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../authentication/auth-service/auth-service';
import ProductCard from '../ProductCard/ProductCard';
// import ProfileProdBrought from './ProfileProdBrought';
// import ProfileProdSold from './ProfileProdSold';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userObj,
      userProducts: [],
      // path: 'Repair',
      // categories: 'Laptop',
      // brand: 'Samsung',
      // name: 'Ativ',
      // model: '6',
      // statusProduct: 'Semi-used',
      // starterPrice: '1.000,00',
      // clientDescription: 'A little description invented to test the rendering.',
      // imageUrl: 'http://placeimg.com/200/100/tech',
      // companyPrice: '900,00',
      // companyDescription: 'Another fake description to justify more rendering test.',
      // repairPrice: '150,00',
      // repairDescription: 'Some description to explain the repair.',
      // specs: 'data of product specification and on and on',
      // repairImageUrl: 'http://placeimg.com/200/100/tech',
      // finalName: 'Samsung Ativbook 6',
      // onSale: false,
      // sellingPrice: '1.050,00',
      // totalPrice: '1.102,50',
      // comission: '5%',
      // finalDescription: 'Final description of this entire process from product registration to product repair to product sell.',
    };
    this.service = new AuthService();
    this.flagHell = false;
    this.status = false;
  }

  componentDidMount = () => {
    this.service.populateProducts()
      .then(answer => {
        // console.log(answer, 'ANSWER');

        this.setState({
          userProducts: answer,
        })
      })
      if(this.props.userObj.company.length <= 0){
        this.flagHell = false;
      } else {
        this.flagHell = true;
      }
  }

  render() {
    // console.log('PROFILE ----->', this.props.userObj);
    // console.log(this.state.userProducts.product, 'GIVE ME THE PRODUCT');
    if(!this.status){
      this.status = true;
      return (
        <>
        </>
      )
    } else {
      //console.log(this.state.userProducts.company[0])
      return (

        <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <h4 className="border-bottom text-uppercase">Profile Role</h4>
          </div>
        </div>
          <div className="row">
            <div className="col-3">
              <div className="text-center mt-1 mb-3">
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar rounded-circle img-thumbnail" alt="avatar" />
              </div>
              <div id="v-pills-tab" className="card mb-3 nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                <div className="card-header text-uppercase"><span>Username</span></div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">View Profile</li>
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
                    <div className="col-12">
                      <h5 className="border-bottom">Products Brought</h5>
                    </div>
                    <div className="col-6">
                      <div className="card mb-3">
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img src={this.state.imageUrl} className="card-img" alt={this.state.name} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">{this.state.categories} {this.state.name} {this.state.model}</h5>
                              <p className="card-text">{this.state.clientDescription}</p>
                              <p className="card-text">{this.state.statusProduct}</p>
                              <p className="card-text"><small className="text-muted">Bought at 31/12/9999</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="card mb-3">
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img src={this.state.imageUrl} className="card-img" alt={this.state.name} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">{this.state.categories} {this.state.name} {this.state.model}</h5>
                              <p className="card-text">{this.state.clientDescription}</p>
                              <p className="card-text">{this.state.statusProduct}</p>
                              <p className="card-text"><small className="text-muted">Bought at 31/12/9999</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade show active" id="v-pills-repaired" role="tabpanel" aria-labelledby="v-pills-repaired-tab">
                  <div className="col-12">
                    <h5 className="border-bottom">Products Repaired</h5>
                  </div>
                  <div>
                    {
                      this.flagHell ? !this.state.userProducts.company[0].products ? null
                      : (this.state.userProducts.company[0].products.map((item, index) => {
                      return <ProductCard key={index} singleProduct={item} userObj={this.state.user} />
                      }))
                      : !this.state.userProducts.product
                      ? null
                      : (this.state.userProducts.product.map((item, index) => {
                      return <ProductCard key={index} singleProduct={item} userObj={this.state.user} />
                      }))
                    }
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-sold" role="tabpanel" aria-labelledby="v-pills-sold-tab">
                  <div className="col-12">
                    <h5 className="border-bottom">Products Sold</h5>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="card mb-3">
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img src="http://placeimg.com/127/236/tech" className="card-img" alt="..." />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Product Name</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                              <p className="card-text">This content is a little bit longer.</p>
                              <p className="card-text"><small className="text-muted">Bought at 31/12/9999</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="card mb-3">
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img src="http://placeimg.com/127/236/tech" className="card-img" alt="..." />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Product Name</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                              <p className="card-text">This content is a little bit longer.</p>
                              <p className="card-text"><small className="text-muted">Bought at 31/12/9999</small></p>
                            </div>
                          </div>
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

export default Profile;
