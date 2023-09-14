"use client";

import React from "react";
import { Col, Row } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Row id="nav-menu-latina-member">
        <Col xs={4} />
        <Col md={8}>
          <nav className="mx-4">
            <ul className="navbar fs-6">
              <li>
                <a href="#">
                  Get involved <span className="arrow">▼</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Founders & Investors <span className="arrow">▼</span>
                </a>
              </li>
              <li>
                <a href="#">Chapters</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Tiendita</a>
              </li>
              <li>
                <button className="button-donate">Donate</button>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
      <hr className="mt-3"/>
      <Row id="nav-menu-latina-member-2" className="my-1 py-3">
        <Col xs={12} md={3} className="d-flex justify-content-center">
          <img
            style={{ width: "60px" }}
            src="logo.svg"
            alt="LiT-logo-positive"
          />
        </Col>
        <Col xs={12} md={9}>
          <nav className="mx-4">
            <ul className="navbar" style={{ fontSize: "16px" }}>
              <li>
                <a href="#">
                  <strong>Dashboard</strong>
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>LiT Recruit</strong>
                  <span className="arrow">▼</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>Events</strong>
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>Level up</strong>
                  <span className="arrow">▼</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>LiT Community</strong>
                </a>
              </li>
              <li>
                <img
                  style={{ width: "20px" }}
                  src="email.svg"
                  alt="message-received"
                />
              </li>
              <li className="d-flex">
                <img style={{ width: "40px" }} src="avatar.svg" alt="avatar" />
                <span className="arrow align-self-end">▼</span>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;
