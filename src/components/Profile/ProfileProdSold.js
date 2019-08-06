import React, { Component } from 'react';

class ProfileProdSold extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props.props}
  }
  
  render() {
    return (
      <div className="tab-pane fade" id="v-pills-sold" role="tabpanel" aria-labelledby="v-pills-sold-tab">
        <div className="row">
          <div className="col-12">
            <h5 className="border-bottom">Products Sold</h5>
          </div>
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
    )
  }
}

export default ProfileProdSold;
