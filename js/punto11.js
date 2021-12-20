// Pide al usuario ingresar un número mayor a 1000
// y otro menor a 100.
// Indica cuantas veces cabe el número menor a 100
// en el número mayor a 1000

const numMayor = Number(prompt("Ingresa un numero mayor a 1000", ""));
const numMenor = Number(prompt("Ingresa un numero menor a 100", ""));

const resultado = (numMayor / numMenor).toFixed(0);

alert(`El numero ${numMenor} cabe ${resultado} veces en ${numMayor}`);
