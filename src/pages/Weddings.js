import { Col, Row, Container } from "reactstrap";
import WedGazebo from "../app/img/wedd_gazebo_.jpg";
import WedImg from "../app/img/cw_wedjpg.jpg";

const Weddings = () => {
  return (
    <Container>
      <Row className="row-content">
        <Col className="col-md-8">
          <h1>Weddings at Candlewyck Cove</h1>
          <h2>Prices for Peak Season (March 14 - October 1)</h2>
          <h4>
            Tours are by appointment only, please call ahead (918) 786-3636.{" "}
          </h4>
          <h3>Wedding Gazebo and Reception Hall</h3>
          <p>
            Wedding Gazebo and Reception Hall for 4 hours, with 50-chair set up.
            <br />
            Damage deposit of $200 <br />
            Usage and cleaning fee of $600 plus tax
          </p>
          <h3>Lakefront Home and Lakeside Ceremony</h3>
          <p>
            Main house (lakefront home) and 50-chair set up on the shoreline in
            front of the house for the ceremony.
            <br />
            Damage Deposit $450 <br />
            Main house per night $450 plus tax <br />
            Usage and cleaning fee $500 plus tax
          </p>
          <h3>Gazebo Only</h3>
          <p>
            Wedding Gazebo for 2 hours with a 50-chair set up.
            <br />
            Damage Deposit $100
            <br />
            Usage fee $500 plus tax
          </p>
          <h3>Reception Hall Only</h3>
          <p>
            Reception hall for 2 hours with 50-chair set up.
            <br />
            Damage Deposit $100
            <br />
            Usage and cleaning fee $300 plus tax
          </p>
          <hr />

          <h2>Prices for off-Seacon (October 1 - March 14)</h2>
          <h4>
            Tours are by appointment only, please call ahead (918) 786-3636
          </h4>
          <h3>Wedding Gazebo and Reception Hall</h3>
          <p>
            Wedding Gazebo and Reception Hall for 4 hours, with 50-chair set up.
            <br />
            Damage deposit of $200 <br />
            Usage and cleaning fee of $400 plus tax
          </p>
          <h3>Lakefront Home and Lakeside Ceremony</h3>
          <p>
            Main house (lakefront home) and 50-chair set up on the shoreline in
            front of the house for the ceremony.
            <br />
            Damage Deposit $450 <br />
            Main house per night $450 plus tax
            <br />
            Usage and cleaning fee $100 plus tax
          </p>
          <h3>Gazebo Only</h3>
          <p>
            Wedding Gazebo for 2 hours with a 50-chair set up.
            <br />
            Damage Deposit $100
            <br />
            Usage fee $250 plus tax
          </p>
          <h3>Reception Hall Only</h3>
          <p>
            Reception hall for 2 hours with 50-chair set up.
            <br />
            Damage Deposit $100
            <br />
            Usage and cleaning fee $150 plus tax
          </p>
          <h5>
            You will be required to sign a waiver accepting 100% liability for
            anything that happens on our property to you or your guest and/or to
            any of your property or theirs.
          </h5>
          <h5>The Honeymoon Cabin is 15% off when you book your wedding.</h5>
          <h5>If you rent 3 or more rooms you will get 25% off your room.</h5>
          <h4>Rooms:</h4>
          <p>
            4 Homes
            <br />
            4 Townhouses
            <br />
            5 Cabins
            <br />
            4 King Suites
            <br />8 Hotel Rooms
          </p>
          <p>
            The first night’s stay is required to reserve all cabins, king
            suites, and hotel rooms. If you cancel less than14 days prior to
            your check in date you will forfeit your deposit. <br />
            The damage deposit is required for all townhouses. If you cancel
            less than 30 days prior to your check-in date you will forfeit your
            deposit.
            <br />
            The damage deposit is required for all houses. If you cancel less
            than 60 days prior to your check-in date you will forfeit your
            deposit.
            <br />
            If you cancel after the specified time and it is a holiday you will
            be responsible for the entire rental amount.
          </p>
        </Col>
        <Col className="col-md-3 ms-auto">
          <img
            className="d-flex img-thumbnail"
            src={WedGazebo}
            alt="wed Thumbnail 1"
          />
          <img
            className="d-flex img-thumbnail"
            src={WedImg}
            alt="wed Thumbnail 2"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Weddings;
