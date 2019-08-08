import React, { Component } from 'react';

class ProfileProdBrought extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props.singleProduct}
  }
  
  render() {
    if (this.state.status === 'Sold') {
      return (
        <div className="col-6">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={this.state.repairImageUrl} className="card-img" alt={this.state.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{this.state.categories} {this.state.name} {this.state.model}</h5>
                  <p className="card-text">{this.state.clientDescription}</p>
                  <p className="card-text">{this.state.statusProduct}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default ProfileProdBrought;
