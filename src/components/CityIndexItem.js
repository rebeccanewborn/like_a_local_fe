import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Image, Grid } from "semantic-ui-react";
import * as actions from "../actions/citiesActions";
import { connect } from "react-redux";

const CityIndexItem = props => {
  const handleClick = ev => {
    props.history.push(`/cities/${props.city.id}`);
    props.selectCity(props.city);
  };
  return (
    <Card onClick={handleClick}>
      <Card.Content>
        <Image src={props.city.image_url} size="small" />
        <Card.Header>{props.city.name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default withRouter(connect(null, actions)(CityIndexItem));
