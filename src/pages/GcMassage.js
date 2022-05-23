import {
  Col,
  Row,
  Container,
  CardHeader,
  Card,
  CardImg,
  CardBody,
  CardText,
} from "reactstrap";
import MassageFly from "../app/img/massage.jpg";
import GolfCart from "../app/img/golf_2.jpg";

const GcMassage = () => {
  return (
    <Container>
      <Row>
        <Col className="col-md-4 mx-auto">
          <Card>
            <CardHeader>
              <h3>Golf Cart Rentals</h3>
            </CardHeader>
            <CardBody>
              <CardImg src={GolfCart} alt="golf cart" />
              <CardText>
                Golf cart rental is $50 per 24 hours for the 2 seaters and $75
                per 24 hours for the 4 seaters. <br /> Must be 18 to rent and 16
                to drive. <br /> Will need to sign a waiver and are responsible
                for damages.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-md-6 mx-auto">
          <img
            className="img-fluid w-100"
            src={MassageFly}
            alt="massage flyer"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default GcMassage;
