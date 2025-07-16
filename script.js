const malla = {
  "1er Semestre": [
    { nombre: "Introducción a la Economía" },
    { nombre: "Métodos Matemáticos I" },
    { nombre: "Gestión y Empresa" },
    { nombre: "Inglés I" },
    { nombre: "Int. al Pensamiento Económico y Político" }
  ],
  "2do Semestre": [
    { nombre: "Métodos Matemáticos II", requisitos: ["Métodos Matemáticos I"] },
    { nombre: "Inglés II", requisitos: ["Inglés I"] },
    { nombre: "Introducción a la Microeconomía", requisitos: ["Introducción a la Economía"] },
    { nombre: "Contabilidad" },
    { nombre: "Comunicación I" }
  ],
  "3er Semestre": [
    { nombre: "Introducción a la Macroeconomía", requisitos: ["Introducción a la Economía"] },
    { nombre: "Métodos Matemáticos III", requisitos: ["Métodos Matemáticos II"] },
    { nombre: "Inglés III", requisitos: ["Inglés II"] },
    { nombre: "Aplicaciones de Manejo de Datos" },
    { nombre: "Introducción a la Gestión de Personas" }
  ],
  "4to Semestre": [
    { nombre: "Microeconomía I", requisitos: ["Introducción a la Microeconomía"] },
    { nombre: "Macroeconomía I", requisitos: ["Introducción a la Macroeconomía"] },
    { nombre: "Métodos Cuantitativos I", requisitos: ["Métodos Matemáticos III"] },
    { nombre: "Historia Económica" },
    { nombre: "Inglés IV", requisitos: ["Inglés III"] },
    { nombre: "Comunicación II", requisitos: ["Comunicación I"] }
  ],
  "5to Semestre": [
    { nombre: "Estadística I", requisitos: ["Métodos Cuantitativos I"] },
    { nombre: "Estadística II", requisitos: ["Estadística I"] },
    { nombre: "Economía Aplicada", requisitos: ["Microeconomía I"] },
    { nombre: "Métodos Matemáticos IV", requisitos: ["Métodos Matemáticos III"] },
    { nombre: "Introducción al Marketing" },
    { nombre: "Introducción a las Finanzas", requisitos: ["Contabilidad"] }
  ],
  "6to Semestre": [
    { nombre: "Microeconomía II", requisitos: ["Microeconomía I"] },
    { nombre: "Macroeconomía II", requisitos: ["Macroeconomía I"] },
    { nombre: "Métodos Cuantitativos II", requisitos: ["Estadística II"] },
    { nombre: "Taller de Política Pública", requisitos: ["Economía Aplicada"] },
    { nombre: "Libre I" },
    { nombre: "Electivo de Entorno Social y Científico I" }
  ],
  "7mo Semestre": [
    { nombre: "Microeconomía III", requisitos: ["Microeconomía II"] },
    { nombre: "Macroeconomía III", requisitos: ["Macroeconomía II"] },
    { nombre: "Taller Práctico Profesional/Social I" },
    { nombre: "Taller Práctico Profesional/Social II" },
    { nombre: "Libre II" },
    { nombre: "Electivo de Entorno Social y Científico II" }
  ]
};

const contenedor = document.getElementById("malla");
const estado = {};

function renderMalla() {
  contenedor.innerHTML = "";

  for (const [semestre, ramos] of Object.entries(malla)) {
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
          renderMalla(); // Vuelve a dibujar todo
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

renderMalla();

