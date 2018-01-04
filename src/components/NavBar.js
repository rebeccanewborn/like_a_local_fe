import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../actions";
import { Menu, Image } from "semantic-ui-react";
import logo from "../images/icon.png";

const NavBar = props => {
  const handleLogout = ev => {
    props.history.push("/login");
    props.logout();
  };

  return (
    <Menu pointing secondary className="navbar">
      <Menu.Menu position="left">
        <Menu.Item onClick={() => props.history.push("/cities")}>
          <Image src={logo} size="mini" />
        </Menu.Item>
        {props.name ? (
          <Menu.Item className="menu-text">
            Welcome, {props.name.split(" ")[0]}
          </Menu.Item>
        ) : null}
      </Menu.Menu>

      {props.isLoggedIn ? (
        <Menu.Menu position="right">
          <Menu.Item
            className="menu-text"
            onClick={ev => props.history.push("/excursions/new")}
          >
            New Excursion
          </Menu.Item>
          <Menu.Item className="menu-text" onClick={ev => handleLogout(ev)}>
            Logout
          </Menu.Item>
        </Menu.Menu>
      ) : (
        <Menu.Menu position="right">
          <Menu.Item onClick={() => props.history.push("/login")}>
            Login
          </Menu.Item>
          <Menu.Item onClick={() => props.history.push("/signup")}>
            Sign Up
          </Menu.Item>
        </Menu.Menu>
      )}
    </Menu>
  );
};

/*
onClick={() => {
  props.history.push("/my+profile");
}}
*/

const mapStateToProps = state => {
  return { name: state.currentUser.name };
};

export default withRouter(connect(mapStateToProps, actions)(NavBar));
