import React from "react";
import { withRouter } from "react-router-dom";
import CitiesIndex from "./CitiesIndex";
import CityShow from "./CityShow";

const CitiesContainer = props => {
  let index = props.location.pathname.slice(8);
  return index ? <CityShow /> : <CitiesIndex />;
};

export default withRouter(CitiesContainer);
