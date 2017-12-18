import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/excursionActions";
import NewExcursion from "../components/NewExcursion";
import ExcursionShow from "../components/ExcursionShow";

class ExcursionContainer extends React.Component {
  index = () => this.props.location.pathname.slice(12);
  isNew = () => this.index() === "new";

  componentDidMount() {
    if (!this.isNew()) {
      this.props.setCurrentExcursion(this.index());
    }
  }

  render() {
    return this.isNew() ? (
      <NewExcursion />
    ) : (
      <ExcursionShow excursion={this.props.excursion} />
    );
  }
}

const mapStateToProps = state => {
  return { excursion: state.currentExcursion };
};

export default withRouter(
  connect(mapStateToProps, actions)(ExcursionContainer)
);
