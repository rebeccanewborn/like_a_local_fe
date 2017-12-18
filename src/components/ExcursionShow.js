import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";
import * as actions from "../actions/excursionActions";

class ExcursionShow extends React.Component {
  componentDidMount() {
    let index = this.props.location.pathname.slice(12);
    this.props.setCurrentExcursion(index);
  }
  render() {
    return (
      <div>
        <Header as="h1">{this.props.excursion.title}</Header>
        <Header as="h2">{this.props.excursion.description}</Header>
        <Header as="h4">Duration: {this.props.excursion.duration}</Header>
        <Header as="h4">Price: {this.props.excursion.price}</Header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("redux store", state);
  return { excursion: state.currentExcursion };
};

export default withRouter(connect(mapStateToProps, actions)(ExcursionShow));
