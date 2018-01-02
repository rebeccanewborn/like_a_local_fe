import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "semantic-ui-react";

const SlickCarousel = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const photos = props.photos.map(photo => (
    <img key={photo.image} src={photo.image} alt={""} />
  ));

  return <Slider {...settings}>{photos}</Slider>;
};

export default SlickCarousel;
