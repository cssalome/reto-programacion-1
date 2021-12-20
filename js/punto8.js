// Pedirás al usuario que indique el total a pagar,
// entre cuantas personas se dvidirá la cuenta,
// porcentaje de propina a incluir, un porcentaje de impuestos,

// total a pagar incluyendo propina más impuestos
// y el total a pagar por cada persona.

const cuenta = prompt("Indique el total a pagar:", "");
const propina = prompt("Indique poersentage de propina", "");
const impuestos = prompt("Indique porsentage de Impuesto", "");
const personas = prompt(
  "Indique entre cuantas personas se dividirá la deuda",
  ""
);
const total = Number(cuenta) + Number(propina) + Number(impuestos);
const totalPerona = total / Number(personas);

alert(`Total a pagar $${total}
Total por persona $${totalPerona}`);
