import React, { Component, Fragment } from 'react';
import AuthService from '../authentication/auth-service/auth-service';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: 'Repair',
      categories: 'Laptop',
      brand: 'Samsung',
      name: 'Ativ',
      model: '6',
      statusProduct: 'Semi-used',
      starterPrice: '1.000,00',
      clientDescription: 'A little description invented to test the rendering.',
      imageUrl: 'http://placeimg.com/200/100/tech',
      companyPrice: '900,00',
      companyDescription: 'Another fake description to justify more rendering test.',
      repairPrice: '150,00',
      repairDescription: 'Some description to explain the repair.',
      specs: 'data of product specification and on and on',
      repairImageUrl: 'http://placeimg.com/200/100/tech',
      finalName: 'Samsung Ativbook 6',
      onSale: false,
      sellingPrice: '1.050,00',
      totalPrice: '1.102,50',
      comission: '5%',
      finalDescription: 'Final description of this entire process from product registration to product repair to product sell.',
    };
    this.service = new AuthService();
  }

  render() {

    const isRepair = false;

    return (
      <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <h4 className="border-bottom text-uppercase">Profile Role</h4>
        </div>
      </div>
        <div className="row">
          <div className="col-3">
            <div class="text-center mt-1 mb-3">
              <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar rounded-circle img-thumbnail" alt="avatar" />
            </div>
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link" id="v-pills-bought-tab" data-toggle="pill" href="#v-pills-bought" role="tab" aria-controls="v-pills-bought" aria-selected="true">Bought</a>
              <a className="nav-link active" id="v-pills-repaired-tab" data-toggle="pill" href="#v-pills-repaired" role="tab" aria-controls="v-pills-repaired" aria-selected="false">Repaired</a>
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
                <div className="col-6">
                  <div className="card">
                    <div className="card-header">Product Timeline</div>
                    <img src={this.state.imageUrl} className="card-img-top" alt={this.state.name} height="100" />
                    <div className="card-body">
                      <h6 className="card-title text-uppercase">Request Status</h6>
                      <p className="card-text">
                        <span className="font-weight-bold">Destiny:</span> {this.state.path}<br/>
                        <span className="font-weight-bold">Category:</span> {this.state.categories}<br/>
                        <span className="font-weight-bold">Brand:</span> {this.state.brand}<br/>
                        <span className="font-weight-bold">Name:</span> {this.state.name}<br/>
                        <span className="font-weight-bold">Model:</span> {this.state.model}<br/>
                        <span className="font-weight-bold">Condition:</span> {this.state.statusProduct}<br/>
                        <span className="font-weight-bold">Estimated Price:</span> R$ {this.state.starterPrice}<br/>
                        <span className="font-weight-bold">Description:</span> {this.state.clientDescription}
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <h6 className="card-title text-uppercase">Company First Response Status</h6>
                        <p className="card-text">
                          <span className="font-weight-bold">Price:</span> {this.state.companyPrice}<br/>
                          <span className="font-weight-bold">Description:</span> {this.state.companyDescription}
                        </p>
                      </li>
                      <li className="list-group-item">
                        <h6 className="card-title text-uppercase">To Repair Status</h6>
                        <div className="alert alert-warning" role="alert">
                          <p className="card-text">The user has sent the device in for repair/maintenance.</p>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <h6 className="card-title text-uppercase">Repair Service Order Status</h6>
                        <img src={this.state.repairImageUrl} className="card-img-top mb-1" alt={this.state.name} height="100" />
                        <p className="card-text">
                          <span className="font-weight-bold">Price: R$ </span> {this.state.repairPrice}<br />
                          <span className="font-weight-bold">Description:</span> {this.state.repairDescription}<br />
                          <span className="font-weight-bold">Model:</span> {this.state.model}<br />
                          <span className="font-weight-bold">Specifications:</span> {this.state.specs}<br />
                          <span className="font-weight-bold">Brand:</span> {this.state.brand}
                        </p>
                      </li>
                      <li className="list-group-item">
                        <h6 className="card-title text-uppercase">Company Repair Yes or No</h6>
                        { isRepair
                          ? <div className="alert alert-warning" role="alert">
                              <p className="card-text">The user has sent the device in for repair/maintenance.</p>
                            </div>
                          : <div className="alert alert-danger" role="alert">
                              <p className="card-text">Do not repair the product and ship it to us in its current state.</p>
                            </div>
                        }
                      </li>
                      <li className="list-group-item">
                        <h6 className="card-title text-uppercase">Send to Company</h6>
                        <div className="alert alert-success" role="alert">
                          <p className="card-text">The product has been sent to Phix.</p>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <h6 className="card-title text-uppercase">Send to Store</h6>
                        <span className="font-weight-bold">Name:</span> {this.state.finalName}<br />
                        { this.state.onSale === true
                          ? <Fragment><span className="font-weight-bold">Sale:</span> Yes<br /></Fragment>
                          : <Fragment><span className="font-weight-bold">Sale:</span> No<br /></Fragment>
                        }
                        <span className="font-weight-bold">Price:</span> {this.state.sellingPrice}<br />
                        <span className="font-weight-bold">Comission:</span> {this.state.comission}<br />
                        <span className="font-weight-bold">Description:</span> {this.state.finalDescription}<br />
                      </li>
                    </ul>
                    <div className="card-body">
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>
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

export default Profile;
