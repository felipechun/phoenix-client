import React, { Component, Fragment } from 'react';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.singleProduct,
    }
  }
  
  render() {

    const isRepair = false;

    console.log(this.state.product);
    return (
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
    )
  }
}

export default ProductCard;
