import React, { Component } from 'react';

class ProductFigure extends Component {
  constructor(props) {
    super(props);
    this.state= {
      product: {...this.props.data}
    }
  }
  
  render() {
    console.log('figure --->', this.state.product);
    return (
      <figure className="figure" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <img src={this.state.product.imageUrl} className={this.props.imageClasses} alt={this.props.imageAlt} />
        <figcaption className="figure-caption text-right">A caption for the above image.</figcaption>
      </figure>
    )
  }
}

export default ProductFigure;
