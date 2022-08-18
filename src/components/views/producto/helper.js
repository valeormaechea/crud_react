export const cantidadCaracteres = (input) => {
  if (input.length >= 2 && input.value.length <= 20) {
    console.log(input);
    return true;
    
  } else {
    return false;
  }
};

export const validarNumeros = (input) => {
  if (parseInt(input) != undefined) {
    return true;
  } else {
    return false;
  }
};
