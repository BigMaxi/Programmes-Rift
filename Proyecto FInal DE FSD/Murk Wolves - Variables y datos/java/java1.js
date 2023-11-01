// Calculadora de promedio
let nota1 = parseFloat(prompt("Ingrese la nota del primer parcial: "));
let nota2 = parseFloat(prompt("Ingrese la nota del segundo parcial: "));
let nota3 = parseFloat(prompt("Ingrese la nota del tercer parcial: "));

let promedio = (nota1 + nota2 + nota3) / 3; // Añadir paréntesis para asegurar el orden de las operaciones

console.log("El promedio es: " + promedio.toFixed(2)); // Corregir "promedios" a "promedio"
