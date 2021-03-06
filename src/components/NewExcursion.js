import React from "react";
import {
  Container,
  Form,
  Input,
  TextArea,
  Button,
  Dropdown,
  Header
} from "semantic-ui-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { GoogleApiWrapper } from "google-maps-react";
import GoogleApiKeys from "../services/keys.js";
import MyDropzone from "./MyDropzone";
import actions from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class NewExcursion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      duration: "",
      price: "",
      city_id: null,
      searchTerm: "",
      address: "",
      lat: null,
      lng: null,
      image_base64s: []
    };
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleDropdownChange = (ev, { value }) => {
    this.setState({ city_id: value });
  };

  handleSearchTerm = term => {
    this.setState({ searchTerm: term });
  };

  handleSelect = (address, placeId) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({ ...latLng, address });
      })
      .catch(error => console.error("Error", error));
  };

  handleSubmit = ev => {
    ev.preventDefault();
    let data = {
      ...this.state,
      host_id: this.props.host_id
    };
    this.props.newExcursion(data, this.props.history);
    this.props.getAllCities();
  };

  onDrop = file => {
    let reader = new FileReader();
    reader.onload = () => {
      let fileAsDataURL = reader.result;
      let image_base64s = this.state.image_base64s;
      image_base64s.push(fileAsDataURL);
      this.setState({ image_base64s });
    };
    reader.readAsDataURL(file);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <Input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <TextArea
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              style={{ minHeight: 100 }}
            />
          </Form.Field>
          <Form.Field>
            <MyDropzone onDrop={this.onDrop} />
          </Form.Field>
          <Form.Field>
            <label>Duration</label>
            <Input
              type="text"
              name="duration"
              label={{ basic: true, content: "hours" }}
              labelPosition="right"
              value={this.state.duration}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Price</label>
            <Input
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <Dropdown
              placeholder="Select City"
              fluid
              search
              selection
              options={this.props.cities}
              value={this.state.city_id}
              onChange={this.handleDropdownChange}
            />
          </Form.Field>
          {this.state.city_id ? (
            <div>
              <Header as="h5">Where will you meet?</Header>
              <PlacesAutocomplete
                inputProps={{
                  onChange: this.handleSearchTerm,
                  value: this.state.searchTerm,
                  placeholder:
                    "Search for places so your guests know where to find you"
                }}
                style={{ width: "50%" }}
                onSelect={this.handleSelect}
              />
            </div>
          ) : null}

          <Button type="submit">Submit</Button>
        </Form>
        <br />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  let cities = state.allCities.map(city => {
    return { key: city.id, value: city.id, text: city.name };
  });
  return { cities, host_id: state.currentUser.id };
};

export default GoogleApiWrapper({
  apiKey: GoogleApiKeys.key
})(withRouter(connect(mapStateToProps, actions)(NewExcursion)));
