import {
  UncontrolledAccordion,
  AccordionHeader,
  AccordionItem,
  AccordionBody,
} from "reactstrap";

import { Component } from "react";

class AccAccordion extends Component {
  render() {
    const items = [];

    for (let rate of this.props.Rates) {
      const prices = [];
      for (let price of rate.Body.Price) {
        prices.push(<p className="AccPrice">{price}</p>);
      }

      items.push(
        <AccordionItem>
          <AccordionHeader targetId={rate.Id}>{rate.Header}</AccordionHeader>
          <AccordionBody accordionId={rate.Id}>
            <p className="d-none d-sm-block">{rate.Body.Season}</p>
            {prices}
          </AccordionBody>
        </AccordionItem>
      );
    }
    return (
      <>
        <UncontrolledAccordion defaultOpen={this.props.Rates[0].Id}>
          {items}
        </UncontrolledAccordion>
      </>
    );
  }
}

export default AccAccordion;
