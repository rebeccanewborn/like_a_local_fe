import React from "react";
import { connect } from "react-redux";

const Profile = props => {
  return <img src={props.user.avatar} />;
};

const mapStateToProps = state => {
  return { user: state.currentUser };
};

export default connect(mapStateToProps)(Profile);

