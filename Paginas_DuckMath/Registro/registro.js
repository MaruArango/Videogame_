const correoInput = document.getElementById("correo");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const usuariosExistentes = ["usuario1", "admin", "test123"]; // Simulado

function crearIcono(id) {
    const icon = document.createElement("span");
    icon.id = id;
    icon.classList.add("estado-icono");
    return icon;
  }

function mostrarEstado(input, estado, mensaje) {
  let grupo = input.closest(".input-group");
  let icono = grupo.querySelector(".estado-icono");
  let mensajeEl = grupo.querySelector(".mensaje-validacion");

  // Crear icono si no existe
  if (!icono) {
    icono = document.createElement("span");
    icono.classList.add("estado-icono");
    grupo.querySelector(".input-wrapper").appendChild(icono);
  }

  // Crear mensaje si no existe
  if (!mensajeEl) {
    mensajeEl = document.createElement("div");
    mensajeEl.classList.add("mensaje-validacion");
    grupo.appendChild(mensajeEl);
  }

  if (estado === "valido") {
    icono.textContent = "✅";
    icono.style.color = "green";
    mensajeEl.textContent = "";
  } else if (estado === "invalido") {
    icono.textContent = "❌";
    icono.style.color = "red";
    mensajeEl.textContent = mensaje;
    mensajeEl.style.color = "red";
  }
}

  correoInput.addEventListener("input", () => {
    const valor = correoInput.value;
    if (valor.includes("@")) {
      mostrarEstado(correoInput, "valido");
    } else {
      mostrarEstado(correoInput, "invalido", "Correo inválido");
    }
  });

  usernameInput.addEventListener("input", () => {
    const valor = usernameInput.value;
    if (usuariosExistentes.includes(valor)) {
      mostrarEstado(usernameInput, "invalido", "Username ya existe");
    } else {
      mostrarEstado(usernameInput, "valido");
    }
  });

  passwordInput.addEventListener("input", () => {
    const valor = passwordInput.value;
    const seguro = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (seguro.test(valor)) {
      mostrarEstado(passwordInput, "valido");
    } else {
      mostrarEstado(passwordInput, "invalido", "La contraseña debe tener 1 mayúscula, 1 número y mínimo 8 caracteres");
    }
  });