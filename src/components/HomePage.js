import React from "react";
import { Header, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const HomePage = props => {
  const toHome = () => {
    props.history.push("/login");
  };
  return (
    <div className="home-page">
      <div className="home-page-info">
        <Header as="h1">See a city through the eyes of a local</Header>
        <Button
          basic
          onClick={() => {
            toHome();
          }}
        >
          Enter
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
