import React from "react";
import { Segment, Image, Grid, Header } from "semantic-ui-react";
import ExcursionListItem from "./ExcursionListItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import actions from "../actions";

class CityShow extends React.Component {
  componentDidMount() {
    this.props.getCity(this.props.match.params.id);
    this.props.clearCurrentExcursion();
  }

  render() {
    let excursions;
    if (this.props.city.excursions) {
      excursions = this.props.city.excursions.map(excur => (
        <ExcursionListItem key={excur.created_at} excursion={excur} />
      ));
    }
    return (
      <div className="city-show">
        <Segment attached="top" className="city-show-header">
          <Image className="city-cover" src={this.props.city.image_url} />
        </Segment>
        <Segment className="city-show-body">
          <Header as="h1">{this.props.city.name}</Header>
          <Grid columns={5}>{excursions}</Grid>
        </Segment>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(CityShow));
