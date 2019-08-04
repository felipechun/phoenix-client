import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
// set all the style on the map
const mapStylesX = {
//  width: '100%',
//  height: '300px',
//  margin:"auto",
//  borderRadius: "30px 30px 30px 30px",
//  border: "3px solid #000000",
};
// can be built as funcional component
class MapContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     // will be populated by an axios request to get all the companies on the system
     stores: [
       { _id: "312094120931209", lat: -23.5617326, lng: -46.6623271, name: 'Mussum Ipsum', address: "Mussum Street 231"},
       { _id: "112094120931209", lat: -23.5632326, lng: -46.6523271, name: 'Mussum double Ipsum'},
       { _id: "92094120931209", lat: -23.5635321, lng: -46.6423271, name: 'Mussum triple Ipsum'}], // array with all the stores availables
     selectedIdStore: '',
     activeMarker: {}, // will display the marker info
     showingInfoWindow: false,
     selectedPlace: {},
   }
 }
 // componentDidMount = () => {
 //   axios.get('/api/companies/all')
 //   .then(answer => {
 //     this.setState({
 //       stores: answer.data
 //     })
 //   })
 //   .catch()
 // }
 // create markers based on array of the stores
 displayMarkers = () => {
   return this.state.stores.map((store, index) => {
     return <Marker
       key={index}
       name={store.name}
       address={store.address}
       id={store._id}
       position={{
         lat: store.lat,
         lng: store.lng,
       }}
       onClick={this.onMarkerClick}
       />
   })
 }
 // get the id of the store and change the state for display variables
 onMarkerClick = (props, marker, e) => {
   this.setState({
     selectedIdStore: marker.id,
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
     <Map
       google={this.props.google}
       zoom={12}
       className="mx-auto w-100 h-25 mx-auto mb-5"
      //  style={mapStylesX}
       initialCenter={{ lat: -23.5470789, lng: -46.6826298 }}
     >
       {this.displayMarkers()}
       <InfoWindow
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}>
           <div>
             <h3>{this.state.selectedPlace.name}</h3>
             <p>{this.state.selectedPlace.address}</p>
           </div>
       </InfoWindow>
     </Map>
   );
 }
}
export default GoogleApiWrapper({
 apiKey: 'AIzaSyCkanr-oYF_mRUa0P5FgxrDm7sBDYy2U3o'
})(MapContainer);