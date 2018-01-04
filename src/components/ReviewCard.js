import React from "react";
import { Card, Rating, Modal, Header } from "semantic-ui-react";

const ReviewCard = props => {
  console.log("review card", props);
  return (
    <Modal
      trigger={
        <Card>
          <Card.Header>{props.review.user_name}</Card.Header>
          <Card.Meta>{props.review.posted}</Card.Meta>
          <Card.Description>
            <Rating
              maxRating={5}
              rating={props.review.excursion_rating}
              disabled
            />
            <br />
            {props.review.excursion_review
              .split(" ")
              .slice(0, 13)
              .join(" ")
              .concat("... Click to See More")}
          </Card.Description>
        </Card>
      }
    >
      <Modal.Content>
        <Header as="h2">{props.review.user_name}</Header>
        <Header as="h5">{props.review.posted}</Header>
        <Rating maxRating={5} rating={props.review.excursion_rating} disabled />
        <br />
        {props.review.excursion_review}
        <br />
        <br />
        <Rating maxRating={5} rating={props.review.host_rating} disabled />
        <br />
        {props.review.host_review}
      </Modal.Content>
    </Modal>
  );
};

export default ReviewCard;
