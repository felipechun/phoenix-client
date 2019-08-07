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
      <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4" data-toggle="collapse" href={`#a${this.state.product._id}`} role="button" aria-expanded="false" aria-controls={`#a${this.state.product._id}`}>
          <img src={this.state.product.imageUrl} className={this.props.imageClasses} alt={this.props.imageAlt} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{this.state.product.name} {this.state.product.model}</h5>
            <p className="card-text">{this.state.product.status}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default ProductFigure;
