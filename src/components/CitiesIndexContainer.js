import React from "react";
import { connect } from "react-redux";
import CityIndexItem from "./CityIndexItem";
import { Card, Grid } from "semantic-ui-react";

class CitiesIndexContainer extends React.Component {
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

export default connect(mapStateToProps)(CitiesIndexContainer);
