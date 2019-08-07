import React, { Component } from 'react'
import AuthService from '../authentication/auth-service/auth-service';
import SubmitBtn from '../buttons/SubmitBtn';

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
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const address = this.state.address;
    const city = this.state.city;
    const cep = this.state.cep;
    const cpf = this.state.cpf;
    const userId = this.state.userId;
  
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
              <h5 className="card-header">Edit User Information</h5>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Name</label>
                    <input type="text" name="name" className="form-control" value={this.state.name} required onChange={ e => this.handleChange(e)} placeholder="Brand of the product"  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">CPF</label>
                    <input type="text" name="cpf" className="form-control" value={this.state.cpf} required onChange={ e => this.handleChange(e)} placeholder="Product model"  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">City</label>
                  <textarea className="form-control" name="city" value={this.state.city} required onChange={ e => this.handleChange(e)} placeholder="Please describe all the repairs that are needed" rows="3"></textarea>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Address</label>
                    <input type="text" name="address" className="form-control" value={this.state.address} required onChange={ e => this.handleChange(e)} placeholder="Product model"  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">CEP</label>
                    <input type="text" name="cep" className="form-control" value={this.state.cep} required onChange={ e => this.handleChange(e)} placeholder="Product model"  />
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

export default UserDetails;
