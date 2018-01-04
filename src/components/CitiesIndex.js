import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/excursionActions";
import CityIndexItem from "./CityIndexItem";
import { Grid, Header } from "semantic-ui-react";

class CitiesIndex extends React.Component {
  componentDidMount() {
    this.props.clearCurrentExcursion();
  }
  render() {
    const cityIndexItems = this.props.cities.map(city => (
      <Grid.Column key={city.name}>
        <CityIndexItem key={city.name} city={city} />
      </Grid.Column>
    ));

    return (
      <Grid centered padded>
        <Grid.Row columns={4}>{cityIndexItems}</Grid.Row>
      </Grid>
    );
  }
}

export default connect(null, actions)(CitiesIndex);
