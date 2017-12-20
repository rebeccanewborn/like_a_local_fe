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

  handleChange = time => {
    this.setState({
      time: time._d
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
          <Datetime onChange={this.handleChange} />
          <Button type="submit">Add a Timeslot for this Excursion</Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(null, actions)(AddExcursionOccurrence);
