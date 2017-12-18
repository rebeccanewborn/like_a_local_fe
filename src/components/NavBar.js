import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const NavBar = props => {
  return (
    <Container>
      <Menu pointing secondary size="large" style={{ borderStyle: "none" }}>
        <Menu.Item as="a" active>
          Home
        </Menu.Item>
        <Menu.Item as="a">About</Menu.Item>
        <Menu.Item position="right">
          <Button as="a" onClick={() => props.history.push("/login")}>
            Log in
          </Button>
          <Button
            as="a"
            style={{ marginLeft: "0.5em" }}
            onClick={() => props.history.push("/signup")}
          >
            Sign Up
          </Button>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default withRouter(NavBar);
