import React, { Component } from 'react';

class ProductFigure extends Component {
  constructor(props) {
    super(props);
    this.state= {
      product: {...this.props.data}
    }
  }
  
  render() {

    return (
      <div className="" data-toggle="collapse" href={`#a${this.props.index}`} role="button" aria-expanded="false" aria-controls="collapseExample">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.state.product.imageUrl} className={this.props.imageClasses} alt={this.props.imageAlt} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.state.product.name}</h5>
                <p className="card-text">Client Description: {this.state.product.clientDescription}</p>
                <p className="card-text">Status: {this.state.product.status}</p>
                <p className="card-text">Product ID: {this.state.product._id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductFigure;
