import React from "react";
import CitiesIndexContainer from "./CitiesIndexContainer";
import * as userActions from "../actions/userActions";
import { connect } from "react-redux";

let actions = { ...userActions };

class LikeLocalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(ev) {
    this.props.logout();
  }
  render() {
    return (
      <div>
        <CitiesIndexContainer />
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default connect(null, actions)(LikeLocalContainer);
