import React, { Component } from 'react'

export class SellForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      statusProduct: '',
      categories: '',
      path: '',
      brand: '',
      price: '',
      description: '',
      imageUrl: '', 
      };
    // this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
  
    this.service.signup(username, password)
    .then( response => {
        this.setState({
          name: '',
          statusProduct: '',
          categories: '',
          path: '',
          brand: '',
          price: '',
          description: '',
          imageUrl: '', 
        });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value}, () => console.log('set state!'));
  }

  render() {
    console.log(this.state.path);
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
            <label>Category</label>
            <select name="categories" required onChange={ e => this.handleChange(e)} className="form-control" >
              <option value="" >Choose one</option>
              <option value="Laptop">Laptop</option>
              <option value="Tablet">Tablet</option>
              <option value="Mobile">Mobile</option>
              <option value="Consoles">Videogame Console</option>
              <option value="TV's">Television</option>
              <option value="Audio">Audio</option>
            </select>
          </div>
          <label>What do you want to do?</label>
            <select name="path" required onChange={ e => this.handleChange(e)} className="form-control" >
              <option value="" >Choose one</option>
              <option value="Repair">Repair</option>
              <option value="Sell">Sell</option>
            </select>
          <div className="form-group">
            <label>Product</label>
            <input type="name" className="form-control" value={this.state.name} required onChange={ e => this.handleChange(e)} placeholder="Name of the product"  />
          </div>
          <div className="form-group">
            <label>Product Brand</label>
            <input type="brand" className="form-control" value={this.state.brand} required onChange={ e => this.handleChange(e)} placeholder="Brand of the product"  />
          </div>
          <div className="form-group">
            <label>Condition</label>
            <select name="statusProduct" required onChange={ e => this.handleChange(e)} className="form-control" >
              <option value="" >Choose one</option>
              <option value="Broken">Broken</option>
              <option value="Semi-used">Semi-used</option>
            </select>
          </div>
          {
            this.state.path === 'Sell' ? (
              <div className="form-group">
                <label>Suggested Price</label>
                <input type="name" className="form-control" value={this.state.name} required onChange={ e => this.handleChange(e)} placeholder="How much do you think your product is worth?"  />
              </div>
            ) : null
          }
          <div className="form-group">
            <label >Description</label>
            <textarea className="form-control" placeholder="Does your device have any problems or physical damages such as a broken screen or scuffs? Please be as specific as possible." rows="3"></textarea>
          </div>
        </form>
      </div>
    )
  }
}

export default SellForm
