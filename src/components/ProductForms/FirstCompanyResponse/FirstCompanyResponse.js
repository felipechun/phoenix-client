import React, { Component } from 'react'
import AuthService from '../../authentication/auth-service/auth-service';
import SubmitBtn from '../../buttons/SubmitBtn';

class FirstCompanyResponse extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'FirstResponse',
      responsePrice: '',
      companyDescription: '',
      productId: this.props.productId,
      };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const status = this.state.status;
    const responsePrice = this.state.responsePrice;
    const companyDescription = this.state.companyDescription;
    const productId = this.state.productId;
  
    this.service.updateToFirstResponse(status, responsePrice, companyDescription, productId)
    .then( response => {
        this.setState({
          status: '',
          responsePrice: '',
          companyDescription: '',
          productId: '',
        });
        // this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
    console.log(this.state)
  }


  render() {
    return (
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
            <div className="card">
              <h5 className="card-header">First Response</h5>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Company Price</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input type="text" name="responsePrice" className="form-control" value={this.state.responsePrice} required onChange={ e => this.handleChange(e)} placeholder="The company's estimated price of the product in its current condition"  />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Description</label>
                  <textarea className="form-control" name="companyDescription" value={this.state.companyDescription} required onChange={ e => this.handleChange(e)} placeholder="Company's description of the received product" rows="3"></textarea>
                  </div>
                  <SubmitBtn type="submit" className="btn btn-outline-success float-right">Submit</SubmitBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FirstCompanyResponse;
