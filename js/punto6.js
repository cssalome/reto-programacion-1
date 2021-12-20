// Llegaste a una fiesta con X cantidad de rebanadas de pizza (indicadas por el usuario),
// después de un rato se consumió Y cantidad de rebanadas y quedan Z. Fácil ¿cierto?
// El reto está en que expreses lo que sucede es una forma comprensible para cualquier persona,
// imprescindible pensar en tus usuarios

const pizzas = prompt(
  "¿Con cuantas rebanadas de pizza llegaste a la fiesta?",
  ""
);
const pizzasComidas = prompt(
  "¿Cunatas rebanadas se consumieron durante la fiesta?",
  ""
);

const resto = Number(pizzas) - Number(pizzasComidas);

alert(`Quedaon ${resto} rebanadas de pizza`);
