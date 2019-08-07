import React, { Component } from 'react';

class SendToStore extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      product: {...this.props.product}
    }
  }
  
  render() {
    return (
      <div className="row mt-3 mt-3 mb-3">
        <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
          <div className="card">
            <h5 className="card-header">Final Review</h5>
            <div className="card-body">
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Name:</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.finalName}</p>
                </div>
              </div>
              <div className="row">
                <div className="d-none d-sm-block col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Description:</span></p>
                </div>
                <div className="d-none d-sm-block col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.finalDescription}</p>
                </div>
                {/* visible only on mobile */}
                <div className="d-block d-sm-none col-4 text-right">
                  <p><span className="font-weight-bold">Description:</span></p>
                </div>
                <div className="d-block d-sm-none col-12">
                  <p>{this.state.product.finalDescription}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Selling Price:</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.sellingPrice}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Comission:</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.comission}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">Total Price:</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.totalPrice}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 text-right">
                  <p><span className="font-weight-bold">On Sale:</span></p>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                  <p>{this.state.product.onSale}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SendToStore;
