import React from "react";
import { Segment, Loader } from "semantic-ui-react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import GoogleApiKeys from "../services/keys.js";

class MapContainer extends React.Component {
  render() {
    return this.props.coordinates.lat ? (
      <Segment
        loading={!this.props.loaded}
        style={{
          width: "100%",
          height: "560px",
          position: "relative"
        }}
      >
        <Map
          style={{ width: "97.5%", height: "95.5%", position: "relative" }}
          google={window.google}
          initialCenter={this.props.coordinates}
          zoom={16}
        >
          <Marker position={this.props.coordinates} />
        </Map>
      </Segment>
    ) : (
      <Loader />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GoogleApiKeys.key
})(MapContainer);
