import React from "react";
import { Segment, Header, Form, Button, Popup } from "semantic-ui-react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { connect } from "react-redux";
import * as actions from "../actions/excursionActions";

class AddExcursionOccurrence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null
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
    this.setState({ time: null });
  };

  render() {
    return (
      <Segment color="red" width={10}>
        <Header as="h4">Duration: {this.props.duration} hours</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Field width={6}>
              <Datetime
                onChange={this.handleChange}
                inputProps={{
                  placeholder: "Click here to select a date and time"
                }}
                value={this.state.time}
                closeOnSelect={!!this.state.time}
              />
            </Form.Field>
            <Form.Field width={4}>
              <Popup
                trigger={
                  <Button type="submit" basic>
                    Add Timeslot
                  </Button>
                }
                content="Timeslot added!"
                on="click"
                hideOnScroll
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}

export default connect(null, actions)(AddExcursionOccurrence);
