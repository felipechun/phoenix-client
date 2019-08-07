import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const companyRegisterMap = {
  margin:"auto",
  width: "100%",
  height: "300px",
 }

const RegistrationMap = (props) => {

   return (
     <div id="registrationMap">
      <Map
        google={props.google}
        zoom={14}
        className={props.className}
        style={companyRegisterMap}
        initialCenter={{ lat: -23.5617326, lng: -46.6623271 }}
      >
        <Marker
        title={'You are Here'} //marker title
        draggable={true} //make the marker draggable
        onDragend={props.getMarker}
        />
      </Map>
     </div>
   );
 }
 
export default GoogleApiWrapper({
 apiKey: 'AIzaSyB3daSfMZ9sznOP_MvVOuCeqaPjyB7sMAo'
})(RegistrationMap);