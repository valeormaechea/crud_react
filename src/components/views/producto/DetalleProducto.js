import React, { useEffect, useState } from "react";
import { Col, Row, Container, Badge } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "./DetalleProducto.css";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const URL = process.env.REACT_APP_API_CAFETERIA;

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      const dato = await respuesta.json();
      setProducto(dato);
    } catch (error) {
      console.log(error);
      //   Mostrar un mensaje al usuario
    }
  };
  return (
    <Container className="bg-light mt-5 mb-5 containerDetalle">
      <Row>
        <Col md={6} className='p-0 h-100'>
          <img src={producto.imagen} alt="" className="imagen" />
        </Col>
        <Col md={6} className="p-3 text-nowrap">
          <h3>{producto.nombreProducto}</h3>
          <hr />
          <h5>
            <Badge bg="secondary">{producto.categoria}</Badge>
          </h5>
          <h5 className="mt-5">Descripción: </h5>
          <p>{producto.descripcion}</p>
          <div className="divDetalle">
            <h5 className="m-0">Precio:    </h5>
            <p className="m-0 fs-5">&nbsp;${producto.precio}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
