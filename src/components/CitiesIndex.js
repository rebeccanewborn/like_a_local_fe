import React from "react";
import CityIndexItem from "./CityIndexItem";
import { Grid, Header } from "semantic-ui-react";

const CitiesIndex = props => {
  const cityIndexItems = props.cities.map(city => (
    <Grid.Column key={city.name}>
      <CityIndexItem key={city.name} city={city} />
    </Grid.Column>
  ));

  return (
    <Grid centered>
      <Grid.Row centered>
        <Header as="h1">Browse Cities</Header>
      </Grid.Row>
      <Grid.Row columns={3}>{cityIndexItems}</Grid.Row>
    </Grid>
  );
};

export default CitiesIndex;
