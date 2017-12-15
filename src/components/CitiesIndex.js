import React from "react";
import { connect } from "react-redux";
import CityIndexItem from "./CityIndexItem";
import { Card, Grid } from "semantic-ui-react";
import * as actions from "../actions/citiesActions";

class CitiesIndex extends React.Component {
  componentDidMount() {
    this.props.getAllCities();
  }
  render() {
    let cityIndexItems = this.props.cities.map(city => (
      <CityIndexItem key={city.name} city={city} />
    ));
    return (
      <div>
        <h1>City Index</h1>
        <Grid>{cityIndexItems}</Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.currentUser, cities: state.cities };
};

export default connect(mapStateToProps, actions)(CitiesIndex);
