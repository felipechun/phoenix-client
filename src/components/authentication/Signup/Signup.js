import React, { Component } from 'react';
import AuthService from '../auth-service/auth-service';
import { Link } from 'react-router-dom';
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
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <Input placeholder="Email" type="email" name="username" value={this.state.username} required onChange={ e => this.handleChange(e)} />
          <Input placeholder="Password" name="password" value={this.state.password} min="8" required onChange={ e => this.handleChange(e)} />
          <select name="role" required onChange={ e => this.handleChange(e)}>
            <option value="">Select</option>            
            <option value="Costumer">User</option>
            <option value="Repair">Company</option>
          </select>
          <SubmitBtn type="submit" className="btn btn-outline-success">Sign up</SubmitBtn>
        </form>
        <p>Already have an account? 
            <Link to={"/login"}> Log in</Link>
        </p>
      </div>
    )
  }
}

export default Signup;