export const cantidadCaracteres = (input) => {
  if (input.length >= 2 && input.length <= 30) {
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

export const cantidadCaracteresText = (input) => {
  if (input.length >= 2 && input.length <= 50) {
    console.log(input);
    return true;
  } else {
    return false;
  }
};
