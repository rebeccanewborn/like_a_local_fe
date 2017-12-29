import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../actions";
import { Container, Menu } from "semantic-ui-react";

const NavBar = props => {
  const handleLogout = ev => {
    props.history.push("/login");
    props.logout();
  };

  return (
    <Container>
      <Menu pointing secondary fluid style={{ borderStyle: "none" }}>
        <Menu.Menu position="left">
          <Menu.Item onClick={() => props.history.push("/cities")}>
            Home
          </Menu.Item>
          {props.name ? (
            <Menu.Item
              onClick={() => {
                props.history.push("/my+profile");
              }}
            >
              Welcome, {props.name.split(" ")[0]}
            </Menu.Item>
          ) : null}
        </Menu.Menu>

        {props.isLoggedIn ? (
          <Menu.Menu position="right">
            <Menu.Item onClick={ev => props.history.push("/excursions/new")}>
              New Excursion
            </Menu.Item>
            <Menu.Item onClick={ev => handleLogout(ev)}>Logout</Menu.Item>
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
    </Container>
  );
};

const mapStateToProps = state => {
  return { name: state.currentUser.name };
};

export default withRouter(connect(mapStateToProps, actions)(NavBar));
