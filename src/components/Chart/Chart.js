import React, { Component } from 'react';

class Chart extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
            <h5 className="border-bottom">This is your checkout area</h5>
            <table className="table table-sm">
              <thead className="thead-light">
                <tr>
                  <th>Product</th>
                  <th className="text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="http://placeimg.com/100/100/tech" className="rounded float-left mt-1 mr-2" alt="Product" />
                    <div>
                      <h5>Product Name</h5>
                      <p>Product Description</p>
                      <p>Product Specification</p>
                    </div>
                  </td>
                  <td className="text-right align-middle">R$ 999,99</td>
                </tr>
              </tbody>
              <tfoot className="thead-dark">
                <tr>
                  <th>Total Value</th>
                  <th className="text-right">R$ 999,99</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 text-center">
            <button type="button" className="btn btn-outline-success">Payment</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Chart;