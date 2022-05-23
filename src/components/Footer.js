import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col md="3" className="text-center">
            <a role="button" className="btn btn-link" href="tel:+19187863636">
              <i className="fa fa-phone" /> 1.918.786.3636
            </a>
            <br />
            <a
              role="button"
              className="btn btn-md btn-primary"
              href="/ContactForm"
            >
              <i className="primary" /> Contact Us
            </a>
          </Col>
          <Col md="3" className="text-center">
            <h6>Candlewyck Cove Resort</h6>
            <address>
              59800 East 307 Lane
              <br />
              Grove, Ok 74344
            </address>
          </Col>
          <Col xs="6" sm="3" className="text-center">
            <a
              className="btn btn-social-icon btn-facebook"
              href="https://www.facebook.com/candlewyckcove2017/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="https://twitter.com/CandlewyckCoveR"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-linkedin"
              href="https://www.linkedin.com/company/candlewyck-cove-resort-on-grand-lake/about/"
            >
              <i className="fa fa-linkedin" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default footer;
