// Solicitar al usuario que ingrese su nombre y edad
const nombre = prompt("Ingresa tu nombre:");
const edad = parseInt(prompt("Ingresa tu edad:"));

// Verificar si la edad ingresada es un número válido
if (!isNaN(edad)) {
  // Calcular el año de nacimiento
  const añoNacimiento = new Date().getFullYear() - edad;

  // Mostrar el mensaje en la consola
  console.log(`Hola ${nombre}, naciste en el año ${añoNacimiento}`);

  // Mostrar el mensaje en una ventana emergente
  alert(`Hola ${nombre}, naciste en el año ${añoNacimiento}`);
} else {
  console.error("Error: Debe ingresar una edad válida.");
}
