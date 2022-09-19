import { React, useEffect, useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { cantidadCaracteres, validarNumeros, cantidadCaracteresText } from "./helper";
import Swal from "sweetalert2";

const EditarProducto = () => {
  // Traer el parametro
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const URL = process.env.REACT_APP_API_CAFETERIA;
  const navegacion = useNavigate();
  //   Crear variable de referencia
  const nombreProductoRef = useRef("");
  const precioRef = useRef(0);
  const imagenRef = useRef("");
  const descripcionRef = useRef("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar que todos los campos son correctos
    if (
      cantidadCaracteres(nombreProductoRef.current.value) &&
      validarNumeros(precioRef.current.value) &&
      cantidadCaracteresText(descripcionRef.current.value)
    ) {
      // Crear un objeto con los datos modificados
      const productoEditar = {
        nombreProducto: nombreProductoRef.current.value,
        imagen: imagenRef.current.value,
        precio: precioRef.current.value,
        categoria: producto.categoria,
        descripcion: descripcionRef.current.value,
      };
      console.log(productoEditar);
      // Pedir a la API la actualización
      try {
        const respuesta = await fetch(`${URL}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productoEditar),
        });

        if (respuesta.status === 201) {
          Swal.fire(
            "Producto creado",
            `El producto ${producto.nombreProducto} fue modificado correctamente.`,
            "success"
          );
        }
      } catch (error) {
        console.log(error);
        // Mostrar un mensaje al usuario
      }
      // Redireccionar a la web de la tabla de productos
      navegacion("/administrar");
    } else {
      // Mostrar un mensaje de error de validacion de datos al usuario
    }
  };

  return (
    <section className="container">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombreProducto">
          <Form.Label>Nombre de producto *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Café"
            required
            defaultValue={producto.nombreProducto}
            ref={nombreProductoRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="precioProducto">
          <Form.Label>Precio *</Form.Label>
          <Form.Control
            type="number"
            placeholder="500"
            required
            defaultValue={producto.precio}
            ref={precioRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagenProducto">
          <Form.Label>URL de imagen *</Form.Label>
          <Form.Control
            type="text"
            placeholder="https..."
            required
            defaultValue={producto.imagen}
            ref={imagenRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoriaProducto">
          <Form.Label>Categoría *</Form.Label>
          <Form.Select
            required
            value={producto.categoria}
            onChange={(e) =>
              setProducto({ ...producto, categoria: e.target.value })
            }
          >
            {/* Con las modificaciones en el onChange, conserva todas las caracteristicas del producto como tal, y modifica categoria solamente. */}
            {/* Si no lo hiciese asi, el state de producto cambiaria completo.  */}
            <option>Seleccione una categoría</option>
            <option value="bebida-caliente">Bebida caliente</option>
            <option value="bebida-fria">Bebida fría</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionProducto">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue={producto.descripcion}
            ref={descripcionRef}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
      {/* {msjError ? (
        <Alert variant="danger" className="mt-3">
          Debe corregir los datos.
        </Alert>
      ) : null} */}
    </section>
  );
};

export default EditarProducto;
