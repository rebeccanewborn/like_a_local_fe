import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

const CityIndexItem = props => {
  const handleClick = ev => {
    props.history.push(`/cities/${props.city.id}`);
  };
  return (
    <Card
      onClick={handleClick}
      style={{ height: "150px", width: "400px", margin: "20px" }}
    >
      <Image
        src={props.city.image_url}
        style={{ height: "100%", width: "100%" }}
      />
      <Card.Content>
        <Card.Header
          style={{
            position: "absolute",
            top: "50%",
            bottom: "50%",
            right: "5%",
            color: "white"
          }}
        >
          {props.city.name}
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

export default withRouter(CityIndexItem);
