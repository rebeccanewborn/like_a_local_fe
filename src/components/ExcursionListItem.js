import React from "react";
import { Grid, Card } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const ExcursionListItem = props => {
  const handleClick = ev => {
    props.history.push(`/excursions/${props.excursion.id}`);
  };
  return (
    <Grid.Row centered>
      <Card onClick={handleClick}>
        <Card.Content>
          <Card.Header>{props.excursion.title}</Card.Header>
        </Card.Content>
      </Card>
    </Grid.Row>
  );
};

export default withRouter(ExcursionListItem);
