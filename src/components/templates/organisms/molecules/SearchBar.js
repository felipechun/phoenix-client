import React, { Component } from 'react';
import Input from './atoms/Input';
import Button from './atoms/Button';

class SearchBar extends Component {
  // consttructor(props) {
  //   super(props)
  //   this.state = { searchTerm: '' };
  // }

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const searchTerm = this.state.searchTerm
  //     .then( response => {
  //       this.setState({ searchTerm: '' });
  //     })
  //   .catch( error => console.log(error) )
  // }

  // handleChange = (event) => {  
  //   const { value } = event.target;
  //   this.setState({ searchTerm: value });
  // }

  render() {
    return (
      <div className="input-group mb-3">
        <Input type="text" name="search" value="" onChange="" className="form-control" placeholder="What are you looking to buy?" />
        <div className="input-group-append">
          <Button type="button" name="btn-submit" className="btn btn-outline-primary">Search</Button>
        </div>
      </div>
    )
  }
}

export default SearchBar;
