import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Component } from "react";

class AccCarousel extends Component {
  render() {
    const slides = [];
    for (let i = 0; i < this.props.carouselImages.length; i++) {
      slides.push(
        <div className="AccCarouselImgDiv" key={"carouselImg" + i}>
          <img src={"/img" + this.props.carouselImages[i]} alt="carousel" />
        </div>
      );
    }
    return (
      <>
        <h5 className="center_text">{this.props.carouselTitle}</h5>
        <Carousel
          className="AccommodationsCarousel"
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={false}
          showStatus={false}
        >
          {slides}
        </Carousel>
      </>
    );
  }
}

export default AccCarousel;
