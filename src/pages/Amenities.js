import { Col, Row, Container } from "reactstrap";
import PoolImg from "../app/img/pool2.jpg";
import BfastImg from "../app/img/bfast.jpg";
import DockImg from "../app/img/full_dock.jpg";

const Amenities = () => {
  return (
    <Container>
      <h3 className="center_text">Resort Amenities</h3>
      <Row className="row-content">
        <Col sm="4">
          <img
            className="d-flex mr-3 img-thumbnail"
            src={PoolImg}
            alt="Pool Thumbnail"
          />
          <img
            className="d-flex mr-3 img-thumbnail"
            src={BfastImg}
            alt="Breakfast Thumbnail"
          />
          <img
            className="d-flex mr-3 img-thumbnail"
            src={DockImg}
            alt="Dock Thumbnail"
          />
        </Col>
        <Col sm="8">
          <ul className="amenities_list">
            <li>Complimentary boat slips available for guests.</li>
            <li>
              Fishing Friendly! We have 3 docks to fish from. Please be
              respectful of boats in the dock.
            </li>
            <li>Lifejackets available on the docks.</li>
            <li>
              Volleyball, basketball, cornhole, tetherball, yard darts, giant
              connect 4, and horseshoes available at the playground.
            </li>
            <li>
              Small store located on-site selling snacks, lake apparel,
              sunscreen, ice, and much more.
            </li>
            <li>
              Continental breakfast served on Saturday and Sunday from Memorial
              Day to Labor Day (8am - 10am)
            </li>
            <li>
              Private hot tubs available in some units. Check our accommodations
              page for more information.
            </li>
            <li>Swimming pool open from Memorial Day to Labor Day.</li>
            <li>DirecTV in each unit.</li>
            <li>Gas grills available at or near each unit.</li>
            <li>Our lakeside gazebo is perfect for relaxing.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Amenities;
