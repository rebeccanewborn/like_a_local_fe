import React from "react";
import { Form, Input, Button, Dropdown } from "semantic-ui-react";
import * as actions from "../actions/excursionActions";
import { connect } from "react-redux";

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
    this.props.newExcursion(this.state);
  };

  render() {
    return (
      <div>
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
            <Input
              type="text"
              name="description"
              value={this.state.description}
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
              value={this.props.city_id}
              onChange={this.handleDropdownChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Duration</label>
            <Input
              type="text"
              name="duration"
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  let cities = state.cities.map(city => {
    return { key: city.id, value: city.id, text: city.name };
  });
  return { cities };
};

export default connect(mapStateToProps, actions)(NewExcursion);
