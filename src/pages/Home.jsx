import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomCard from "../components/Card/CustomCard";
import CutomTable from "../components/Table/CutomTable";

export default function Home() {
  return (
    <>
      <Row className="p-2">
        <Col className="mb-1" xl="3" lg="3" md="6" sm="12" xs="12">
          <CustomCard />
        </Col>
        <Col className="mb-1" xl="3" lg="3" md="6" sm="12" xs="12">
          <CustomCard />
        </Col>
        <Col className="mb-1" xl="3" lg="3" md="6" sm="12" xs="12">
          <CustomCard />
        </Col>
        <Col className="mb-1" xl="3" lg="3" md="6" sm="12" xs="12">
          <CustomCard />
        </Col>
      </Row>
      <Col className="p-3">
        <CutomTable />
      </Col>
    </>
  );
}
