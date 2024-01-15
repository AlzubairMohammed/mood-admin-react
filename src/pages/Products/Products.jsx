import React from "react";
import CutomTable from "../../components/Table/CutomTable";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <Container>
        <Link
          to={"/addProduct"}
          className="btn btn-primary mb-4 mt-2 main-color border-0"
        >
          Add a new product
        </Link>
        <CutomTable />
      </Container>
    </>
  );
}
