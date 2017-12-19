import React from "react";
import { Segment, Image, Grid } from "semantic-ui-react";
import ExcursionListItem from "./ExcursionListItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions/citiesActions";

class CityShow extends React.Component {
  componentDidMount() {
    this.props.getCity(this.props.match.params.id);
  }

  render() {
    let excursions;
    if (this.props.city.excursions) {
      excursions = this.props.city.excursions.map(excur => (
        <ExcursionListItem key={excur.created_at} excursion={excur} />
      ));
    }
    return (
      <div>
        <Segment attached="top" style={{ height: "200px" }}>
          <Image
            src={this.props.city.image_url}
            style={{ width: "100%", height: "100%" }}
          />
        </Segment>
        <Segment>
          <Grid columns={1}>{excursions}</Grid>
        </Segment>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(CityShow));
