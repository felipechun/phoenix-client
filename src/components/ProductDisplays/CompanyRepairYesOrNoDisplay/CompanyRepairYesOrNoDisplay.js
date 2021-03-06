import React, { Component } from 'react';

class CompanyRepairYesOrNoDisplay extends Component {
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
            <h5 className="card-header">Repair Device?</h5>
            <div className="card-body mx-auto">
              <div className="row">
                <div className={this.props.alert} role="alert">
                  <p className="mb-0">Phix answered <span className="text-uppercase font-weight-bold">{this.state.product.repairYesNo}</span> to repair this product.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyRepairYesOrNoDisplay;
