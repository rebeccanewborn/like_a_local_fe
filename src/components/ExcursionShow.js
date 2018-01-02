import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Header, Button, Card, Modal } from "semantic-ui-react";
import MapContainer from "./MapContainer";
import PhotoCarousel from "./PhotoCarousel";
import Feedback from "./Feedback";
import OccurrenceCard from "./OccurrenceCard";
import ReviewCard from "./ReviewCard";
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
    if (this.props.excursionLoaded) {
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

    let reviews;
    if (this.props.excursionLoaded) {
      reviews = this.props.excursion.reviews.map(review => (
        <ReviewCard key={review.created_at} review={review} />
      ));
    }

    return (
      <Grid relaxed padded>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Header as="h1">Photos from the host</Header>
            {this.props.excursionLoaded ? (
              <PhotoCarousel photos={this.props.excursion.host_photos} />
            ) : null}
            <Header as="h4">
              Duration: {this.props.excursion.duration} hours
            </Header>
            <Header as="h4">Price: {this.props.excursion.price}</Header>

            {this.props.excursionLoaded ? (
              <Modal
                trigger={
                  <Button>
                    {this.props.isHost
                      ? "Manage timeslots"
                      : "When do you want to go?"}
                  </Button>
                }
              >
                <Modal.Header>
                  {this.props.isHost ? "Manage Occurrences" : "Occurrences"}
                </Modal.Header>
                <Modal.Content>
                  {this.props.isHost ? (
                    <div>
                      <AddExcursionOccurrence
                        excursion_id={this.props.excursion.id}
                        duration={this.props.excursion.duration}
                      />
                      <Button onClick={this.handleDelete}>
                        Delete this Excursion
                      </Button>
                    </div>
                  ) : null}
                  <Card.Group itemsPerRow={1}>{occurrences}</Card.Group>
                </Modal.Content>
              </Modal>
            ) : null}
            {this.props.isHost ? null : <Feedback />}
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">{this.props.excursion.title}</Header>
            <Header as="h3">{this.props.excursion.description}</Header>
            <Header as="h3">Hosted by: {this.props.excursion.host_name}</Header>
            <Header as="h4">
              Where you will meet: {this.props.excursion.address}
            </Header>
            <MapContainer
              coordinates={coordinates}
              address={this.props.excursion.address}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card.Group>{reviews}</Card.Group>
            <Header as="h1">Photos from other users</Header>
            {this.props.excursionLoaded ? (
              <PhotoCarousel photos={this.props.excursion.user_photos} />
            ) : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    isHost: state.currentUser.id === state.currentExcursion.host_id,
    currentUserId: state.currentUser.id,
    excursion: state.currentExcursion,
    excursionLoaded: !!state.currentExcursion.id
  };
};

export default withRouter(connect(mapStateToProps, actions)(ExcursionShow));
