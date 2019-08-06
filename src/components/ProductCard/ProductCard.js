import React, { Component, Fragment } from 'react';
import ProductFigure from './ProductFigure';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.singleProduct,
    }
  }
  render() {

    const isRepair = false;

    console.log('card --->', this.state.product);
    

    return (
      <div className="row">
        <div className="col-12">

          <ProductFigure data={this.state.product} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories} />

          <div className="collapse" id="collapseExample">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-request-tab" data-toggle="tab" href="#nav-request" role="tab" aria-controls="nav-request" aria-selected="true">Request</a>
                <a className="nav-item nav-link" id="nav-company-tab" data-toggle="tab" href="#nav-company" role="tab" aria-controls="nav-company" aria-selected="false">Company</a>
                <a className="nav-item nav-link" id="nav-repair-tab" data-toggle="tab" href="#nav-repair" role="tab" aria-controls="nav-repair" aria-selected="false">To Repair</a>
                <a className="nav-item nav-link" id="nav-repair-service-tab" data-toggle="tab" href="#nav-repair-service" role="tab" aria-controls="nav-repair-service" aria-selected="false">Repair S. O.</a>
                <a className="nav-item nav-link" id="nav-repair-company-tab" data-toggle="tab" href="#nav-repair-company" role="tab" aria-controls="nav-repair-company" aria-selected="false">Repair Company</a>
                <a className="nav-item nav-link" id="nav-send-company-tab" data-toggle="tab" href="#nav-send-company" role="tab" aria-controls="nav-send-company" aria-selected="false">To Company</a>
                <a className="nav-item nav-link" id="nav-send-store-tab" data-toggle="tab" href="#nav-send-store" role="tab" aria-controls="nav-send-store" aria-selected="false">To Store</a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-request" role="tabpanel" aria-labelledby="nav-request-tab">
                <p className="m-2">
                  <span className="font-weight-bold">Destiny:</span> {this.state.product.path}<br/>
                  <span className="font-weight-bold">Category:</span> {this.state.product.categories}<br/>
                  <span className="font-weight-bold">Brand:</span> {this.state.product.brand}<br/>
                  <span className="font-weight-bold">Name:</span> {this.state.product.name}<br/>
                  <span className="font-weight-bold">Model:</span> {this.state.product.model}<br/>
                  <span className="font-weight-bold">Condition:</span> {this.state.product.statusProduct}<br/>
                  <span className="font-weight-bold">Estimated Price:</span> R$ {this.state.product.starterPrice}<br/>
                  <span className="font-weight-bold">Description:</span> {this.state.product.clientDescription}
                </p>
              </div>
              <div className="tab-pane fade" id="nav-company" role="tabpanel" aria-labelledby="nav-company-tab">
                <p className="m-2">
                  <span className="font-weight-bold">Price:</span> {this.state.product.companyPrice}<br/>
                  <span className="font-weight-bold">Description:</span> {this.state.product.companyDescription}
                </p>
              </div>
              <div className="tab-pane fade" id="nav-repair" role="tabpanel" aria-labelledby="nav-repair-tab">
                <div className="alert alert-warning m-2" role="alert">
                  <p className="mb-0">The user has sent the device in for repair/maintenance.</p>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-repair-service" role="tabpanel" aria-labelledby="nav-repair-service-tab">
                <div className="d-flex flex-row m-2">
                  <img src={this.state.product.repairImageUrl} className="img-thumbnail" alt={this.state.product.name} height="100" />
                  <p className="ml-2">
                    <span className="font-weight-bold">Price: R$ </span> {this.state.product.repairPrice}<br />
                    <span className="font-weight-bold">Description:</span> {this.state.product.repairDescription}<br />
                    <span className="font-weight-bold">Model:</span> {this.state.product.model}<br />
                    <span className="font-weight-bold">Specifications:</span> {this.state.product.specs}<br />
                    <span className="font-weight-bold">Brand:</span> {this.state.product.brand}
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-repair-company" role="tabpanel" aria-labelledby="nav-repair-company-tab">
                { isRepair
                  ? <div className="alert alert-warning m-2" role="alert">
                      <p className="mb-0">The user has sent the device in for repair/maintenance.</p>
                    </div>
                  : <div className="alert alert-danger m-2" role="alert">
                      <p className="mb-0">Do not repair the product and ship it to us in its current state.</p>
                    </div>
                }
              </div>
              <div className="tab-pane fade" id="nav-send-company" role="tabpanel" aria-labelledby="nav-send-company-tab">
                <div className="alert alert-success m-2" role="alert">
                  <p className="mb-0">The product has been sent to Phix.</p>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-send-store" role="tabpanel" aria-labelledby="nav-send-store-tab">
                <p className="m-2">
                  <span className="font-weight-bold">Name:</span> {this.state.product.finalName}<br />
                  { this.state.onSale === true
                    ? <Fragment><span className="font-weight-bold">Sale:</span> Yes<br /></Fragment>
                    : <Fragment><span className="font-weight-bold">Sale:</span> No<br /></Fragment>
                  }
                  <span className="font-weight-bold">Price:</span> {this.state.product.sellingPrice}<br />
                  <span className="font-weight-bold">Comission:</span> {this.state.product.comission}<br />
                  <span className="font-weight-bold">Description:</span> {this.state.product.finalDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductCard;
