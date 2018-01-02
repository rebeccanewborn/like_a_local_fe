import React from "react";
import { Segment, Image, Icon } from "semantic-ui-react";

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
  }
  prevSlide = ev => {
    let index =
      this.state.currentSlide >= 1
        ? this.state.currentSlide - 1
        : this.props.photos.length - 1;
    this.setState({ currentSlide: index });
  };
  nextSlide = ev => {
    let index =
      this.state.currentSlide < this.props.photos.length - 1
        ? this.state.currentSlide + 1
        : 0;
    this.setState({ currentSlide: index });
  };
  render() {
    let images = this.props.photos.map((photo, index) => {
      return <Image key={index} src={photo.image} className="carousel-img" />;
    });

    let dots = this.props.photos.map((photo, index) => {
      return (
        <Icon
          key={index}
          name="circle"
          inverted
          color="blue"
          disabled={index !== this.state.currentSlide}
          onClick={() => this.setState({ currentSlide: index })}
        />
      );
    });

    return (
      <div className="carousel">
        <div className="carousel-dots">{dots}</div>
        <Icon
          name="chevron left"
          onClick={this.prevSlide}
          className="carousel-prev-arrow"
        />
        {images.find(img => parseInt(img.key) === this.state.currentSlide)}
        <Icon
          name="chevron right"
          onClick={this.nextSlide}
          className="carousel-next-arrow"
        />
      </div>
    );
  }
}

export default PhotoCarousel;
