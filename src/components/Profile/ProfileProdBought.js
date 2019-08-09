import React, { Component } from 'react';

class ProfileProdBrought extends Component {
  constructor(props) {
    super(props);
    // this.state = {this.props.singleProduct}
  }
  
  render() {
    
    return (
      <div className="col-6">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.props[0].repairImageUrl} className="card-img" alt={this.props[0].name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.props[0].categories} {this.props[0].name} {this.props[0].model}</h5>
                <p className="card-text">{this.props[0].clientDescription}</p>
                <p className="card-text">{this.props[0].statusProduct}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileProdBrought;
