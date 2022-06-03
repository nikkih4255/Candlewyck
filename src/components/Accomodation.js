import AccCarousel from "./AccCarousel";
import AccAccordion from "./AccAccordion";
import { Component } from "react";
import { Row, Col } from "reactstrap";

class Accomodation extends Component {
  render() {
    //build out the list of included features
    const includes = [];
    for (let i = 0; i < this.props.accomodationIncludes.length; i++) {
      includes.push(<li key={i}>{this.props.accomodationIncludes[i]}</li>);
    }

    //build out the list of carousels
    const carousels = [];
    let carouselCols = [];

    for (let i = 0; i < this.props.accomodationCarousels.length; i++) {
      let carousel = this.props.accomodationCarousels[i];

      carouselCols.push(
        <Col md="5" className="mx-auto">
          <AccCarousel
            carouselTitle={carousel.Title}
            carouselImages={carousel.Images}
          />
        </Col>
      );

      if (
        i + 1 === this.props.accomodationCarousels.length ||
        (i + 1) % 2 === 0
      ) {
        carousels.push(
          <Row key={"carousel" + carousel.Id}>{carouselCols}</Row>
        );
        carouselCols = [];
      }
    }

    return (
      <div className="AccomDiv">
        <Row className="AccTopRow">
          <Col md="4">
            <h5>{this.props.accomodationTitle}</h5>
            <p>{this.props.accomodationInfo}</p>
          </Col>
          <Col md="4">
            <h5>Includes:</h5>
            <ul>{includes}</ul>
          </Col>
          <Col md="4">
            <h5>Rates:</h5>
            <AccAccordion Rates={this.props.accomodationRates} />
          </Col>
        </Row>
        {carousels}
      </div>
    );
  }
}

export default Accomodation;
