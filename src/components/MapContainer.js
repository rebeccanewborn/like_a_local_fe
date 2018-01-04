import React from "react";
import { Loader, Header } from "semantic-ui-react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import GoogleApiKeys from "../services/keys.js";

class MapContainer extends React.Component {
  render() {
    return this.props.coordinates.lat ? (
      <div className="map-segment">
        <Header as="h4">Where you will meet: {this.props.address}</Header>
        <Map
          className="map"
          google={window.google}
          initialCenter={this.props.coordinates}
          zoom={16}
        >
          <Marker position={this.props.coordinates} />
        </Map>
      </div>
    ) : (
      <Loader />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GoogleApiKeys.key
})(MapContainer);
