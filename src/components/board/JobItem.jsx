"use client"

import React from "react";
import { Col, Row } from "react-bootstrap";
import { useRouter } from 'next/navigation'
import Image from "next/image";

const JobItem = ({
  id = "1",
  title = "Job role title and it can be quite long",
  companyName = "Company name",
  postedTime = "Posted x days ago",
  typeWork = "Full Time",
  location = "Remote",
  level = "Entry level",
  tags = ["latinxintech","womenintecherg", "remotefriendly", "paidparentalleave","unlimitedvacation", "lgbtqierg-2"]
}) => {
  const router = useRouter()
  
  const handleNavigate = () => {
    router.push(`/jobs/${id}`)
  }

  return (
    <Row
      className="border-bottom p-3 job-row"
      onClick={handleNavigate}
    >
      <Col xs={8} sm={8} md={4} className="d-flex">
        <Image
          width={60}
          height={60}
          src="/images/Rectangle 29.svg"
          alt="LiT-logo-positive"
        />
        <div className="ms-4 d-flex flex-column">
          <strong className="pink-job-title fs-5">{title}</strong>
          <span style={{ fontSize: "14px" }}>{companyName}</span>
          <span style={{ fontSize: "12px" }}>{postedTime}</span>
        </div>
      </Col>
      <Col xs={4} sm={4} md={3} className="d-flex flex-column fs-6">
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
        <div className="d-flex align-items-center">
          <Image
            className="mb-1"
            width={15}
            height={15}
            src="/images/Location.svg"
            alt="LiT-logo-positive"
          />
          <span className="ms-1">{location}</span>
        </div>
        <div className="d-flex align-items-center">
          <Image
            className="mb-1"
            width={15}
            height={15}
            src="/images/Flower.svg"
            alt="LiT-logo-positive"
          />
          <span className="ms-1">{level}</span>
        </div>
      </Col>
      <Col
        sm={12}
        md={5}
        className="d-flex justify-content-end-md justify-content-center align-items-center mt-sm-2 mt-md-0"
      >
        <Row className="d-flex-md justify-content-end">
          {tags.map((value, index) => (
            <Col key={index} xs={2} sm={4} md={4} lg={2} className="mt-md-2">
              <Image
                key={index}
                style={{ minWidth: "40px" }}
                width={58}
                height={58}
                src={`/images/${value}.svg`}
                alt={`${value}`}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default JobItem;
