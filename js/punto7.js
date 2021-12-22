const nombre = prompt("Escribe tu nombre", "");
const edad = Number(prompt("Escribe tu edad", ""));

alert(
  `Hola ${nombre} el año pasado tenías ${
    edad - 1
  } años y el próximo año cumplirás ${edad + 1} años`
);
