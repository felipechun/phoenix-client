import React, { Component } from 'react'
import AuthService from '../../authentication/auth-service/auth-service';
import SubmitBtn from '../../buttons/SubmitBtn';

class SendToCompany extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'SendCompany',
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
              <h5 className="card-header">Send Product to Phix</h5>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit}>
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
