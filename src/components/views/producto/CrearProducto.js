import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { cantidadCaracteres, validarNumeros } from "./helper";

const CrearProducto = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [imagen, setImagen] = useState("");
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar los datos
    if (cantidadCaracteres(nombreProducto)) {
    }
    if (validarNumeros(precio)) {
      console.log("reingresar");
    }
    // Crear un objeto
    // Enviarle peticion CREATE a la API para dar de alta el objeto
  };

  return (
    <section className="container">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombreProducto">
          <Form.Label>Nombre de producto *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Café"
            required
            onChange={(e) => setNombreProducto(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="precioProducto">
          <Form.Label>Precio *</Form.Label>
          <Form.Control
            type="number"
            placeholder="500"
            required
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagenProducto">
          <Form.Label>URL de imagen *</Form.Label>
          <Form.Control
            type="text"
            placeholder="https..."
            required
            onChange={(e) => setImagen(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoriaProducto">
          <Form.Label>Categoría *</Form.Label>
          <Form.Select required onChange={(e) => setCategoria(e.target.value)}>
            <option>Seleccione una categoría</option>
            <option value="bebida-caliente">Bebida caliente</option>
            <option value="bebida-fria">Bebida fría</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
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
