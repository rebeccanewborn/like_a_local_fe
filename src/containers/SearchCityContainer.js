import React from "react";
import { Header, Form, Button } from "semantic-ui-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import MapContainer from "../components/MapContainer";

class SearchCityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      coordinates: { lat: 40.7409232, lng: -74.00811099999999 }
    };
  }
  handleAutoChange = term => {
    console.log("handling auto change");
    this.setState({ searchTerm: term });
  };
  handleSelect = (address, placeId) => {
    console.log("handling submit", this.state.searchTerm);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({ coordinates: latLng, searchTerm: address });
      })
      .catch(error => console.error("Error", error));
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Header as="h5">Where will you meet?</Header>
        <PlacesAutocomplete
          inputProps={{
            onChange: this.handleAutoChange,
            value: this.state.searchTerm
          }}
          style={{ width: "50%" }}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default SearchCityContainer;

/*
// <MapContainer coordinates={this.state.coordinates} />
*/
