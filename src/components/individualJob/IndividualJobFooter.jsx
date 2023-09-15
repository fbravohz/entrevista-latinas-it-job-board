import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const IndividualJobFooter = () => {
  return (
    <>
      <Row style={{ backgroundColor: "#555555" }} className="p-4">
        <Col md={1} />
        <Col md={2} className="d-flex flex-column">
          <div className="fs-6 text-white">
            <strong>Latinas in Tech</strong>
          </div>
          <Link href={"#"} className="fs-6 pink-job-title">
            About us
          </Link>
          <Link href={"#"} className="fs-6 pink-job-title">
            Careers
          </Link>
          <Link href={"#"} className="fs-6 pink-job-title">
            Press
          </Link>
          <Link href={"#"} className="fs-6 pink-job-title">
            LiT Chapters
          </Link>
        </Col>
        <Col md={2} className="d-flex flex-column">
          <div className="fs-6 text-white">
            <strong>Contact</strong>
          </div>
          <Link href={"#"} className="fs-6 pink-job-title">
            Partners
          </Link>
          <Link href={"#"} className="fs-6 pink-job-title">
            Technical issues
          </Link>
          <Link href={"#"} className="fs-6 pink-job-title">
            General
          </Link>
          <Link href={"#"} className="fs-6 pink-job-title">
            FaQ
          </Link>
        </Col>
        <Col md={2} className="d-flex flex-column">
          <div className="fs-6 text-white">
            <strong>Get involved</strong>
          </div>
          <Link href={"#"} className="fs-6 pink-job-title">
            Register as a Latina Member
          </Link>
          <Link href={"#"} className="fs-6 pink-job-title">
            Become an Ally
          </Link>
          <Link href={"#"} className="fs-6 pink-job-title">
            Become a Partner
          </Link>
          <Link href={"#"} className="fs-6 pink-job-title">
            Post your Company's Job Vacants
          </Link>
        </Col>
        <Col md={2} className="d-flex flex-column">
          <div className="fs-6 text-white">
            <strong>LiT Summit</strong>
          </div>
          <Link href={"#"} className="fs-6 pink-job-title">
            2023 Lit Summit
          </Link>
          <Link href={"#"} className="fs-6 pink-job-title">
            2022 Lit Summit Recap
          </Link>
        </Col>
        <Col md={1} className="d-flex flex-column">
          <button className="button-donate">Donate</button>
        </Col>
        <Row className="mt-3 ms-5">
          <div className="fs-6 text-white text-left ms-5">
            <strong className="ms-5">
              Latinas in Tech is a 501(c)(3) non-profit organization
            </strong>
          </div>
        </Row>
      </Row>
    </>
  );
};

export default IndividualJobFooter;
