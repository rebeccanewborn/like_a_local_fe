import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Header, Button } from "semantic-ui-react";
import * as actions from "../actions/excursionActions";

const ExcursionShow = props => {
  const handleDelete = ev => {
    props.deleteExcursion(props.excursion.id, props.history);
  };

  const handleSignup = ev => {
    props.excursionSignup(props.excursion.id, props.currentUserId);
  };

  let attendees;
  if (props.excursion.users) {
    attendees = props.excursion.users.map(user => (
      <li key={user.created_at}>{user.name}</li>
    ));
  }

  return (
    <div>
      <Header as="h1">{props.excursion.title}</Header>
      <Header as="h2">{props.excursion.description}</Header>
      <Header as="h3">Hosted by: {props.excursion.host_name}</Header>
      <Header as="h4">Duration: {props.excursion.duration}</Header>
      <Header as="h4">Price: {props.excursion.price}</Header>
      <Header as="h4">Attendees</Header>
      {props.excursion.users ? <ul>{attendees}</ul> : null}
      {props.isHost ? (
        <Button onClick={handleDelete}>Delete this Excursion</Button>
      ) : (
        <Button onClick={handleSignup}>Sign Up For This Excursion</Button>
      )}
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
