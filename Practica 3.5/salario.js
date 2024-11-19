// Petición de datos
let nombre = prompt("Escriba su nombre");
let apellidos = prompt("Escriba sus apellidos");
let edad = parseInt(prompt("Escriba su edad")); // Convertimos a número
let salario = parseFloat(prompt("Escriba su salario")); // Convertimos a número

// Validamos el salario
if (salario < 1000) {
  if (edad < 30) {
    salario = 1100; // Se ajusta el salario fijo
  } else if (edad <= 45) {
    salario *= 1.03; // Subida del 3%
  } else {
    salario *= 1.15; // Subida del 15%
  }
} else if (salario <= 2000) {
  // Salario entre 1000 y 2000 euros
  if (edad > 45) {
    salario *= 1.03; // Subida del 3%
  } else {
    salario *= 1.10; // Subida del 10%
  }
}

// Escritura final
document.write(`
  <p>
    Persona: ${nombre} ${apellidos}, 
    edad: ${edad} años, 
    salario: ${salario.toFixed(2)} €
  </p>
`);
