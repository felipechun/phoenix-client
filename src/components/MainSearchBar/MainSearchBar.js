import React, { Component } from 'react'
import Input from '../input/Input';
import SubmitBtn from '../buttons/SubmitBtn';
import AxiosRoutes from '../AxiosRoutes/AxiosRoutes';

export class MainSearchBar extends Component {

  constructor(props){
    super(props);
    this.state = { searchTerm: '' };
    this.service = new AxiosRoutes();
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const searchTerm = this.state.searchTerm
    this.service.mainSearch(searchTerm)
    .then( response => {
        this.setState({ searchTerm: '' });
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const { value } = event.target;
    this.setState({ searchTerm: value });    
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="input-group mt-3">
          <Input className="form-control" type="text" value={this.state.searchTerm} onChange={ e => this.handleChange(e)} placeholder="What are you looking for?"/>
          <div className="input-group-append">
            <SubmitBtn className="btn btn-outline-secondary" type="submit">Search</SubmitBtn>
          </div>
        </div>
      </form>
    )
  }
}

export default MainSearchBar;
