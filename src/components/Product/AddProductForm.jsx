import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./AddProductForm.css";

export default function AddProductForm() {
  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter price" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control placeholder="Enter short description ..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridImage">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Category</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>

        {/* <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button
          className="main-color border-0 mt-2"
          variant="primary"
          type="submit"
        >
          Add product
        </Button>
      </Form>
    </>
  );
}
