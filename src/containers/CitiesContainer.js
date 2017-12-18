import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import * as actions from "../actions/citiesActions";
import { connect } from "react-redux";
import { Loader } from "semantic-ui-react";
import CitiesIndex from "../components/CitiesIndex";
import CityShow from "../components/CityShow";

class CitiesContainer extends React.Component {
  index = () => this.props.location.pathname.slice(8);

  renderShow = ({ match }) => {
    let currentCity = this.props.cities.find(
      city => city.id === parseInt(match.params.id, 10)
    );
    return currentCity ? <CityShow city={currentCity} /> : <Loader />;
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/cities"
          render={() => <CitiesIndex cities={this.props.cities} />}
        />
        <Route exact path="/cities/:id" render={this.renderShow} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};

export default withRouter(connect(mapStateToProps, actions)(CitiesContainer));
