import Accomodation from "../components/Accomodation";
import { Container } from "reactstrap";
import { KINGSUITES } from "../app/data/KINGSUITES";

const KingSuites = () => {
  const accomodations = [];
  for (const kingsuites of KINGSUITES) {
    accomodations.push(
      <div key={kingsuites.Id}>
        <Accomodation
          accomodationTitle={kingsuites.Title}
          accomodationInfo={kingsuites.Info}
          accomodationIncludes={kingsuites.Includes}
          accomodationCarousels={kingsuites.Carousels}
          accomodationRates={kingsuites.Rates}
        />
      </div>
    );
  }

  return <Container>{accomodations}</Container>;
};

export default KingSuites;