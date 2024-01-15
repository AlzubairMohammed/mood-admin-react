import React from "react";
import "./SideMenu.css";
import { Col, ListGroup, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <>
      <div className="side-menu">
        <Tab.Container className="d-grid justify-content-center align-items-center">
          <div className="logo p-3 text-center">Dashboard</div>
          <ListGroup className="" variant="flush">
            <ListGroup.Item className="border-0 fw-bold" action>
              <Row>
                <Col md="2">
                  <i className="fas fa-home activeIcon"></i>
                </Col>
                <Col md="8">
                  <Link className="link activeLink" to="/">
                    Home
                  </Link>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 fw-bold" action>
              <Row>
                <Col md="2">
                  <i className="fas fa-gift"></i>
                </Col>
                <Col md="8">
                  <Link className="link" to="/products">
                    Products
                  </Link>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 fw-bold" action>
              <Row>
                <Col md="2">
                  <i className="fas fa-project-diagram"></i>
                </Col>
                <Col md="8">
                  <Link className="link" to="/categories">
                    Categories
                  </Link>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 fw-bold" action>
              <Row>
                <Col md="2">
                  <i className="fas fa-chart-bar"></i>
                </Col>
                <Col md="8">
                  <Link className="link" to="/subCategories">
                    Subcategories
                  </Link>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 fw-bold" action>
              <Row>
                <Col md="2">
                  <i className="fas fa-user"></i>
                </Col>
                <Col md="8">
                  {" "}
                  <Link className="link" to="/users">
                    Users
                  </Link>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 fw-bold" action>
              <Row>
                <Col md="2">
                  <i class="fas fa-sign-out-alt text-danger"></i>
                </Col>
                <Col md="8">
                  <Link className="link text-danger" to="/logout">
                    Logout
                  </Link>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Tab.Container>
      </div>
    </>
  );
}
