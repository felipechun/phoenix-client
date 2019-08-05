import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
// const mapStylesY = {
//  width: '70%',
//  height: '400px',
//  margin:"0 auto",
//  padding: '0'
// };
const RegistrationMap = (props) => {

   return (
     <Map
       google={props.google}
       zoom={14}
       className={props.className}
      //  style={mapStylesY}
       initialCenter={{ lat: -23.5617326, lng: -46.6623271 }}
     >
       <Marker
       title={'You are Here'} //marker title
       draggable={true} //make the marker draggable
       onDragend={props.getMarker}
       />
     </Map>
   );
 }
 
export default GoogleApiWrapper({
 apiKey: 'AIzaSyDdAcLIRpqv9khtc_t2kOOyIgvIEDUEQUk'
})(RegistrationMap);