import React, { Component } from 'react'

export class RequestDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {...this.props.product}
    }
  }
  
  render() {
    return (
      <div className="row mt-3 mb-3">
        <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
          <div className="card">
            <h5 className="card-header">Request</h5>
            <div className="card-body">
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Destiny:</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.path}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Category:</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.categories}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Brand:</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.brand}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Name:</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Model:</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.model}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Condition:</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.statusProduct}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Estimated Price:</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.starterPrice}</p>
                </div>
              </div>
              <div className="row">
                <div className="d-none d-sm-block col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Description:</span></p>
                </div>
                <div className="d-none d-sm-block col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.clientDescription}</p>
                </div>
                {/* visible only on mobile */}
                <div className="d-block d-sm-none col-4 text-right">
                  <p><span className="font-weight-bold">Description:</span></p>
                </div>
                <div className="d-block d-sm-none col-12">
                  <p>{this.state.product.clientDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RequestDisplay
