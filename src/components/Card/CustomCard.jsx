import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./CustomCard.css";

export default function CustomCard() {
  return (
    <>
      <Card className="p-3 d-grid justify-content-center align-items-center border-0">
        <Row className="">
          <Col className="">
            <Card.Title>1800</Card.Title>
            <Card.Text>Products</Card.Text>
          </Col>
          <Col className="d-grid justify-content-center align-items-center">
            <div className="rounded-circle icon-backround d-grid justify-content-center align-items-center">
              <i className="fas fa-gift icon"></i>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
