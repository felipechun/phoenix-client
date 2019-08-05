import React, { Component } from 'react';
import AuthService from '../auth-service/auth-service';
import { Link, Redirect } from 'react-router-dom';
import Label from '../../label/Label';
import Input from '../../input/Input';
import SubmitBtn from '../../buttons/SubmitBtn';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', redirect: false };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: '', password: '', redirect: true });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to="/"></Redirect>
    } else {
      return(
        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
              <h4 className="border-bottom text-uppercase">Login</h4>
            </div>
          </div>
          <form className="w-100" onSubmit={this.handleFormSubmit}>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <div className="form-group">
                  <Label labelFor="email">Email</Label>
                  <Input id="email" className="form-control" placeholder="Email" type="email" name="username" value={this.state.username} required onChange={ e => this.handleChange(e)} />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <div className="form-group">
                  <Label labelFor="password">Password</Label>
                  <Input id="password" className="form-control" placeholder="Password" type="password" name="password" value={this.state.password} min="8" required onChange={ e => this.handleChange(e)} />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-10 offset-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 ">
                <div className="d-flex flex-column align-items-center">
                  <SubmitBtn type="submit" className="btn btn-outline-success">Log in</SubmitBtn>
                  <p className="mt-5">Don't have an account? 
                      <Link to={"/signup"}> Signup</Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }
}

export default Login;