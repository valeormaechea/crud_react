import React from "react";
import Button from "react-bootstrap/esm/Button";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

const ItemProducto = (props) => {
  const URL = process.env.REACT_APP_API_CAFETERIA;
  const handleDelete = () => {
    Swal.fire({
      title: "Estas seguro de borrar este producto?",
      text: "No puede volver este paso atrás.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, borrar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Realizar la petición DELETE
        try {
          const parametros = {
            method: "DELETE",
          };
          const respuesta = await fetch(
            URL + "/" + props.producto.id,
            parametros
          );
          if (respuesta.status === 200) {
            Swal.fire(
              "Eliminado",
              `El producto ${props.producto.nombreProducto} fue borrado`,
              "success"
            );

            props.consultarAPI();
          }
        } catch (error) {
          console.log(error);
          // Mostrar un mensaje de error al usuario
        }
      }
    });
  };

  return (
    <tr>
      <td>{props.producto.id}</td>
      <td>{props.producto.nombreProducto}</td>
      <td>${props.producto.precio}</td>
      <td>{props.producto.imagen}</td>
      <td>{props.producto.categoria}</td>
      <td>
        <Link
          to={`/administrar/producto/editar:${props.producto.id}`}
          className="btn btn-warning"
        >
          Editar
        </Link>
        <Button variant="danger" onClick={handleDelete}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
