import Accomodation from "../components/Accomodation";
import { Container } from "reactstrap";
import { HOTEL } from "../app/data/HOTEL";

const Hotel = () => {
  const accomodations = [];
  for (const hotel of HOTEL) {
    accomodations.push(
      <div key={hotel.Id}>
        <Accomodation
          accomodationTitle={hotel.Title}
          accomodationInfo={hotel.Info}
          accomodationIncludes={hotel.Includes}
          accomodationCarousels={hotel.Carousels}
          accomodationRates={hotel.Rates}
        />
      </div>
    );
  }

  return <Container>{accomodations}</Container>;
};

export default Hotel;
