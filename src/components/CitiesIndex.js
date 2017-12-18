import React from "react";
import CityIndexItem from "./CityIndexItem";
import { Grid } from "semantic-ui-react";

const CitiesIndex = props => {
  const cityIndexItems = props.cities.map(city => (
    <CityIndexItem key={city.name} city={city} />
  ));
  return (
    <div>
      <h1>City Index</h1>
      <Grid>{cityIndexItems}</Grid>
    </div>
  );
};

export default CitiesIndex;
