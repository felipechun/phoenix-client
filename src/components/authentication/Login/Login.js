import React, { Component } from 'react';
import AuthService from '../auth-service/auth-service';
import { Link } from 'react-router-dom';
import Input from '../../input/Input';
import SubmitBtn from '../../buttons/SubmitBtn';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
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
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <Input placeholder="Email" type="email" name="username" value={this.state.username} required onChange={ e => this.handleChange(e)} />
          <Input placeholder="Password" type="password" name="password" value={this.state.password} min="8" required onChange={ e => this.handleChange(e)} />
          <SubmitBtn type="submit" className="btn btn-outline-success">Log in</SubmitBtn>
        </form>
        <p>Don't have an account? 
            <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    )
  }
}

export default Login;