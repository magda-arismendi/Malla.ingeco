const malla = {
  "1er Semestre": [
    { nombre: "Int. al Pensamiento Económico y Político" },
    { nombre: "Métodos Matemáticos I" },
    { nombre: "Gestión y Empresa" },
    { nombre: "Introducción a la Economía" },
    { nombre: "Inglés I" }
  ],
  "2do Semestre": [
    { nombre: "Comunicación I" },
    { nombre: "Métodos Matemáticos II", requisitos: ["Métodos Matemáticos I"] },
    { nombre: "Introducción a la Microeconomía", requisitos: ["Introducción a la Economía"] },
    { nombre: "Inglés II", requisitos: ["Inglés I"] },
    { nombre: "Contabilidad" }
  ],
  "3er Semestre": [
    { nombre: "Inglés III", requisitos: ["Inglés II"] },
    { nombre: "Métodos Matemáticos III", requisitos: ["Métodos Matemáticos II"] },
    { nombre: "Introducción a la Gestión de Personas" },
    { nombre: "Aplicaciones de Manejo de Datos" },
    { nombre: "Introducción a la Macroeconomía", requisitos: ["Introducción a la Economía"] }
  ],
  "4to Semestre": [
    { nombre: "Historia Económica" },
    { nombre: "Comunicación II", requisitos: ["Comunicación I"] },
    { nombre: "Inglés IV", requisitos: ["Inglés III"] },
    { nombre: "Métodos Cuantitativos I", requisitos: ["Métodos Matemáticos III"] },
    { nombre: "Macroeconomía I", requisitos: ["Introducción a la Macroeconomía"] },
    { nombre: "Microeconomía I", requisitos: ["Introducción a la Microeconomía"] }
  ],
  "5to Semestre": [
    { nombre: "Estadística I", requisitos: ["Métodos Cuantitativos I"] },
    { nombre: "Introducción al Marketing" },
    { nombre: "Introducción a las Finanzas", requisitos: ["Contabilidad"] },
    { nombre: "Economía Aplicada", requisitos: ["Microeconomía I"] },
    { nombre: "Métodos Matemáticos IV", requisitos: ["Métodos Matemáticos III"] },
    { nombre: "Estadística II", requisitos: ["Estadística I"] }
  ],
  "6to Semestre": [
    { nombre: "Electivo de Entorno Social y Científico I" },
    { nombre: "Libre I" },
    { nombre: "Macroeconomía II", requisitos: ["Macroeconomía I"] },
    { nombre: "Microeconomía II", requisitos: ["Microeconomía I"] },
    { nombre: "Métodos Cuantitativos II", requisitos: ["Estadística II"] },
    { nombre: "Taller de Política Pública", requisitos: ["Economía Aplicada"] }
  ],
  "7mo Semestre": [
    { nombre: "Electivo de Entorno Social y Científico II" },
    { nombre: "Libre II" },
    { nombre: "Macroeconomía III", requisitos: ["Macroeconomía II"] },
    { nombre: "Microeconomía III", requisitos: ["Microeconomía II"] },
    { nombre: "Taller Práctico Profesional/Social I" },
    { nombre: "Taller Práctico Profesional/Social II" }
  ],
  "8vo Semestre": [
    { nombre: "Electivo de Profundización I" },
    { nombre: "Electivo de Profundización II" },
    { nombre: "Electivo de Profundización III" },
    { nombre: "Libre III" },
    { nombre: "Tecnología y Sistemas de Información" },
    { nombre: "Electivo de Negocios para la Economía" }
  ],
  "Práctica Profesional": [
    { nombre: "Práctica Profesional I" },
    { nombre: "Práctica Profesional II" },
    { nombre: "Práctica Profesional III" },
    { nombre: "Práctica Profesional IV" },
    { nombre: "Taller de Práctica Profesional" },
    { nombre: "Electivo Profesional III" }
  ],
  "Magíster": [
    { nombre: "Electivo Magíster I" },
    { nombre: "Electivo Magíster II" },
    { nombre: "Electivo Magíster III" },
    { nombre: "Electivo Magíster IV" },
    { nombre: "Electivo Magíster V" },
    { nombre: "Electivo Magíster X" }
  ]
};

const estado = {};
let rutaSeleccionada = null;

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (const [semestre, ramos] of Object.entries(malla)) {
    if (
      semestre === "Práctica Profesional" && rutaSeleccionada !== "practica" ||
      semestre === "Magíster" && rutaSeleccionada !== "magister"
    ) {
      continue;
    }

    const columna = document.createElement("div");
    columna.className = "semestre";
    columna.innerHTML = `<h2>${semestre}</h2>`;

    ramos.forEach(ramo => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "ramo";
      tarjeta.textContent = ramo.nombre;

      const requisitos = ramo.requisitos || [];
      const habilitado = requisitos.every(r => estado[r]);

      if (!habilitado && requisitos.length > 0) {
        tarjeta.classList.add("bloqueado");
      } else {
        tarjeta.addEventListener("click", () => {
          const yaAprobado = tarjeta.classList.contains("aprobado");
          if (yaAprobado) {
            tarjeta.classList.remove("aprobado");
            estado[ramo.nombre] = false;
          } else {
            tarjeta.classList.add("aprobado");
            estado[ramo.nombre] = true;
          }
          if (semestre === "8vo Semestre") {
            document.getElementById("opcion-titulacion").style.display = "block";
          }
          renderMalla();
        });
      }

      if (estado[ramo.nombre]) {
        tarjeta.classList.add("aprobado");
      }

      columna.appendChild(tarjeta);
    });

    contenedor.appendChild(columna);
  }
}

function elegirTitulacion(ruta) {
  rutaSeleccionada = ruta;
  document.getElementById("opcion-titulacion").style.display = "none";
  renderMalla();
}

renderMalla();
