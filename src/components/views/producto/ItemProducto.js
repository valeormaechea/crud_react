import React from "react";
import Button from "react-bootstrap/esm/Button";
const ItemProducto = () => {
  return (
    <tr>
      <td>1</td>
      <td>Cafe</td>
      <td>$500</td>
      <td>
        https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG
      </td>
      <td>Bebida caliente</td>
      <td>
        <Button variant="warning">Editar</Button>
        <Button variant="danger">Borrar</Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
