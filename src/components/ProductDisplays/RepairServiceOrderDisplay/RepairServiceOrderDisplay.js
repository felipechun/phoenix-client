import React, { Component } from 'react';

class RepairServiceOrderDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {...this.props.product},
    }
    
  }
  
  render() {
    return (
      <div className="row mt-3 mt-3 mb-3">
        <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
          <div className="card">
            <h5 className="card-header">Service Order</h5>
            <div className="card-body">
              <p className="text-center">
                <img src={this.state.product.repairImageUrl} alt={this.state.product._id} className="img-thumbnail h-50 w-50" />
              </p>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Product ID</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product._id}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Status</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.status}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Brand</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.brand}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Model</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.model}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Specifications</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.specs}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Repairs Needed</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.repairDescription}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Repair Price</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.repairPrice}</p>
                </div>
              </div>
              <div className="row">
                {/* visible only on mobile */}
                <div className="d-block d-sm-none col-4 text-right">
                  <p><span className="font-weight-bold">Specifications:</span></p>
                </div>
                <div className="d-block d-sm-none col-12">
                  <p>{this.state.product.specs}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RepairServiceOrderDisplay;
