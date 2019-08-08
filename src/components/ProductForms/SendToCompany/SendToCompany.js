import React, { Component } from 'react'
import AuthService from '../../authentication/auth-service/auth-service';
import SubmitBtn from '../../buttons/SubmitBtn';

class SendToCompany extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'SendCompany',
      finalStatusProduct: '',
      productId: this.props.productId,
      productObj: this.props.productObj,
      };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const status = this.state.status;
    const finalStatusProduct = this.state.finalStatusProduct;
    const productId = this.state.productId;
    this.props.update();

    this.service.updateSendToCompany(status, finalStatusProduct, productId)
    .then( response => {
        this.setState({
          status: '',
          finalStatusProduct: '',
          productId: '',
          productObj: '',
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
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
            <div className="card">
              <h5 className="card-header">Send Product to Phix</h5>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Does Phix want to repair: {this.state.productObj.repairYesNo}</label>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Condition</label>
                    <select name="finalStatusProduct" required onChange={ e => this.handleChange(e)} className="form-control" >
                      <option value="" >Choose one</option>
                      <option value="Broken">Broken</option>
                      <option value="Semi-used">Repaired</option>
                    </select>
                  </div>
                  <p className="card-text font-italic">Important: only click the button after performing all requested actions and after shipping the product to us.</p>
                  <SubmitBtn type="submit" className="btn btn-outline-success float-right">I have sent the product to Phix</SubmitBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SendToCompany;
