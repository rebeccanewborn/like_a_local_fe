import React from "react";
import { connect } from "react-redux";
import { Segment, Image } from "semantic-ui-react";

const CityShow = props => {
  console.log("city show props", props);
  let excursions = props.city.excursions.map(excur => excur.title);

  return (
    <div>
      <Segment
        attached="top"
        style={{
          height: "200px"
        }}
      >
        <Image
          src={props.city.image_url}
          style={{ width: "100%", height: "100%" }}
        />
      </Segment>
      <ul>{excursions}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { city: state.currentCity };
};

export default connect(mapStateToProps)(CityShow);
