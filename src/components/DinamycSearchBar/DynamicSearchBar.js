import React, { Component } from 'react';
import Input from '../input/Input';
import SubmitBtn from '../buttons/SubmitBtn';

export class DynamicSearchBar extends Component {

  constructor(props){
    super(props);
    this.state = { searchTerm: '' };
    // this.service = new AuthService();
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const searchTerm = this.state.searchTerm
    // this.service.login(searchTerm)
    .then( response => {
        this.setState({ searchTerm: '' });
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const { value } = event.target;
    this.setState({ searchTerm: value });
    console.log(this.state.searchTerm, '<<<<< SEARCH TERM');
    
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="input-group mb-3">
          <Input className="form-control" type="text" value={this.state.searchTerm} onChange={ e => this.handleChange(e)} placeholder="Type here to filter our products." />
          <div className="input-group-append">
            <SubmitBtn className="btn btn-outline-primary" type="submit">Search</SubmitBtn>
          </div>
        </div>
      </form>
    )
  }
}

export default DynamicSearchBar;
