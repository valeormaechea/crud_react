import React from 'react';
import {Form, Button} from 'react-bootstrap'

const EditarProducto = () => {
    return (
        <section className="container">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="nombreProducto">
          <Form.Label>Nombre de producto *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Café"
            required
            
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="precioProducto">
          <Form.Label>Precio *</Form.Label>
          <Form.Control
            type="number"
            placeholder="500"
            required
            
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagenProducto">
          <Form.Label>URL de imagen *</Form.Label>
          <Form.Control
            type="text"
            placeholder="https..."
            required
            
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoriaProducto">
          <Form.Label>Categoría *</Form.Label>
          <Form.Select required >
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
      {/* {msjError ? (
        <Alert variant="danger" className="mt-3">
          Debe corregir los datos.
        </Alert>
      ) : null} */}
    </section>
    );
};

export default EditarProducto;