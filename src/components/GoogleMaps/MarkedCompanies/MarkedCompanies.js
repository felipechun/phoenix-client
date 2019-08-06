import React from 'react'
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react'

const markedMap = {
  margin:"auto",
  width: "90%",
  height: "300px"
 }
 

const MapContainer = (props) => {

  return (
    <div id="mapContainer">
      <Map
      style={markedMap}
        google={props.google}
        zoom={12}
        id="identity"
        className="h-25 mb-5"
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
    </div>
  );
 
}
export default GoogleApiWrapper({
 apiKey: 'AIzaSyDdAcLIRpqv9khtc_t2kOOyIgvIEDUEQUk'
})(MapContainer);