import Accomodation from "../components/Accomodation";
import { Container } from "reactstrap";
import { HOUSES } from "../app/data/HOUSES";

const Houses = () => {
  const accomodations = [];
  for (const house of HOUSES) {
    accomodations.push(
      <div key={house.Id}>
        <Accomodation
          accomodationTitle={house.Title}
          accomodationInfo={house.Info}
          accomodationIncludes={house.Includes}
          accomodationCarousels={house.Carousels}
          accomodationRates={house.Rates}
        />
      </div>
    );
  }

  return <Container>{accomodations}</Container>;
};

export default Houses;
