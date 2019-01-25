import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} 
      zoom={14}
      initialCenter={
        {lat: 37.78, lng: -122.44}
      }
      zoom={11}
      style={
        { width: '36%', height: '100%', position: 'relative' }
        }
      >
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(MapContainer)