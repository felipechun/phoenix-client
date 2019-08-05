import React from 'react'
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react'

const MapContainer = (props) => {

  return (
    <Map
      google={props.google}
      zoom={12}
      className="mx-auto w-100 h-25 mx-auto mb-5"
      initialCenter={{ lat: -23.5470789, lng: -46.6826298 }}
    >
      {props.displayMarkers()}
      <InfoWindow
        marker={props.activeMarker}
        visible={props.showingInfoWindow}>
          <div>
            <h3>{props.selectedPlace.name}</h3>
            <p>{props.selectedPlace.address}</p>
          </div>
      </InfoWindow>
    </Map>
  );
 
}
export default GoogleApiWrapper({
 apiKey: 'AIzaSyCkanr-oYF_mRUa0P5FgxrDm7sBDYy2U3o'
})(MapContainer);