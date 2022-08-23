import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { cantidadCaracteres, validarNumeros } from "./helper";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CrearProducto = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [imagen, setImagen] = useState("");
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [msjError, setMsjError] = useState(false);
  // Variable de entorno con la dirección de mi API
  const URL = process.env.REACT_APP_API_CAFETERIA;
  // Inicializar el hook useNavigate
  const navegacion = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(nombreProducto);
    console.log(precio);
    // Validar los datos
    if (cantidadCaracteres(nombreProducto) && validarNumeros(precio)) {
      setMsjError(false);

      // Crear un objeto
      const nuevoProducto = {
        nombreProducto,
        precio,
        imagen,
        categoria,
      };
      console.log(nuevoProducto);

      // Enviarle peticion CREATE a la API para dar de alta el objeto
      try {
        const respuesta = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoProducto),
        });
        console.log(respuesta);
        if (respuesta.status === 201) {
          Swal.fire(
            "Producto creado",
            `El producto ${nuevoProducto.nombreProducto} fue creado correctamente.`,
            "success"
          );
        }
        // Redireccionar a la pagina administrar
        navegacion("/administrar");
      } catch (error) {
        console.log(error);
      }
    } else {
      setMsjError(true);
    }
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
      {msjError ? (
        <Alert variant="danger" className="mt-3">
          Debe corregir los datos.
        </Alert>
      ) : null}
    </section>
  );
};

export default CrearProducto;
