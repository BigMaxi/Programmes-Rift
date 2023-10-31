// Intenta cargar datos previos desde localStorage al inicio
const personajes = JSON.parse(localStorage.getItem("personajes")) || [];
let continuar = true;

console.log("Bienvenido al programa de gestión de personajes");

while (continuar) {
  console.log("Menú de opciones:");
  console.log("1. Cargar datos");
  console.log("2. Mostrar datos");
  console.log("3. Salir del programa");

  const opcion = prompt("Seleccione una opción (1/2/3):");

  switch (opcion) {
    case "1":
      const nombrePersonaje = prompt("Ingrese el nombre del personaje:");
      personajes.push(nombrePersonaje);
      localStorage.setItem("personajes", JSON.stringify(personajes));
      console.log(`"${nombrePersonaje}" ha sido agregado a la lista de personajes.`);
      break;

    case "2":
      if (personajes.length === 0) {
        console.log("La lista de personajes está vacía.");
      } else {
        console.log("Personajes almacenados:");
        personajes.forEach((personaje, index) => {
          console.log(`${index + 1}. ${personaje}`);
        });
      }
      break;

    case "3":
      console.log("¡Hasta luego!");
      continuar = false;
      break;

    default:
      console.log("Opción no válida. Por favor, seleccione 1, 2 o 3.");
  }
}

// Puedes agregar más lógica y mejoras según tus necesidades.
