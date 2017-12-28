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
      return <Image key={index} src={photo.image} />;
    });

    let dots = this.props.photos.map((photo, index) => {
      return (
        <Icon
          key={index + 40}
          name="circle"
          inverted
          color="grey"
          disabled={index !== this.state.currentSlide}
          style={{ display: "inline-block" }}
          onClick={() => this.setState({ currentSlide: index })}
        />
      );
    });

    return (
      <Segment>
        <div
          style={{
            position: "absolute",
            left: "50%",
            right: "50%",
            bottom: "5%",
            textAlign: "center",
            zIndex: "999"
          }}
        >
          {dots}
        </div>
        <Icon
          name="chevron left"
          onClick={this.prevSlide}
          style={{
            position: "absolute",
            left: "0%",
            bottom: "50%",
            top: "50%"
          }}
        />
        {images.find(img => parseInt(img.key) === this.state.currentSlide)}
        <Icon
          name="chevron right"
          onClick={this.nextSlide}
          style={{
            position: "absolute",
            right: "0%",
            bottom: "50%",
            top: "50%"
          }}
        />
      </Segment>
    );
  }
}

export default PhotoCarousel;
