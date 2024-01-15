import React from "react";
import { Button, Table } from "react-bootstrap";
import "./CutomTable.css";

export default function CutomTable({
  headData = ["Username", "Price", "Product name", "Action"],
  bodyData = [
    { name: "Ahmed", price: "500 $", product: "Moblie HP" },
    { name: "Mhommed", price: "200 $", product: "laptop Mac" },
    { name: "Mhmoud", price: "900 $", product: "TV Screen" },
    { name: "Alzubair", price: "300 $", product: "Coffe M" },
  ],
  EditBtn = true,
  DeleteBtn = true,
  DisableBtn = false,
}) {
  return (
    <>
      <Table
        className="custom-table"
        striped
        hover
        bordered
        responsive
        size="lg"
      >
        <thead>
          <tr>
            <th>No.</th>
            {headData.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {bodyData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                {Object.keys(item, index).map((key) => (
                  <td>{item[key]}</td>
                ))}

                <td>
                  {EditBtn ? <Button className="m-1">Edit</Button> : null}
                  {DisableBtn ? (
                    <Button className="m-1" variant="success">
                      Disable
                    </Button>
                  ) : null}
                  {DeleteBtn ? (
                    <Button className="m-1" variant="danger">
                      Delete
                    </Button>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
