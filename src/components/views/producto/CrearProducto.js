import React from "react";
import { Button, Form } from "react-bootstrap";

const CrearProducto = () => {
  return (
    <section className="container">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="nombreProducto">
          <Form.Label>Nombre de producto *</Form.Label>
          <Form.Control type="text" placeholder="Café" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="precioProducto">
          <Form.Label>Precio *</Form.Label>
          <Form.Control type="number" placeholder="500" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagenProducto">
          <Form.Label>URL de imagen *</Form.Label>
          <Form.Control type="text" placeholder="https..." required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoriaProducto">
          <Form.Label>Categoría *</Form.Label>
          <Form.Select required>
            <option>Seleccione una categoría</option>
            <option>Bebida caliente</option>
            <option>Bebida fría</option>
            <option>Dulce</option>
            <option>Salado</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;
