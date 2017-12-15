import React from "react";
import { Card, Image, Grid } from "semantic-ui-react";

class CityIndexItem extends React.Component {
  render() {
    console.log("city index item props", this.props.city);
    return (
      <Card>
        <Card.Content>
          <Image src={this.props.city.image_url} size="mini" />
          <Card.Header>{this.props.city.name}</Card.Header>
        </Card.Content>
      </Card>
    );
  }
}

export default CityIndexItem;
