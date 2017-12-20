import React from "react";
import {
  Container,
  Form,
  Input,
  TextArea,
  Button,
  Dropdown
} from "semantic-ui-react";
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
      city_id: null
    };
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };
  handleDropdownChange = (ev, { value }) => {
    this.setState({ city_id: value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    let data = {
      ...this.state,
      host_id: this.props.host_id
    };
    debugger;
    this.props.newExcursion(data, this.props.history);
    this.props.getAllCities();
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
          <Button type="submit">Submit</Button>
        </Form>
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

export default withRouter(connect(mapStateToProps, actions)(NewExcursion));
