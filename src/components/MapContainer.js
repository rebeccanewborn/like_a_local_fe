import React from "react";
import { Segment, Loader } from "semantic-ui-react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";

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
          google={this.props.google}
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
  apiKey: "AIzaSyAdtLKvDM52u95pkU1h8LoKNiKpxsEVDeM"
})(MapContainer);
