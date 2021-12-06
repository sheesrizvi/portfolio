import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import React from 'react'

export class MapContainer extends React.Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '30rem',
      margin: '4rem auto',
      // position: 'relative',
      // top: '10rem',
    }
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 26.8467, lng: 80.9462 }}
      >
        <Marker position={{ lat: 26.8467, lng: 80.9462 }} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBkmMGFzGVXcHamR5JbHljrCuf540X98_4',
})(MapContainer)
