import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import CitiesIndex from "../components/CitiesIndex";
import CityShow from "../components/CityShow";
import NewExcursion from "../components/NewExcursion";
import ExcursionShow from "../components/ExcursionShow";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Profile from "../components/Profile";
import actions from "../actions";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

class LikeALocalContainer extends React.Component {
  componentDidMount() {
    this.props.getAllCities();
  }
  render() {
    return (
      <Container>
        <NavBar isLoggedIn={this.props.isLoggedIn} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/my+profile" component={Profile} />
          <Route
            exact
            path="/cities"
            render={() => <CitiesIndex cities={this.props.cities} />}
          />
          <Route
            exact
            path="/cities/:id"
            render={() => <CityShow city={this.props.currentCity} />}
          />
          <Route path="/excursions/new" component={NewExcursion} />
          <Route
            path="/excursions/:id"
            render={() => {
              return (
                <ExcursionShow
                  excursion={this.props.currentExcursion}
                  coordinates={this.props.coordinates}
                />
              );
            }}
          />
        </Switch>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.currentUser.email,
    cities: state.allCities,
    currentCity: state.currentCity,
    currentExcursion: state.currentExcursion,
    coordinates: {
      lat: state.currentExcursion.lat,
      lng: state.currentExcursion.lng
    }
  };
};
export default withRouter(
  connect(mapStateToProps, actions)(LikeALocalContainer)
);
