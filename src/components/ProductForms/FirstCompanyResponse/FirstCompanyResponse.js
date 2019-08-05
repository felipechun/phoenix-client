import React, { Component } from 'react'
import AuthService from '../../authentication/auth-service/auth-service';
import SubmitBtn from '../../buttons/SubmitBtn';

class FirstCompanyResponse extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'FirstResponse',
      companyPrice: '',
      companyDescription: '',
      };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const status = this.state.status;
    const companyPrice = this.state.companyPrice;
    const companyDescription = this.state.companyDescription;
  
    this.service.updateProductStatus(status, companyPrice, companyDescription)
    .then( response => {
        this.setState({
          status: '',
          companyPrice: '',
          companyDescription: '',
        });
        // this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }


  render() {
    return (
      <div className="container">
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
                      <input type="text" name="companyPrice" className="form-control" value={this.state.companyPrice} required onChange={ e => this.handleChange(e)} placeholder="The company's estimated price of the product in its current condition"  />
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
