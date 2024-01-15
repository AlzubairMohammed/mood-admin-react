import "./App.css";
import NavBar from "./components/Layout/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SideMenu from "./components/Layout/SideMenu";
import { Col, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import AddProduct from "./pages/Products/AddProduct";
function App() {
  return (
    <div className="App">
      <Row className="m-0 p-0">
        <Col xl="2" lg="3" md="3" sm="3" xs="6">
          <SideMenu />
        </Col>
        <Col
          className="bcolor p-0"
          style={{ height: "1000px" }}
          xl="10"
          lg="9"
          md="9"
          sm="9"
          xs="6"
        >
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addProduct" element={<AddProduct />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
