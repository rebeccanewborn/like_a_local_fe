import React from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";
import moment from "moment";
import Datetime from "react-datetime";
import { connect } from "react-redux";
import * as actions from "../actions/excursionActions";

class AddExcursionOccurrence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment()
    };
  }

  handleChange = event => {
    this.setState({
      time: event._d
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.newExcursionOccurrence({
      ...this.state,
      excursion_id: this.props.excursion_id
    });
  };

  render() {
    return (
      <Segment color="red" compact>
        <Header as="h4">Duration: {this.props.duration} hours</Header>
        <Form onSubmit={this.handleSubmit}>
          <Datetime
            onChange={this.handleChange}
            placeholder={"Click here to select a date and time"}
          />
          <Button type="submit">Add Timeslot</Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(null, actions)(AddExcursionOccurrence);
