import React from "react";
import { Modal, Card, Rating } from "semantic-ui-react";

const ReviewCard = props => {
  console.log("review card", props);
  return (
    <Card>
      <Card.Header>{props.review.user_name}</Card.Header>
      <Card.Meta>{props.review.posted}</Card.Meta>
      <Card.Description>
        <Rating maxRating={5} rating={props.review.excursion_rating} disabled />
        <br />
        {props.review.excursion_review
          .split(" ")
          .slice(0, 13)
          .join(" ")
          .concat("...")}
      </Card.Description>
    </Card>
  );
};

export default ReviewCard;
