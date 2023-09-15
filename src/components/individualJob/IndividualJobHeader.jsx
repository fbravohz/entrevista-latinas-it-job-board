import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const IndividualJobHeader = () => {
  const title =
    "Title of the job it can be quite long lorem ipsum dolor sit amet";
  const tags = [1, 2, 3, 4, 5, 6];
  const company = "Company name";
  const companyTagline = "Company tagline";
  const typeWork = "Type of work";
  const location = "location";
  const level = "level";
  const postedTime = "Posted x hours/days ago";
  return (
    <Row>
      <Col sm={1} />
      <Col xs={12} sm={12} md={10} className="mx-3">
        <Row className="mb-5">
          <Col xs={12} className="mb-2">
            <Link href={"/"}>{"< Back to Job Board"}</Link>
          </Col>
          <Col xs={12} sm={8} md={6}>
            <h2 className="fs-2 fs-xs-3">
              <strong>{title}</strong>
            </h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between-md">
          <Col xs={12} sm={6} className="d-flex justify-content-start mb-2">
            <Image
              width={60}
              height={60}
              src="/images/Rectangle 29.svg"
              alt="LiT-logo-positive"
            />
            <div className="ms-4">
              <h3 className="fs-3 pink-job-title">
                <strong>{company}</strong>
              </h3>
              <h5 className="fs-5">
                <strong>{companyTagline}</strong>
              </h5>
            </div>
          </Col>
          <Col xs={12} sm={6} className="d-flex justify-content-center">
            {tags.map((value, index) => (
              <Col xs={2} className="mt-md-2">
                <Image
                  key={index}
                  style={{ minWidth: "40px" }}
                  width={58}
                  height={58}
                  src={`/images/tags-${value}.svg`}
                  alt={`tags-${value}`}
                />
              </Col>
            ))}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col
            xs={12}
            sm={12}
            md={12}
            className="d-flex justify-content-start  fs-xs-6"
          >
            <div className="d-flex align-items-center">
              <Image
                className="mb-1"
                width={15}
                height={15}
                src="/images/Clock.svg"
                alt="LiT-logo-positive"
              />
              <span className="ms-1">{typeWork}</span>
            </div>
            <div className="d-flex align-items-center ms-3">
              <Image
                className="mb-1"
                width={15}
                height={15}
                src="/images/Location.svg"
                alt="LiT-logo-positive"
              />
              <span className="ms-1">{location}</span>
            </div>
            <div className="d-flex align-items-center ms-3">
              <Image
                className="mb-1"
                width={15}
                height={15}
                src="/images/Flower.svg"
                alt="LiT-logo-positive"
              />
              <span className="ms-1">{level}</span>
            </div>
            <div className="d-flex align-items-center ms-3">
              <Image
                className="mb-1"
                width={15}
                height={15}
                src="/images/Calendar.svg"
                alt="LiT-logo-positive"
              />
              <span className="ms-1">{postedTime}</span>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12}>
            <button className="apply-button">Apply</button>
          </Col>
        </Row>
      </Col>
      <Col sm={1} />
    </Row>
  );
};

export default IndividualJobHeader;
