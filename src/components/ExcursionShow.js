import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Header, Button, Card, Segment, Modal } from "semantic-ui-react";
import MapContainer from "./MapContainer";
import OccurrenceCard from "./OccurrenceCard";
import AddExcursionOccurrence from "./AddExcursionOccurrence";
import * as actions from "../actions/excursionActions";

class ExcursionShow extends React.Component {
  componentDidMount() {
    this.props.setCurrentExcursion(this.props.match.params.id);
  }
  handleDelete = ev => {
    this.props.deleteExcursion(this.props.excursion.id, this.props.history);
  };

  render() {
    let occurrences;
    if (this.props.excursion.excursion_occurrences) {
      occurrences = this.props.excursion.excursion_occurrences.map(occ => {
        let attendeeIds = occ.users.map(user => user.id);
        return (
          <OccurrenceCard
            key={occ.id}
            occurrence={occ}
            currentUserAttending={attendeeIds.includes(
              this.props.currentUserId
            )}
          />
        );
      });
    }
    let coordinates = {
      lat: this.props.excursion.lat,
      lng: this.props.excursion.lng
    };
    // console.log("excursion show props", this.props.excursion, coordinates);

    return (
      <div>
        <Header as="h1">{props.excursion.title}</Header>
        <Header as="h3">{props.excursion.description}</Header>
        <Header as="h3">Hosted by: {props.excursion.host_name}</Header>
        <Header as="h4">Duration: {props.excursion.duration} hours</Header>
        <Header as="h4">Price: {props.excursion.price}</Header>
        <Header as="h4">Where you will meet: {props.excursion.address}</Header>
        {props.excursion.excursion_occurrences &&
        props.excursion.excursion_occurrences.length > 0 ? (
          <Modal trigger={<Button>When do you want to go?</Button>}>
            <Modal.Header>Occurrences</Modal.Header>
            <Modal.Content>
              <Card.Group itemsPerRow={1}>{occurrences}</Card.Group>
            </Modal.Content>
          </Modal>
        ) : null}
        <br />
        <MapContainer coordinates={coordinates} />
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
  }
}

const mapStateToProps = state => {
  return {
    isHost: state.currentUser.id === state.currentExcursion.host_id,
    currentUserId: state.currentUser.id
  };
};
/*
<MapContainer coordinates={coordinates} name={this.props.excursion.address} />
*/

export default withRouter(connect(mapStateToProps, actions)(ExcursionShow));
