import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Header, Card, Icon, Image } from "semantic-ui-react";
import MapContainer from "./MapContainer";
import PhotoCarousel from "./PhotoCarousel";
import Feedback from "./Feedback";
import OccurrencesModal from "./OccurrencesModal";

import ReviewCard from "./ReviewCard";
import * as actions from "../actions/excursionActions";

class ExcursionShow extends React.Component {
  componentDidMount() {
    this.props.setCurrentExcursion(this.props.match.params.id);
  }
  handleDelete = ev => {
    this.props.deleteExcursion(this.props.excursion.id, this.props.history);
  };

  render() {
    let coordinates = {
      lat: this.props.excursion.lat,
      lng: this.props.excursion.lng
    };

    let reviews;
    if (this.props.excursionLoaded) {
      reviews = this.props.excursion.reviews.map(review => (
        <ReviewCard
          key={review.created_at}
          review={review}
          className="review-card"
        />
      ));
    }

    return (
      <Grid relaxed="very" padded className="excursion-grid">
        <Grid.Row columns={3}>
          <Grid.Column width={4}>
            {this.props.excursionLoaded ? (
              <PhotoCarousel photos={this.props.excursion.host_photos} />
            ) : null}
            <Header as="h2" textAlign="center">
              <Icon name="time" />
              {this.props.excursion.duration} hours
            </Header>
            <Header as="h2" textAlign="center">
              <Icon name="dollar" />
              {this.props.excursion.price}
            </Header>
            <OccurrencesModal handleDelete={this.handleDelete} />
            <br />
            <br />
            {this.props.isHost ? null : <Feedback />}
          </Grid.Column>
          <Grid.Column width={8} className="scrollable-column">
            <Header as="h1" textAlign="center">
              {this.props.excursion.title}
            </Header>
            {this.props.excursionLoaded ? (
              <div className="host-info">
                <Image
                  className="host-avatar-img"
                  src={this.props.excursion.host.avatar}
                />
                Hosted by {this.props.excursion.host.name}
              </div>
            ) : null}
            <Header as="h3" textAlign="center">
              {this.props.excursion.description}
            </Header>

            <MapContainer
              coordinates={coordinates}
              address={this.props.excursion.address}
            />
          </Grid.Column>

          <Grid.Column width={4} className="scrollable-column">
            <Header as="h2" textAlign="center">
              See what people are saying about this excursion
            </Header>
            <Card.Group>{reviews}</Card.Group>
            <Header as="h2">Photos from other users</Header>
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
