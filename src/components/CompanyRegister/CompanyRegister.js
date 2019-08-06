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
      cep: '',
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
    const cep = this.state.cep;
  
    this.service.companySignup(name, razaosocial, address, latitude, longitude, speciality, phone, cnpj, email, cep)
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
          cep: '',
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
        <div className="row">
          <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
            <div className="card">
              <h5 className="card-header">Register Your Company</h5>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Company Name</label>
                    <input type="text" name="name" className="form-control" value={this.state.name} required onChange={ e => this.handleChange(e)} placeholder="Name of your company"  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Email</label>
                    <input type="email" name="email" className="form-control" value={this.state.email} required onChange={ e => this.handleChange(e)} placeholder="Email of your company"  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Razão Social</label>
                    <input type="text" name="razaosocial" className="form-control" value={this.state.razaosocial} required onChange={ e => this.handleChange(e)} placeholder=""  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Phone Number</label>
                    <input type="text" name="phone" className="form-control" value={this.state.phone} required onChange={ e => this.handleChange(e)} placeholder=""  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">CNPJ</label>
                    <input type="text" name="cnpj" className="form-control" value={this.state.cnpj} required onChange={ e => this.handleChange(e)} placeholder=""  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">CEP</label>
                    <input type="text" name="cep" className="form-control" value={this.state.cep} required onChange={ e => this.handleChange(e)} placeholder=""  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Speciality</label>
                    <br />
                    <div className="row">
                      <div className="col-4">
                        <label className="col">Tablet&nbsp;&nbsp;
                        <input type="checkbox" name="Tablet"  checked={this.state.speciality.Tablet} onChange={ e => this.handleCheckChange(e)} placeholder=""  />
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="col">Mobile&nbsp;&nbsp;
                        <input type="checkbox" name="Mobile"  checked={this.state.speciality.Mobile} onChange={ e => this.handleCheckChange(e)} placeholder=""  />
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="col">Laptop&nbsp;&nbsp;
                        <input type="checkbox" name="Laptop"  checked={this.state.speciality.Laptop} onChange={ e => this.handleCheckChange(e)} placeholder=""  />
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="col">TV&nbsp;&nbsp;
                        <input type="checkbox" name="TV"  checked={this.state.speciality.TV} onChange={ e => this.handleCheckChange(e)} placeholder=""  />
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="col">Consoles&nbsp;&nbsp;
                        <input type="checkbox" name="Consoles"  checked={this.state.speciality.Consoles} onChange={ e => this.handleCheckChange(e)} placeholder=""  />
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="col">Audio&nbsp;&nbsp;
                        <input type="checkbox" name="Audio"  checked={this.state.speciality.Audio} onChange={ e => this.handleCheckChange(e)} placeholder=""  />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Address</label>
                    <input type="text" name="address" className="form-control" value={this.state.address} required onChange={ e => this.handleChange(e)} placeholder="Company's Address"  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Please drag the marker to your company location</label>
                  </div>
                  <SubmitBtn type="submit" className="btn btn-outline-success">Submit</SubmitBtn>
                </form>
                <CompanyMapRegister getMarker={this.getMarker} className="mx-auto w-75 h-50 mx-auto mb-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyRegister
