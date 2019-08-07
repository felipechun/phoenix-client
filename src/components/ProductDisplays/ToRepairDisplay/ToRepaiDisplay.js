import React, { Component } from 'react';

class ToRepaiDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.productId,
      company: this.props.companyObj,
    }
  }
  
  render() {
    return (
      <div className="row mt-3 mb-3">
        <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
          <div className="card">
            <h5 className="card-header">Sent to Repair</h5>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-success" role="alert">
                    <p className="mb-0">This product was sent to "company's address not rendered" {this.state.company.name} at "company cep not rendered" {this.state.product.address} - {this.state.company.cep}.</p>
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

export default ToRepaiDisplay;
