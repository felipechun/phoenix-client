import React, { Component } from 'react'
import AuthService from '../../authentication/auth-service/auth-service';
import SubmitBtn from '../../buttons/SubmitBtn';

class ToRepair extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'ToRepair',
      // starterPrice: this.props.starterPrice,
      // companyPrice: this.props.companyPrice,
      // NEED TO RECEIVE SELECTED COMPANY ADDRESS
      };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const status = this.state.status;
  
    this.service.updateProductStatus(status)
    .then( response => {
        this.setState({
          status: '',
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
              <h5 className="card-header">Send My Device</h5>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">This is the estimated value of your product in its current condition, based on the current market and the information you have provided us. Note that this value is subject to change.</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input type="text" name="companyPrice" className="form-control disabled" value='{this.state.companyPrice}' />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Please send your device to the following address:</label>
                    <p className="card-text" >get address info from state</p>
                  </div>
                  <p className="card-text font-italic text-danger">Important: only click the button if you have sent your product to the given address</p>
                  <SubmitBtn type="submit" className="btn btn-outline-success float-right">Yes, I have sent my device</SubmitBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ToRepair;
