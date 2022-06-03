import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../utils/validateContactForm";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        feedback: "",
      }}
      onSubmit={handleSubmit}
      validate={validateContactForm}
    >
      <Form>
        <h3 className="center_text">Contact Us</h3>
        <FormGroup row>
          <Label htmlFor="firstName" md="2">
            First Name
          </Label>
          <Col md="8">
            <Field
              name="firstName"
              placeholder="First Name"
              className="form-control"
            />
            <ErrorMessage name="firstName">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="lastName" md="2">
            Last Name
          </Label>
          <Col md="8">
            <Field
              name="lastName"
              placeholder="Last Name"
              className="form-control"
            />
            <ErrorMessage name="lastName">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="phoneNum" md="2">
            Phone Number
          </Label>
          <Col md="8">
            <Field
              name="phoneNum"
              placeHolder="Phone Number"
              className="form-control"
            />
            <ErrorMessage name="phoneNum">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="email" md="2">
            Email
          </Label>
          <Col md="8">
            <Field name="email" placeholder="Email" className="form-control" />
            <ErrorMessage name="email">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="feedback" md="2">
            Your Feedback
          </Label>
          <Col md="8">
            <Field
              name="feedback"
              as="textarea"
              rows="12"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col className="mx-auto" md="8">
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ContactForm;
