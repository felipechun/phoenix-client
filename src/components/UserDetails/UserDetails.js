import React, { Component } from 'react'
import AuthService from '../authentication/auth-service/auth-service';
import SubmitBtn from '../buttons/SubmitBtn';
import { Redirect } from 'react-router-dom';

class UserDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      cep: '',
      cpf: '',
      userId: this.props.userObj._id,
      };
    this.service = new AuthService();
    this.status = false;
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const address = this.state.address;
    const city = this.state.city;
    const cep = this.state.cep;
    const cpf = this.state.cpf;
    const userId = this.state.userId;
    this.status = true;
    this.service.updateUserDetails(name, address, city, cep, cpf, userId)
    .then( response => {
        this.setState({
          name: '',
          address: '',
          city: '',
          cep: '',
          cpf: '',
          userId: '',
        });
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    if(this.status === false){
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
              <div className="card">
                <h5 className="card-header">Edit User Information</h5>
                <div className="card-body">
                  <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                    <div className="form-group">
                      <label className="card-title font-weight-bold">Name</label>
                      <input type="text" name="name" className="form-control" value={this.state.name} required onChange={ e => this.handleChange(e)} placeholder="Your Name"  />
                    </div>
                    <div className="form-group">
                      <label className="card-title font-weight-bold">CPF</label>
                      <input type="text" name="cpf" className="form-control" value={this.state.cpf} required onChange={ e => this.handleChange(e)}  />
                    </div>
                    <div className="form-group">
                      <label className="card-title font-weight-bold">City</label>
                    <input type="text" className="form-control" name="city" value={this.state.city} required onChange={ e => this.handleChange(e)} placeholder="Your City"></input>
                    </div>
                    <div className="form-group">
                      <label className="card-title font-weight-bold">Address</label>
                      <input type="text" name="address" className="form-control" value={this.state.address} required onChange={ e => this.handleChange(e)} placeholder="Street, etc."  />
                    </div>
                    <div className="form-group">
                      <label className="card-title font-weight-bold">CEP</label>
                      <input type="text" name="cep" className="form-control" value={this.state.cep} required onChange={ e => this.handleChange(e)} placeholder="Your Postal Code"  />
                    </div>
                    <SubmitBtn type="submit" className="btn btn-outline-success float-right">Submit</SubmitBtn>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else if(this.status === true){
      return <Redirect to="/after-signup"/>
    }
  }
}

export default UserDetails;
