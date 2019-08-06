import React, { Component } from 'react';

class ProfileProdBrought extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props.props}
  }
  
  render() {
    return (
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
    )
  }
}

export default ProfileProdBrought;
