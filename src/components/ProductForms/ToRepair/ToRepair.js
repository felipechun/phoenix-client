import React, { Component } from 'react'
import AuthService from '../../authentication/auth-service/auth-service';
import SubmitBtn from '../../buttons/SubmitBtn';

class ToRepair extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'ToRepair',
      company: this.props.companyObj,
      productId: this.props.productId,
      };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const status = this.state.status;
    const productId = this.state.productId;
    this.props.update();

    this.service.updateToRepair(status, productId)
    .then( response => {
        this.setState({
          status: '',
          productId: '',
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
              <h5 className="card-header">Send My Device</h5>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Please send your device to the following address:</label>
                    <p className="card-text" >{this.state.company.address}</p>
                    <p className="card-text" >CEP: {this.state.company.cep}</p>
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
