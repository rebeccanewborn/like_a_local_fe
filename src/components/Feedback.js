import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/excursionActions";
import { Modal, Button, Tab } from "semantic-ui-react";
import DropzoneComponent from "react-dropzone-component";

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      photos: []
    };
  }

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  onDrop = file => {
    let reader = new FileReader();
    reader.onload = () => {
      let fileAsDataURL = reader.result;
      let photos = this.state.photos;
      photos.push(fileAsDataURL);
      this.setState({ photos });
    };
    reader.readAsDataURL(file);
  };

  handleImageSubmit = ev => {
    this.props.addExcursionPhotos({
      photos: this.state.photos,
      user_id: this.props.user_id,
      excursion_id: this.props.excursion_id
    });
    this.setState({ modalOpen: false });
  };

  render() {
    const panes = [
      {
        menuItem: "Leave a Review",
        render: () => <Tab.Pane>Review portion</Tab.Pane>
      },
      {
        menuItem: "Post Some Pictures",
        render: () => {
          let componentConfig = {
            iconFiletypes: [".jpg", ".png", ".gif"],
            showFiletypeIcon: true,
            postUrl: "/"
          };
          let djsConfig = { autoProcessQueue: false };
          let eventHandlers = { addedfile: this.onDrop };
          return (
            <Tab.Pane>
              <DropzoneComponent
                config={componentConfig}
                eventHandlers={eventHandlers}
                djsConfig={djsConfig}
              />
              <Button onClick={this.handleImageSubmit}>Submit</Button>
            </Tab.Pane>
          );
        }
      }
    ];
    return (
      <Modal
        trigger={
          <Button onClick={this.handleOpen}>
            Tell us about your experience
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Tell us about your experience</Modal.Header>
        <Modal.Content>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
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
