import React from "react";
import { connect } from "react-redux";
import { Segment, Grid, Image, Header } from "semantic-ui-react";
import ExcursionListItem from "./ExcursionListItem";

const Profile = props => {
  return props.isLoaded ? (
    <Segment>
      <Grid columns={2}>
        <Grid.Row stretched>
          <Grid.Column align="center">
            <Image src={props.user.avatar} size="medium" circular />
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header as="h1" align="center">
                {props.user.name}
              </Header>
            </Segment>
            <Segment>
              <Header as="h3">{props.user.bio}</Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row />
        <Grid.Row />
        <Grid.Row>
          <Grid.Column align="center">
            <Header as="h3">Excursions you are hosting</Header>
          </Grid.Column>
          <Grid.Column align="center">
            <Header as="h3">Excursions you are attending</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column align="center">
            {props.user.hosted_excursions.map(hosted => (
              <ExcursionListItem key={hosted.created_at} excursion={hosted} />
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  ) : null;
};

const mapStateToProps = state => {
  return { user: state.currentUser, isLoaded: state.currentUser.name };
};

export default connect(mapStateToProps)(Profile);
