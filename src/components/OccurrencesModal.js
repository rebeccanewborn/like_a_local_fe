import React from "react";
import { connect } from "react-redux";
import { Modal, Button, Card } from "semantic-ui-react";
import AddExcursionOccurrence from "./AddExcursionOccurrence";
import OccurrenceCard from "./OccurrenceCard";

const OccurrencesModal = props => {
  let occurrences;
  if (props.excursionLoaded) {
    occurrences = props.excursion.excursion_occurrences.map(occ => {
      let attendeeIds = occ.users.map(user => user.id);
      return (
        <OccurrenceCard
          key={occ.id}
          occurrence={occ}
          currentUserAttending={attendeeIds.includes(props.currentUserId)}
        />
      );
    });
  }
  return (
    <Modal
      trigger={
        <Button basic className="excursion-button">
          {props.isHost ? "Manage Excursion" : "When do you want to go?"}
        </Button>
      }
    >
      <Modal.Header>
        {props.isHost ? (
          <div>
            Manage Occurrences
            <Button floated="right" onClick={props.handleDelete}>
              Delete this Excursion
            </Button>{" "}
          </div>
        ) : (
          "Choose a time to go!"
        )}
      </Modal.Header>
      <Modal.Content>
        {props.isHost ? (
          <AddExcursionOccurrence
            excursion_id={props.excursion.id}
            duration={props.excursion.duration}
          />
        ) : null}

        <Card.Group itemsPerRow={1}>{occurrences}</Card.Group>
      </Modal.Content>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    isHost: state.currentUser.id === state.currentExcursion.host_id,
    currentUserId: state.currentUser.id,
    excursion: state.currentExcursion,
    excursionLoaded: !!state.currentExcursion.id
  };
};

export default connect(mapStateToProps)(OccurrencesModal);
