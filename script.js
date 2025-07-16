const malla = {
  "1er Semestre": [
    "Introducción a la Economía",
    "Métodos Matemáticos I",
    "Gestión y Empresa",
    "Inglés I",
    "Int. al Pensamiento Económico y Político"
  ],
  "2do Semestre": [
    "Métodos Matemáticos II",
    "Inglés II",
    "Introducción a la Microeconomía",
    "Contabilidad",
    "Comunicación I"
  ],
  "3er Semestre": [
    "Introducción a la Macroeconomía",
    "Métodos Matemáticos III",
    "Inglés III",
    "Aplicaciones de Manejo de Datos",
    "Introducción a la Gestión de Personas"
  ],
  "4to Semestre": [
    "Microeconomía I",
    "Macroeconomía I",
    "Métodos Cuantitativos I",
    "Historia Económica",
    "Inglés IV",
    "Comunicación II"
  ],
  "5to Semestre": [
    "Estadística I",
    "Estadística II",
    "Economía Aplicada",
    "Métodos Matemáticos IV",
    "Introducción al Marketing",
    "Introducción a las Finanzas"
  ],
  "6to Semestre": [
    "Microeconomía II",
    "Macroeconomía II",
    "Métodos Cuantitativos II",
    "Taller de Política Pública",
    "Libre I",
    "Electivo de Entorno Social y Científico I"
  ],
  "7mo Semestre": [
    "Microeconomía III",
    "Macroeconomía III",
    "Taller Práctico Profesional/Social I",
    "Taller Práctico Profesional/Social II",
    "Libre II",
    "Electivo de Entorno Social y Científico II"
  ],
  "8vo Semestre": [
    "Microeconomía IV",
    "Macroeconomía IV",
    "Electivo de Profundización I",
    "Electivo de Profundización II",
    "Electivo de Profundización III",
    "Libre III",
    "Tecnología y Sistemas de Información",
    "Electivo de Negocios para la Economía"
  ],
  "9no Semestre": [
    "Electivo Magíster I / Electivo Profesional I",
    "Electivo Magíster II / Electivo Profesional II",
    "Electivo Magíster III / Electivo Profesional III",
    "Electivo Magíster IV / Electivo Profesional IV",
    "Electivo Magíster V / Electivo Profesional V"
  ],
  "10mo Semestre": [
    "Práctica Profesional I",
    "Práctica Profesional II",
    "Práctica Profesional III",
    "Práctica Profesional IV",
    "Taller de Práctica Profesional",
    "Electivo Magíster X o Electivo Profesional III"
  ]
};

const contenedor = document.getElementById("malla");

for (const [semestre, ramos] of Object.entries(malla)) {
  const columna = document.createElement("div");
  columna.className = "semestre";
  columna.innerHTML = `<h2>${semestre}</h2>`;

  ramos.forEach(ramo => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "ramo";
    tarjeta.textContent = ramo;

    tarjeta.addEventListener("click", () => {
      tarjeta.classList.toggle("aprobado");
    });

    columna.appendChild(tarjeta);
  });

  contenedor.appendChild(columna);
}
