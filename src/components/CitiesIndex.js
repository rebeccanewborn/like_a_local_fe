import React from "react";
import CityIndexItem from "./CityIndexItem";
import { Grid, Header } from "semantic-ui-react";

const CitiesIndex = props => {
  const cityIndexItems = props.cities.map(city => (
    <Grid.Column key={city.name} padded>
      <CityIndexItem key={city.name} city={city} />
    </Grid.Column>
  ));

  return (
    <Grid>
      <Grid.Row centered>
        <Header as="h1">Browse Cities</Header>
      </Grid.Row>
      <Grid.Row columns={3} padded>
        {cityIndexItems}
      </Grid.Row>
    </Grid>
  );
};

export default CitiesIndex;
