import {
  Container,
  Row,
  Col,
  /*Carousel,
  CarouselIndicators,
  CarouselCaption,
  CarouselControl,
  CarouselItem, */
} from "reactstrap";
import { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import GazeboDock from "../app/img/gaze_dock.jpg";
import Redbud from "../app/img/redbudaward.png";
import Tripadvisor from "../app/img/tripadvispr2018.png";
import Travelocity from "../app/img/tchotel_2021_L.png";
import Stars from "../app/img/5star.png";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        className="ReviewsCarousel"
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
      >
        <div>
          <img
            src={Stars}
            className="justify-content-center align-items-center"
          />
          <p className="review">
            <br />
            Stayed in a very spacious cabin just a block from the dock and the
            lake. A full kitchen made living easy, even if it was just a short
            little visit. Two hot tubs (inside and outside), a walk in shower
            and overall semi-seclusion made this little cabin the perfect
            getaway. Overall, we were ready to move in and retire!
          </p>
          <p>
            <strong>-jusTodd</strong>
          </p>
        </div>
        <div>
          <img
            src={Stars}
            className="justify-content-center align-items-center"
          />
          <p className="review">
            Grove does have a shortage of hotels in town so these nightly
            rentable cabins are what I recommend if staying in Grove for 1 night
            to a week or longer. This resort has things to do and is on Grand
            Lake shoreline. H2O watersports is onsite and one of just 2 Jet-Ski
            rental outfitters in Grove. They also rent boats and tubes. Get a
            massage while you’re there from the on-site masseuse.
          </p>
          <p>
            <strong>-Mike Huggins</strong>
          </p>
        </div>
        <div>
          <img
            src={Stars}
            className="justify-content-center align-items-center"
          />
          <p className="review">
            The customer service is over the top! Our townhome was beautiful,
            clean and perfect for our trip. Resort staff is on top of
            everything, from smallest need to the largest. My wife, sister-n-law
            &amp; I felt at home as soon as we got there. This is truly a 5 Star
            Resort, our only problem is we haven't booked our next visit!!! We
            were blessed to have stayed there!!!!!!
          </p>
          <p>
            <strong>-James Thomas</strong>
          </p>
        </div>
        <div>
          <img
            src={Stars}
            className="justify-content-center align-items-center"
          />
          <p className="review">
            House #3 was great for our party of 10, it had everything you could
            ask for. The whole resort is beautiful, well kept but laid back, the
            staff friendly and very accommodating. Loved the lake access and
            boat rental availability. The only thing I didn't like was having to
            go home on Sunday we had such a fantastic weekend we will definitely
            be back.
          </p>
          <p>
            <strong>-Pat Preston</strong>
          </p>
        </div>
        <div>
          <img
            src={Stars}
            className="justify-content-center align-items-center"
          />
          <p className="review">
            I don't think there are enough descriptive words to say how awesome
            Candlewyck Cove is! The staff are all so nice and the grounds are
            kept immaculate!! When you first drive thru the entrance it's so
            peaceful, it's like all your cares and stress just melt away. It was
            our first, but definitely not last, visit. I highly recommend
            Candlewyck!
          </p>
          <p>
            <strong>-LoriAnn Shisk</strong>
          </p>
        </div>
      </Carousel>
    );
  }
}

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <img
          className="img-fluid w-100"
          src={GazeboDock}
          id="gaze_dock"
          alt="view from the gazebo"
        />
      </Row>
      <h5 className="intro center_text">
        Whether you’re just looking for a little quiet time away to spend with
        that special someone or you wish to develop lasting memories with your
        family, you will enjoy your stay at Candlewyck Cove Resort. You will
        find our seven acre private resort nestled among the trees and hidden on
        one of the distinguished deep water coves of Grand Lake.
      </h5>
      <h4 className="intro center_text">
        Candlewyck Cove Resort is a locally owned lakefront resort and is the
        recipient of the following tourism awards:
      </h4>
      <p className="intro center_text">
        The RedBud Award: Oklahoma Travel Industry’s top award for Outstanding
        Resort and Lodging Property for 2019
        <br />
        The Merit Award: Oklahoma Governor’s Conference on Tourism Award for
        Outstanding Resort and Lodging Property
        <br />
        Traveler’s Choice Award: Trip Advisor’s award given to the top 25 Hotels
        in the USA.
        <br />
        Certificate of Excellence Award: Trip Advisor’s award for 5 star ranking
      </p>
      <Row>
        <Col className="center_text">
          <img
            className="img-fluid mx"
            src={Tripadvisor}
            alt="tripadvisor award"
          />
          <img
            className="img-fluid"
            src={Travelocity}
            alt="travelocity award"
          />
          <img className="img-fluid" src={Redbud} alt="redbud award" />
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <p className="intro center_text">
            Candlewyck Cove Resort would like to express to all of our customers
            the deepest “Thank You” for their recognition and reviews that have
            lead to these very prestigious awards. And more importantly for
            allowing us the opportunity to be of service.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="5" className="mx-auto">
          <DemoCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
