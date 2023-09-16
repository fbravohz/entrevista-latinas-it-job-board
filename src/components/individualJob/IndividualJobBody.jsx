"use client";

import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import JobItem from "../board/JobItem";
import { useBoardRequest } from "@/hooks/useBoardRequest";
import moment from "moment";

const IndividualJobBody = ({ id, url }) => {
  const { serverResponse } = useBoardRequest({});
  const filtered = serverResponse.filter((job) => job.id != id);
  const relatedJobs = filtered.slice(0, 5);
  return (
    <Row style={{ backgroundColor: "#f4f4f4" }} className="py-5 px-3">
      <Col sm={1} />
      <Col xs={12} sm={10} className="mx-3">
        <section className="mb-3">
          <Row>
            <Col md={9} className="bg-white p-4 mb-2">
              <article>
                <h3 className="fs-3 mb-4">
                  <strong>About the job</strong>
                </h3>
                <p>
                  As the first all-in-one virtual venue for live online events,
                  Hopin brings people together in a highly interactive and
                  engaging online experience that feels just like an in-person
                  event, only without the barriers. Whether it’s a 50-person
                  meetup, or a 50,000-person conference—any type of event
                  organizer can host a Hopin. As the first all-in-one virtual
                  venue for live online events, Hopin brings people together in
                  a highly interactive and engaging online experience that feels
                  just like an in-person event, only without the barriers.
                  Whether it’s a 50-person meetup, or a 50,000-person
                  conference—any type of event organizer can host a Hopin. As
                  the first all-in-one virtual venue for live online events,
                  Hopin brings people together in a As the first all-in-one
                  virtual venue for live online events, Hopin brings people
                  together lorem ipsum dolor sit amet...
                </p>
              </article>
            </Col>
            <Col md={3}>
              <article>
                <div className="warning-frame">
                  <Image
                    width={25}
                    height={25}
                    src={`/images/Group 62.svg`}
                    alt={`Group 62`}
                  />
                  <Row>
                    <div className="fs-md-6">
                      This may be a contingent job offer. For more information
                      on Contingency Jobs, please read this article:
                      <div style={{ color: "#EA99A3" }}>
                        “Contingency Jobs: Pros and Cons. All you Need to Know
                        if They Suit Your Professional Goals.”
                      </div>
                    </div>
                  </Row>
                </div>
              </article>
            </Col>
          </Row>
        </section>
        <section className="mb-4">
          <Row className="bg-white p-4">
            <Col md={6}>
              <article>
                <h3 className="fs-3 mb-4">
                  <strong>About The Company</strong>
                </h3>
                <p className="mb-4">
                  As the first all-in-one virtual venue for live online events,
                  Hopin brings people together in a highly interactive and
                  engaging online experience that feels just like an in-person
                  event, only without the barriers. Whether it’s a 50-person
                  meetup, or a 50,000-person conference—any type of event
                  organizer can host a Hopin As the first all-in-one virtual
                  venue for live online events, Hopin brings people together in
                  a highly interactive and engaging online experience that feels
                  just like an in-person event, only without the barriers.
                  Whether it’s a 50-person meetup, or a 50,000-person
                  conference—any type of event organizer can host a Hopin.
                </p>
                <div>
                  <button type="button" className="see-company-button" onClick={() => window.open(url)}>
                    See Company Profile
                  </button>
                </div>
              </article>
            </Col>
            <Col md={6}>
              <Image
                width={700}
                height={400}
                src={`/images/Image placeholder.svg`}
                alt={`Group 62`}
              />
            </Col>
          </Row>
        </section>
        <section>
          <Row className="bg-white p-4 mb-5">
            <h3 className="fs-3">
              <strong>Similar Jobs</strong>
              {relatedJobs?.map((object, index) => (
                <JobItem
                  key={index}
                  id={object.id}
                  title={object.jobTitle}
                  companyName={object.companyName}
                  postedTime={`Posted ${moment(
                    object.datePublished,
                    "YYYYMMDD"
                  ).fromNow()}`}
                  typeWork={object.jobType}
                  level={object.seniority}
                  tags={String(object.perks)
                    .split(";")
                    .map((perk) => perk.trim())}
                  location={String(object.locationFull).split(";")[0]}
                />
              ))}
            </h3>
          </Row>
        </section>
      </Col>
      <Col sm={1} />
    </Row>
  );
};

export default IndividualJobBody;
