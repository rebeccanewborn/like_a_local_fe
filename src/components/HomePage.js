import React from "react";
import { Card, Header, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const HomePage = props => {
  console.log("home page");
  return (
    <div className="home-page">
      <Card className="home-page-info">
        <Card.Content>
          <Header as="h1">See a city through the eyes of a local</Header>
          <Button
            className="home-page-button"
            basic
            onClick={() => {
              props.history.push("/login");
            }}
          >
            Enter
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default withRouter(HomePage);
