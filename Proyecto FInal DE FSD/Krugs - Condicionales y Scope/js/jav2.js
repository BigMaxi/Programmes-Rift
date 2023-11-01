// Solicitar al usuario que ingrese el gasto total mensual
const gastoTotal = parseFloat(prompt("Ingrese su gasto total mensual en dólares:"));

// Verificar si el valor ingresado es un número válido
if (isNaN(gastoTotal)) {
  console.error("Error: Debe ingresar un número válido.");
} else {
  // Evaluar el gasto total y proporcionar una evaluación
  let evaluacion = "";
  if (gastoTotal < 500) {
    evaluacion = "Gasto Muy Bajo";
  } else if (gastoTotal >= 500 && gastoTotal <= 1000) {
    evaluacion = "Gasto Moderado";
  } else {
    evaluacion = "Gasto Alto";
  }

  // Mostrar la evaluación en la consola
  console.log("Evaluación de gastos: " + evaluacion);

  // Mensaje de agradecimiento
  console.log("¡Gracias por utilizar la calculadora de evaluación de gastos!");
}
