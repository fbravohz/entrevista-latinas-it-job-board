"use client";

import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { ToggleButtonComponent } from "../buttons/ToggleButtonComponent";
import { InputComponent } from "../inputs/InputComponent";

const Board = () => {
  const [formValues, setFormValues] = useState({});
  console.log(formValues);
  return (
    <Row>
      <Col md={1} />
      <Col md={10}>
        <Form>
          <Row className="mb-4">
            <strong className="fs-5">Search by filters</strong>
            <Col md={3}>
              <InputComponent
                placeholder="Functional Area"
                name="functionalArea"
                formValues={formValues}
                setFormValues={setFormValues}
              />
            </Col>
            <Col md={2}>
              <InputComponent
                placeholder="Seniority"
                name="seniority"
                formValues={formValues}
                setFormValues={setFormValues}
              />
            </Col>
            <Col md={2}>
              <InputComponent
                placeholder="Perks"
                name="perks"
                formValues={formValues}
                setFormValues={setFormValues}
              />
            </Col>
            <Col md={2}>
              <InputComponent
                placeholder="Location"
                name="location"
                formValues={formValues}
                setFormValues={setFormValues}
              />
            </Col>
          </Row>
          <hr />
          <Row className="my-4">
            <strong className="fs-5">Search by keywords</strong>
            <Col md={7}>
              <InputComponent
                placeholder="Keywords"
                name="keywords"
                formValues={formValues}
                setFormValues={setFormValues}
              />
            </Col>
            <Col
              md={5}
              className="d-flex justify-content-around align-items-center"
            >
              <span>Order by:</span>
              {/* <ToggleButtonComponent
                name="recent"
                label="Recent"
                formValues={formValues}
                setFormValues={setFormValues}
              />
              <ToggleButtonComponent
                name="company"
                label="Company A-Z"
                formValues={formValues}
                setFormValues={setFormValues}
              /> */}
            </Col>
          </Row>
        </Form>
        <img style={{ width: "4rem" }} src="logo.svg" alt="My Happy SVG" />
      </Col>
    </Row>
  );
};

export default Board;
