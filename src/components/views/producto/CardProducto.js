import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

const CardProducto = (props) => {
  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src={props.producto.imagen}
        />
        <Card.Body>
          <Card.Title>{props.producto.nombreProducto}</Card.Title>
          <Card.Text>
            {props.producto.descripcion}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row className="text-center">
            <Col>
              <h3 className="m-0">${props.producto.precio}</h3>
            </Col>
            <Col>
              <Button variant="danger">Ver más</Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
