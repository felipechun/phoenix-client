import React from 'react'
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react'

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={12}
      className="w-100 h-25 mx-auto mb-5"
      initialCenter={{ lat: -23.5470789, lng: -46.6826298 }}
    >
      {props.displayMarkers()}
      <InfoWindow
        marker={props.activeMarker}
        visible={props.showingInfoWindow}>
        <h3>{props.selectedPlace.name}</h3>
        <p>{props.selectedPlace.address}</p>
      </InfoWindow>
    </Map>
  );
 
}
export default GoogleApiWrapper({
 apiKey: 'AIzaSyDdAcLIRpqv9khtc_t2kOOyIgvIEDUEQUk'
})(MapContainer);