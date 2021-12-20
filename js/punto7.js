const nombre = prompt("Escribe tu nombre", "");
const edad = prompt("Escribe tu edad", "");
const fechaActual = new Date();

const edadProxima = edad + 1;

alert(
  `Hola ${nombre} el año pasado tenías ${edad} años y el próximo año cumplirás ${edadProxima} años`
);
