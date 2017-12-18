import React from "react";
import { Segment, Image } from "semantic-ui-react";

const CityShow = props => {
  let excursions;
  if (props.city.excursions) {
    excursions = props.city.excursions.map(excur => (
      <li key={excur.created_at}>{excur.title}</li>
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
      <ul>{excursions}</ul>
    </div>
  );
};

export default CityShow;
