const dias = Number(prompt("Indique la cantidad de dias", ""));

const horas = dias * 24;
const minutos = dias * 1440;
const segundos = dias * 86400;

alert(`${dias} dias
${horas} horas
${minutos} minutos
${segundos} segundos`);
