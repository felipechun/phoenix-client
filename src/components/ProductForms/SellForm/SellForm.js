import React, { Component, Fragment } from 'react'
import AuthService from '../../authentication/auth-service/auth-service';
import MarkedCompanies from '../../GoogleMaps/MarkedCompanies/MarkedCompanies';
import SubmitBtn from '../../buttons/SubmitBtn';
import { Marker } from 'google-maps-react'

export class SellForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      statusProduct: '',
      categories: '',
      path: '',
      brand: '',
      model: '',
      starterPrice: '',
      clientDescription: '',
      imageUrl: '',
      idCompany: '',
      stores: [],
      activeMarker: {}, // will display the marker info
      showingInfoWindow: false,
      selectedPlace: {},
      };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const statusProduct = this.state.statusProduct;
    const categories = this.state.categories;
    const path = this.state.path;
    const brand = this.state.brand;
    const model = this.state.model;
    const starterPrice = this.state.starterPrice;
    const clientDescription = this.state.clientDescription;
    const imageUrl = this.state.imageUrl;
    const idCompany = this.state.idCompany;
  
    this.service.createProduct(name, statusProduct, categories, path, brand, model, starterPrice, clientDescription, imageUrl, idCompany)
    .then( response => {
        this.setState({
          name: '',
          statusProduct: '',
          categories: '',
          path: '',
          brand: '',
          model: '',
          starterPrice: '',
          clientDescription: '',
          imageUrl: '', 
          idCompany: '',
        });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    uploadData.append("imageUrl", e.target.files[0]);
    
    this.service.handleUpload(uploadData)
    .then(response => {
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
        this.setState({ imageUrl: response.secure_url }, () => console.log('IMAGE', this.state.imageUrl));
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  }

  // -------------------GOOGLE MAPS MARKERS METHODS------------------- //

  componentDidMount = () => {
    this.service.getCompanies()
    .then(answer => {      
      this.setState({
        stores: answer,
      })
    })
    .catch(err => console.log(err));
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {      
      return <Marker
        key={index}
        name={store.name}
        address={store.address}
        id={store._id}
        position={{
          lat: store.location.coordinates[1],
          lng: store.location.coordinates[0],
        }}
        onClick={this.onMarkerClick}
        />
    })
  }
  // get the id of the store and change the state for display variables
  onMarkerClick = (props, marker, e) => {
    this.setState({
      idCompany: marker.id,
      activeMarker: marker,
      showingInfoWindow: true,
      selectedPlace: props,
    })
  }
  // will display the info of the store on click
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  

  render() {
    return (
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
            <div className="card">
              <h5 className="card-header">Sell or Repair a product</h5>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                <div className="form-group">
                  <label className="card-title font-weight-bold">What do you want to do?</label>
                    <select name="path" required onChange={ e => this.handleChange(e)} className="form-control" >
                      <option value="" >Choose one</option>
                      <option value="Sell">Sell</option>
                      <option value="Repair">Repair</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Category</label>
                    <select name="categories" required onChange={ e => this.handleChange(e)} className="form-control" >
                      <option value="" >Choose one</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Tablet">Tablet</option>
                      <option value="Mobile">Mobile</option>
                      <option value="Consoles">Videogame Console</option>
                      <option value="TV">Television</option>
                      <option value="Audio">Audio</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Product Brand</label>
                    <input type="text" name="brand" className="form-control" value={this.state.brand} required onChange={ e => this.handleChange(e)} placeholder="Brand of the product"  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Product</label>
                    <input type="text" name="name" className="form-control" value={this.state.name} required onChange={ e => this.handleChange(e)} placeholder="Name of the product"  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Model</label>
                    <input type="text" name="model" className="form-control" value={this.state.model} required onChange={ e => this.handleChange(e)} placeholder="Product model"  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Condition</label>
                    <select name="statusProduct" required onChange={ e => this.handleChange(e)} className="form-control" >
                      <option value="" >Choose one</option>
                      <option value="Broken">Broken</option>
                      <option value="Semi-used">Semi-used</option>
                    </select>
                  </div>
                                    {
                    this.state.path === 'Sell' ? (
                      <div className="form-group">
                        <label className="card-title font-weight-bold">Suggested Price</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input type="text" name="starterPrice" className="form-control" value={this.state.starterPrice} required onChange={ e => this.handleChange(e)} placeholder="How much do you think your product is worth?"  />
                        </div>
                      </div>
                    ) : null
                  }
                  {
                    this.state.path === 'Repair' ? (
                      <div className="form-group">
                      <label className="card-title font-weight-bold">Please choose a repair and maintenance company to handle your product</label>
                      <MarkedCompanies 
                      displayMarkers={this.displayMarkers} 
                      onMarkerClick={this.onMarkerClick} 
                      onMapClicked={this.onMapClicked} 
                      selectedPlace={this.state.selectedPlace}
                      activeMarker={this.state.activeMarker}
                      showingInfoWindow={this.state.showingInfoWindow}
                       />
                    </div>
                    ) : null
                  }
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Description</label>
                    <textarea className="form-control" name="clientDescription" value={this.state.clientDescription} required onChange={ e => this.handleChange(e)} placeholder="Does your device have any problems or physical damages such as a broken screen or scuffs? Please be as specific as possible." rows="3"></textarea>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Please upload a picture of your product</label>
                    <input type="file" className="form-control-file" required onChange={ e => this.handleFileUpload(e)}/>
                  </div>
                  <div className="form-group">
                  {
                    this.state.path === 'Sell' ? (
                      <Fragment>
                        <label className="card-title font-weight-bold">Please choose a repair and maintenance company to handle your product</label>
                        <MarkedCompanies 
                        displayMarkers={this.displayMarkers} 
                        onMarkerClick={this.onMarkerClick} 
                        onMapClicked={this.onMapClicked} 
                        selectedPlace={this.state.selectedPlace}
                        activeMarker={this.state.activeMarker}
                        showingInfoWindow={this.state.showingInfoWindow}
                        />
                      </Fragment>
                    ) : null
                  }
                  </div>
                  <SubmitBtn type="submit" className="btn btn-outline-success float-right">Submit</SubmitBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SellForm
