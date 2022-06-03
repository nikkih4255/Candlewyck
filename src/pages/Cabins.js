import Accomodation from "../components/Accomodation";
import { Container } from "reactstrap";
import { CABINS } from "../app/data/CABINS";

const Cabins = () => {
  const accomodations = [];
  for (const cabin of CABINS) {
    accomodations.push(
      <div key={cabin.Id}>
        <Accomodation
          accomodationTitle={cabin.Title}
          accomodationInfo={cabin.Info}
          accomodationIncludes={cabin.Includes}
          accomodationCarousels={cabin.Carousels}
          accomodationRates={cabin.Rates}
        />
      </div>
    );
  }

  return <Container>{accomodations}</Container>;
};

export default Cabins;
