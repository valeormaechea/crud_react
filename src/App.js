import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import EditarProducto from "./components/views/producto/EditarProducto";
import CrearProducto from "./components/views/producto/CrearProducto";
import Error404 from "./components/views/Error404";
import AdministrarProductos from "./components/views/producto/AdministrarProductos";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import "./App.css";

const App = () => {
  return (
    <body>
      <BrowserRouter>
        <header>
          <Menu></Menu>
        </header>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route
            exact
            path="/administrar"
            element={<AdministrarProductos></AdministrarProductos>}
          ></Route>
          <Route
            exact
            path="/administrar/producto/editar/:id"
            element={<EditarProducto></EditarProducto>}
          ></Route>
          <Route
            exact
            path="/administrar/producto/crear"
            element={<CrearProducto></CrearProducto>}
          ></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <footer>
          <Footer></Footer>
        </footer>
      </BrowserRouter>
    </body>
  );
};

export default App;
