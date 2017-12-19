import React from "react";
import { Segment, Image, Grid } from "semantic-ui-react";
import ExcursionListItem from "./ExcursionListItem";

const CityShow = props => {
  let excursions;
  if (props.city.excursions) {
    excursions = props.city.excursions.map(excur => (
      <ExcursionListItem key={excur.created_at} excursion={excur} />
    ));
  }

  return (
    <div>
      <Segment attached="top" style={{ height: "200px" }}>
        <Image
          src={props.city.image_url}
          style={{ width: "100%", height: "100%" }}
        />
      </Segment>
      <Segment>
        <Grid columns={1}>{excursions}</Grid>
      </Segment>
    </div>
  );
};

export default CityShow;
