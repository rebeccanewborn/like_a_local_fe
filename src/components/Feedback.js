import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/excursionActions";
import { Modal, Button, Tab, Form, Rating, TextArea } from "semantic-ui-react";
import MyDropzone from "./MyDropzone";

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  initialState = () => {
    return {
      modalOpen: false,
      activeIndex: 0,
      photosTab: {
        photos: []
      },
      reviewsTab: {
        excursion_rating: null,
        excursion_review: "",
        host_rating: null,
        host_review: ""
      }
    };
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState(this.initialState());
  };

  handleTabChange = (ev, data) => {
    this.setState({
      ...this.initialState(),
      modalOpen: true,
      activeIndex: data.activeIndex
    });
  };

  handleReviewChange = ev => {
    this.setState({
      reviewsTab: {
        ...this.state.reviewsTab,
        [ev.target.name]: ev.target.value
      }
    });
  };

  handleRatingChange = (ev, data) => {
    this.setState({
      reviewsTab: { ...this.state.reviewsTab, [data.name]: data.rating }
    });
  };

  handleReviewSubmit = ev => {
    ev.preventDefault();
    this.props.addExcursionReview({
      review: {
        ...this.state.reviewsTab,
        user_id: this.props.user_id,
        excursion_id: this.props.excursion_id
      }
    });
    this.setState(this.initialState());
  };

  onDrop = file => {
    let reader = new FileReader();
    const photos = this.state.photosTab.photos;
    reader.onload = () => {
      let fileAsDataURL = reader.result;
      photos.push(fileAsDataURL);
      this.setState({ photosTab: { photos } });
    };
    reader.readAsDataURL(file);
  };

  handleImageSubmit = ev => {
    this.props.addExcursionPhotos({
      photos: this.state.photosTab.photos,
      user_id: this.props.user_id,
      excursion_id: this.props.excursion_id
    });
    this.setState(this.initialState());
  };

  render() {
    const panes = [
      {
        menuItem: "Leave a Review",
        render: () => (
          <Tab.Pane>
            <Form>
              <label>Tell us about your experience on this excursion </label>
              <br />
              <Rating
                maxRating={5}
                rating={this.state.excursion_rating}
                name="excursion_rating"
                onRate={this.handleRatingChange}
              />
              <TextArea
                name="excursion_review"
                onChange={this.handleReviewChange}
              />
              <label>Tell us about your experience with the host </label>
              <br />
              <Rating
                maxRating={5}
                rating={this.state.host_rating}
                name="host_rating"
                onRate={this.handleRatingChange}
              />
              <TextArea name="host_review" onChange={this.handleReviewChange} />
              <Button onClick={this.handleReviewSubmit} type="submit">
                Submit Reviews
              </Button>
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Post Some Pictures",
        render: () => {
          return (
            <Tab.Pane>
              <MyDropzone onDrop={this.onDrop} />
              <Button onClick={this.handleImageSubmit}>Submit Images</Button>
            </Tab.Pane>
          );
        }
      }
    ];
    return (
      <Modal
        trigger={
          <Button basic className="excursion-button" onClick={this.handleOpen}>
            Tell us about your experience
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Tell us about your experience</Modal.Header>
        <Modal.Content>
          <Tab
            menu={{ secondary: true, pointing: true }}
            panes={panes}
            activeIndex={this.state.activeIndex}
            onTabChange={this.handleTabChange}
          />
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    user_id: state.currentUser.id,
    excursion_id: state.currentExcursion.id
  };
};

export default connect(mapStateToProps, actions)(Feedback);
