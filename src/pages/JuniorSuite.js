import Accomodation from "../components/Accomodation";
import { Container } from "reactstrap";
import { JUNIORSUITE } from "../app/data/JUNIORSUITE";

const JuniorSuite = () => {
  const accomodations = [];
  for (const juniorsuite of JUNIORSUITE) {
    accomodations.push(
      <div key={juniorsuite.Id}>
        <Accomodation
          accomodationTitle={juniorsuite.Title}
          accomodationInfo={juniorsuite.Info}
          accomodationIncludes={juniorsuite.Includes}
          accomodationCarousels={juniorsuite.Carousels}
          accomodationRates={juniorsuite.Rates}
        />
      </div>
    );
  }

  return <Container>{accomodations}</Container>;
};

export default JuniorSuite;
