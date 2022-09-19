import React, { useState, useEffect } from "react";
import { Row, Array, Col } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";

const Home = () => {
  const URL = process.env.REACT_APP_API_CAFETERIA;
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
    <main className="container">
      <section className="mt-4">
        <h1>Bienvenidos</h1>
        <hr />
      </section>
      <section className="mb-4">
        <Row xs={1} md={4} className="g-4">
          {productos.map((producto) => (
            <CardProducto
              key={producto.id}
              producto={producto}
              consultarAPI={consultarAPI}
            ></CardProducto>
          ))}
        </Row>
      </section>
    </main>
  );
};

export default Home;
