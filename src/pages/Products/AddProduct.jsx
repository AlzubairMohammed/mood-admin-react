import React, { useState } from "react";
import AddProductForm from "../../components/Product/AddProductForm";
import { Container } from "react-bootstrap";

const AddProduct = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Container className="p-5">
        <AddProductForm />
      </Container>
    </>
  );
};

export default AddProduct;
