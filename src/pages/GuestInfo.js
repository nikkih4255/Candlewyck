import { Container, Col, Row } from "reactstrap";
import PoolImg2 from "../app/img/pool.jpg";

const GuestInfo = () => {
  return (
    <Container>
      <Row>
        <Col className="col-md-8">
          <h3 className="center_text">Guest Info</h3>
          <ul className="guest_info_list">
            <li>
              Our swimming pool is open Memorial Day to Labor Day each season.
              Outside of these published holidays, please check with the
              Candlewyck office to determine possible availability.
            </li>
            <li>Check-in time is 3:00 p.m., Check-out time is 11:00 a.m.</li>
            <li>
              Each room, Cabin, or home has a maximum occupancy. Please ask for
              more information when making your reservation, or see the rates
              page.
            </li>
            <li>
              Deluxe Hotels, King Suites, and Lake Front Honeymoon Cabin have a
              mini fridge, microwave, and coffee maker and many other amenities.
            </li>
            <li>All Luxury Homes, Townhouses and Cabins have full kitchens.</li>
            <li>
              We accept Visa, Mastercard, American Express, or Discover for
              deposits and reservations, please ask for requirements. A credit
              card is required to be placed on file with cash or check payments.
              If a credit card is not available, the entire rental amount is due
              when the reservation is made plus a deposit equal to a one night
              stay.
            </li>
            <li>
              Reservations by cash or personal check are held for five days
              pending receipt of an advance payment equal to a one night stay.
              We still require a credit card be placed on file. If you do not
              have one, we require the full rental amount in advance plus a
              deposit equal to a one night stay.
            </li>
            <li>
              {" "}
              All rooms in the Resort are NONSMOKING (smoking is permitted on
              the porches, patios, and the grounds). Any indication of smoking
              in the rooms could result in a $100 cleaning fee.
            </li>
            <li>There are no refunds for early departures.</li>
            <li>
              Dogs under 25 pounds are allowed with prior approval and
              instructions from the Resort. A fee of $25 per pet(max 2) per day
              will be charged.
            </li>
            <li>
              {" "}
              Gift Certificates are available and are a wonderful and unique
              gift.
            </li>
            <li>
              Complimentary continental breakfast buffet. Available: Memorial
              Day to Labor Day each season. Saturday’s and Sunday’s only 8:00am
              to 10:00 am.
            </li>
            <li>
              <h3>Office hours:</h3>
              <p>
                March through September <br />
                Sunday - Thursday: 8am - 5pm
                <br />
                Friday - Saturday: 8am - 8pm <br />
                October through February
                <br />
                Wednesday - Sunday: 9am - 4pm <br />
                Closed Monday and Tuesday
              </p>
            </li>
          </ul>
        </Col>
        <Col className="col-md-4">
          <img
            className="d-flex mr-3 img-thumbnail"
            src={PoolImg2}
            alt="Pool 2 Thumbnail"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default GuestInfo;
