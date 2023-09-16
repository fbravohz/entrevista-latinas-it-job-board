"use client";

import { useBoardRequest } from "@/hooks/useBoardRequest";
import moment from "moment";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { ToggleButtonComponent } from "../buttons/ToggleButtonComponent";
import { InputComponent } from "../inputs/InputComponent";
import JobItem from "./JobItem";

const Board = () => {
  const [formValues, setFormValues] = useState({});
  const { serverResponse } = useBoardRequest({ formValues });

  return (
    <Row>
      <Col md={1} />
      <Col md={10} className="board-container">
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
                name="locationFull"
                formValues={formValues}
                setFormValues={setFormValues}
              />
            </Col>
          </Row>
          <hr />
          <Row className="my-4">
            <strong className="fs-5">Search by keywords</strong>
            <Col sm={6} md={7} lg={8}>
              <InputComponent
                placeholder="Keywords"
                name="keywords"
                formValues={formValues}
                setFormValues={setFormValues}
              />
            </Col>
            <Col
              sm={6}
              md={5}
              lg={4}
              className="d-flex justify-content-around align-items-center"
            >
              <span>Order by:</span>
              <ToggleButtonComponent
                name="recent"
                label="Recent"
                formValues={formValues}
                setFormValues={setFormValues}
              />
              <ToggleButtonComponent
                name="companyName"
                label="Company A-Z"
                formValues={formValues}
                setFormValues={setFormValues}
              />
            </Col>
          </Row>
        </Form>
        {serverResponse &&
          serverResponse?.map((object, index) => (
            <JobItem
              key={index}
              id={object.id}
              title={object.jobTitle}
              companyName={object.companyName}
              postedTime={`Posted ${moment(object.datePublished, "YYYYMMDD").fromNow()}`}
              typeWork={object.jobType}
              level={object.seniority}
              tags={String(object.perks).split(';').map(perk => perk.trim())}
              location={String(object.locationFull).split(';')[0]}
            />
          ))}
      </Col>
    </Row>
  );
};

export default Board;
