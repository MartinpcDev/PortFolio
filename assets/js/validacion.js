export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  //console.log(input.parentElement);
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "Este campo nombre no puede estar Vacio",
  },
  email: {
    valueMissing: "Este campo correo no puede estar Vacio",
    typeMismatch: "El correo no es valido",
  },
  asunto: {
    valueMissing: "Este campo direccion no puede estar vacio",
  },
  mensaje: {
    valueMissing: "Este campo ciudad no puede estar vacio",
  },
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}
