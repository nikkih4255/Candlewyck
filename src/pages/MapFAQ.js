import {
  Container,
  Col,
  Row,
  UncontrolledAccordion,
  AccordionHeader,
  AccordionBody,
  AccordionItem,
} from "reactstrap";
import ResortMap from "../app/img/cw_map-scaled.jpg";

const MapFAQ = () => {
  return (
    <Container>
      <Row>
        <Col className="col-md-6">
          <img src={ResortMap} alt="resort map" />
        </Col>
        <Col className="col-md-5">
          <h5>Frequently Asked Questions</h5>
          <UncontrolledAccordion defaultOpen="1">
            <AccordionItem>
              <AccordionHeader targetId="1">
                What is your after hours check-in policy?
              </AccordionHeader>
              <AccordionBody accordionId="1">
                For after hours check-in, a packet will be left in the mailbox
                outside the office for you with your name on it. It contains all
                the information you need to find and get into your unit.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                What if I have something comes up after the office closes and I
                need to get ahold of management?
              </AccordionHeader>
              <AccordionBody accordionId="2">
                If an emergency after office hours occurs check your check-in
                packet for the after-hours emergency number and our manager will
                assist you right away.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Do you sell ice?</AccordionHeader>
              <AccordionBody accordionId="3">
                Ice is available for purchase at the store in the office.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                After I rent a boat where can I fill up with gas on the lake?
              </AccordionHeader>
              <AccordionBody accordionId="4">
                The closest places with gas docks are Shangri-La Marina and
                Honey Creek Landing. The office staff can help you figure out
                where to go.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="5">
                What kind of cable do you have?
              </AccordionHeader>
              <AccordionBody accordionId="5">
                All units have direcTV.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="6">
                Is fishing allowed from your docks?
              </AccordionHeader>
              <AccordionBody accordionId="6">
                Yes! Fishing is allowed at our docks, but please be respectful
                of boats in the dock.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="7">Is there wifi?</AccordionHeader>
              <AccordionBody accordionId="7">
                Yes all units have wifi. Passwords are in the information you
                recieve at check-in.
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </Col>
      </Row>
    </Container>
  );
};

export default MapFAQ;
