import React from "react";
import { Card, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions/excursionActions";

const OccurrenceCard = props => {
  const date = new Date(props.occurrence.time);
  const options = {
    hour12: true,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };

  const handleSignup = ev => {
    props.excursionSignup(props.occurrence.id, props.currentUserId);
  };

  const handleDelete = ev => {
    props.deleteExcursionOccurrence(props.occurrence.id);
  };

  return (
    <Card fluid={false}>
      <Card.Content>
        <Card.Header>
          {date.toLocaleString("en-US", options)}
          {props.isHost ? (
            <Button basic color="red" floated="right" onClick={handleDelete}>
              Delete
            </Button>
          ) : (
            <Button basic floated="right" onClick={handleSignup}>
              Sign Up
            </Button>
          )}
        </Card.Header>
      </Card.Content>
    </Card>
  );
};
const mapStateToProps = state => {
  return {
    isHost: state.currentUser.id === state.currentExcursion.host_id,
    currentUserId: state.currentUser.id
  };
};

export default connect(mapStateToProps, actions)(OccurrenceCard);