import React, { Component } from 'react';
import AuthService from '../auth-service/auth-service';
import { Link } from 'react-router-dom';
import Label from '../../label/Label';
import Input from '../../input/Input';
import SubmitBtn from '../../buttons/SubmitBtn';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', role: '', };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const role = this.state.role;
  
    this.service.signup(username, password, role)
    .then( response => {
        this.setState({
            username: '', 
            password: '',
            role: '',
        });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return(
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <h4 className="border-bottom text-uppercase">Signup</h4>
          </div>
        </div>
        <form className="w-100" onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
              <div className="form-group">
                <Label labelFor="email">Email</Label>
                <Input id="email" className="form-control" placeholder="Email" type="email" name="username" value={this.state.username} onChange={ e => this.handleChange(e)} required />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-5 col-xl-5">
              <div className="form-group">
                <Label labelFor="password">Password</Label>
                  <Input id="password" className="form-control" placeholder="Password" type="password" name="password" value={this.state.password} min="8" onChange={ e => this.handleChange(e)} required />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2">
              <div className="form-group">
                <Label labelFor="role">Signup as</Label>
                <select name="role" className="form-control" onChange={ e => this.handleChange(e)} required>
                  <option value="">Select</option>
                  <option value="Customer">User</option>
                  <option value="Repair">Company</option>
                  {/* <option value="Admin">It's a Secret</option> */}
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
              <div className="d-flex flex-column align-items-center">
                <SubmitBtn type="submit" className="btn btn-outline-success">Sign up</SubmitBtn>
                <p className="mt-5">Already have an account?
                    <Link to={"/login"}> Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup;