import React from "react";
import { Grid, Card, Image } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const ExcursionListItem = props => {
  const handleClick = ev => {
    props.history.push(`/excursions/${props.excursion.id}`);
  };
  return (
    <Grid.Column>
      <Card className="excursion-card" onClick={handleClick}>
        <Image
          src={props.excursion.first_photo}
          className="excursion-card-img"
        />
        <Card.Content>
          <Card.Header>{props.excursion.title}</Card.Header>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default withRouter(ExcursionListItem);
