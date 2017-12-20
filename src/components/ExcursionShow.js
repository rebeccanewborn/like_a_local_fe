import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Header, Button, Card, Segment } from "semantic-ui-react";
import OccurrenceCard from "./OccurrenceCard";
import AddExcursionOccurrence from "./AddExcursionOccurrence";
import * as actions from "../actions/excursionActions";

const ExcursionShow = props => {
  const handleDelete = ev => {
    props.deleteExcursion(props.excursion.id, props.history);
  };

  let occurrences;
  if (props.excursion.excursion_occurrences) {
    occurrences = props.excursion.excursion_occurrences.map(occ => (
      <OccurrenceCard key={occ.created_at} occurrence={occ} />
    ));
  }

  return (
    <div>
      <Header as="h1">{props.excursion.title}</Header>
      <Header as="h3">{props.excursion.description}</Header>
      <Header as="h3">Hosted by: {props.excursion.host_name}</Header>
      <Header as="h4">Duration: {props.excursion.duration} hours</Header>
      <Header as="h4">Price: {props.excursion.price}</Header>
      <Segment compact>
        <Card.Group itemsPerRow={1}>{occurrences}</Card.Group>
      </Segment>
      <br />
      {props.isHost ? (
        <div>
          <AddExcursionOccurrence
            excursion_id={props.excursion.id}
            duration={props.excursion.duration}
          />
          <Button onClick={handleDelete}>Delete this Excursion</Button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isHost: state.currentUser.id === state.currentExcursion.host_id,
    currentUserId: state.currentUser.id
  };
};
export default withRouter(connect(mapStateToProps, actions)(ExcursionShow));

//{props.excursion.users ? <ul>{attendees}</ul> : null}

// let attendees;
// if (props.excursion.users) {
//   attendees = props.excursion.users.map(user => (
//     <li key={user.created_at}>{user.name}</li>
//   ));
// }
