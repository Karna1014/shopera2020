import React, { useState } from "react";
import CartCollapse from "./cartCollapse";
import { Form, Row, Col, FormGroup, Label, 
  Input,
  FormFeedback,
  FormText,
  Button,
} from "reactstrap";

// export default function ShippingForm() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

const ShippingForm = (props) => {
  return (
    <div className="container">
      <CartCollapse />
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="First Name"></Label>
<<<<<<< HEAD
            <Input invalid placeholder="First Name"/>
=======
            <Input placeholder="First Name" required/>
>>>>>>> 81906e0156edbcced3524120486101f849d47417
            <FormFeedback invalid >Please Enter First Name</FormFeedback>
            <FormText></FormText>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="Last Name"></Label>
<<<<<<< HEAD
            <Input invalid placeholder="Last Name"/>
=======
            <Input placeholder="Last Name" required/>
>>>>>>> 81906e0156edbcced3524120486101f849d47417
            <FormFeedback invalid>Please Enter Last Name</FormFeedback>
            <FormText></FormText>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={8}>
          <FormGroup>
            <Label for="Street Address"></Label>
<<<<<<< HEAD
            <Input invalid placeholder="Street Address"/>
=======
            <Input placeholder="Street Address" required/>
>>>>>>> 81906e0156edbcced3524120486101f849d47417
            <FormFeedback invalid>
              Please Enter Street Address with Apt # if applicable
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="Apt Number"></Label>
            <Input type="number" name="apt#" placeholder="Apt Number"/>
            <FormFeedback></FormFeedback>
            <FormText>If no apt, leave blank.</FormText>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="City"></Label>
<<<<<<< HEAD
            <Input valid placeholder="City" />
=======
            <Input placeholder="City" required/>
>>>>>>> 81906e0156edbcced3524120486101f849d47417
            <FormFeedback invalid>Please Enter City of Delivery</FormFeedback>
            <FormText></FormText>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="State"></Label>
<<<<<<< HEAD
            <Input type="select" name="select" id="stateAbbrev" placeholder="Select State">
=======
            <Input type="select" name="select" id="stateAbbrev" placeholder="Select State" required>
>>>>>>> 81906e0156edbcced3524120486101f849d47417
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Input>
            <FormFeedback tooltip>Please Enter State of Delivery</FormFeedback>
            <FormText></FormText>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="ZipCode"></Label>
<<<<<<< HEAD
            <Input valid placeholder="Zip Code"/>
=======
            <Input placeholder="Zip Code"required/>
>>>>>>> 81906e0156edbcced3524120486101f849d47417
            <FormFeedback invalid tooltip>
              Please Enter a Valid Zip Code for Delivery
            </FormFeedback>
            <FormText></FormText>
          </FormGroup>
        </Col>
      </Row>
      <Button size="lg" id="atcSubmit">Submit</Button>
    </Form>
    </div>
  );
};

<<<<<<< HEAD
export default ShippingForm;
=======
export default ShippingForm;


>>>>>>> 81906e0156edbcced3524120486101f849d47417
