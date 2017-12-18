import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

const CityIndexItem = props => {
  const handleClick = ev => {
    props.history.push(`/cities/${props.city.id}`);
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

export default withRouter(CityIndexItem);
