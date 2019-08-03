import React, { Component } from 'react'
import AuthService from '../authentication/auth-service/auth-service';
import CompanyMapRegister from '../GoogleMaps/CompanyMapRegister/CompanyMapRegister';
import SubmitBtn from '../buttons/SubmitBtn';

export class CompanyRegister extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      razaosocial: '',
      address: '',
      latitude: '',
      longitude: '',
      speciality: {Tablet: false, Mobile: false, Laptop: false, TV: false, Audio: false, Consoles: false},
      phone: '',
      cnpj: '',
      };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const razaosocial = this.state.razaosocial;
    const address = this.state.address;
    const latitude = this.state.latitude;
    const longitude = this.state.longitude;
    const speciality = this.state.speciality;
    const phone = this.state.phone;
    const cnpj = this.state.cnpj;
  
    this.service.companySignup(name, razaosocial, address, latitude, longitude, speciality, phone, cnpj, email)
    .then( response => {
        this.setState({
          name: '',
          email: '',
          razaosocial: '',
          address: '',
          latitude: '',
          longitude: '',
          speciality: '',
          phone: '',
          cnpj: '',
        });
        // this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  getMarker = (e, props, marker) => {
    this.setState({
      latitude: marker.latLng.lat(),
      longitude: marker.latLng.lng()
    })
  }

  handleCheckChange = (event) => {
    const target = event.target;
    const name = target.name;
    let check = {...this.state.speciality}
    check[name] = !check[name]
    this.setState({
      speciality: check
    });   
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" name="name" className="form-control" value={this.state.name} required onChange={ e => this.handleChange(e)} placeholder="Name of your company"  />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" className="form-control" value={this.state.email} required onChange={ e => this.handleChange(e)} placeholder="Email of your company"  />
          </div>
          <div className="form-group">
            <label>Razão Social</label>
            <input type="text" name="razaosocial" className="form-control" value={this.state.razaosocial} required onChange={ e => this.handleChange(e)} placeholder=""  />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="phone" className="form-control" value={this.state.phone} required onChange={ e => this.handleChange(e)} placeholder=""  />
          </div>
          <div className="form-group">
            <label>CNPJ</label>
            <input type="text" name="cnpj" className="form-control" value={this.state.cnpj} required onChange={ e => this.handleChange(e)} placeholder=""  />
          </div>
          <div className="form-group">
            <label>Speciality</label>
            <br />
            <label>Tablet</label>
            <input type="checkbox" name="Tablet" className="form-control" checked={this.state.speciality.Tablet} onChange={ e => this.handleCheckChange(e)} placeholder=""  />
            <label>Mobile</label>
            <input type="checkbox" name="Mobile" className="form-control" checked={this.state.speciality.Mobile} onChange={ e => this.handleCheckChange(e)} placeholder=""  />
            <label>Laptop</label>
            <input type="checkbox" name="Laptop" className="form-control" checked={this.state.speciality.Laptop} onChange={ e => this.handleCheckChange(e)} placeholder=""  />
            <label>TV</label>
            <input type="checkbox" name="TV" className="form-control" checked={this.state.speciality.TV} onChange={ e => this.handleCheckChange(e)} placeholder=""  />
            <label>Consoles</label>
            <input type="checkbox" name="Consoles" className="form-control" checked={this.state.speciality.Consoles} onChange={ e => this.handleCheckChange(e)} placeholder=""  />
            <label>Audio</label>
            <input type="checkbox" name="Audio" className="form-control" checked={this.state.speciality.Audio} onChange={ e => this.handleCheckChange(e)} placeholder=""  />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" className="form-control" value={this.state.address} required onChange={ e => this.handleChange(e)} placeholder="Company's Address"  />
          </div>
          <div className="form-group">
            <label>Please drag the marker to your company location</label>
          </div>
          <SubmitBtn type="submit" className="btn btn-outline-success">Submit</SubmitBtn>
        </form>
        <CompanyMapRegister getMarker={this.getMarker} className="mx-auto w-75 h-50 mx-auto mb-5" />
      </div>
    )
  }
}

export default CompanyRegister
