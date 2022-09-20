import React, { useState, useEffect } from "react";
import ItemProducto from "./ItemProducto";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdministrarProductos = () => {
  const URL = process.env.REACT_APP_API_CAFETERIA;
  console.log(URL);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      // Codigo que quiero ejecutar
      // Peticion get
      const respuesta = await fetch(URL);
      // Con el metodo json saco los datos del body
      const listaProductos = await respuesta.json();
      setProductos(listaProductos);
    } catch (error) {
      // Codigo por si falla
    }
  };

  return (
    <section className="container">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Productos disponibles</h1>
        <Link to="/administrar/producto/crear" className="btn btn-primary">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de imagen</th>
            <th>Descripción</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <ItemProducto key={producto._id} producto={producto} consultarAPI={consultarAPI}></ItemProducto>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default AdministrarProductos;
