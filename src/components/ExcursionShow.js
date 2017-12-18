import React from "react";
import { withRouter } from "react-router-dom";
import { Header } from "semantic-ui-react";

const ExcursionShow = props => {
  return (
    <div>
      <Header as="h1">{props.excursion.title}</Header>
      <Header as="h2">{props.excursion.description}</Header>
      <Header as="h4">Duration: {props.excursion.duration}</Header>
      <Header as="h4">Price: {props.excursion.price}</Header>
    </div>
  );
};

export default withRouter(ExcursionShow);
