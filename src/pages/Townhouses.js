import Accomodation from "../components/Accomodation";
import { Container } from "reactstrap";
import { TOWNHOUSES } from "../app/data/TOWNHOUSES";

const Townhouses = () => {
  const accomodations = [];
  for (const townhouse of TOWNHOUSES) {
    accomodations.push(
      <div key={townhouse.Id}>
        <Accomodation
          accomodationTitle={townhouse.Title}
          accomodationInfo={townhouse.Info}
          accomodationIncludes={townhouse.Includes}
          accomodationCarousels={townhouse.Carousels}
          accomodationRates={townhouse.Rates}
        />
      </div>
    );
  }

  return <Container>{accomodations}</Container>;
};

export default Townhouses;
