export const cantidadCaracteres = (input) => {
  if (input.length >= 2 && input.length <= 20) {
    console.log(input);
    return true;
  } else {
    return false;
  }
};

export const validarNumeros = (input) => {
  let patron = /^[\d]{1,4}$/;
  if (patron.test(input)) {
    return true;
  } else {
    return false;
  }
};
