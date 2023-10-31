const animales = ["perro", "gato", "pájaro", "conejo"];

// Muestra el contenido del array desde el principio
let i = 0;
while (i < animales.length) {
  console.log(animales[i]);
  i++; // Incrementa i en cada iteración
}

// Muestra el contenido del array de atrás hacia adelante
let j = animales.length - 1; // Inicializa j al último índice del array
do {
  console.log(animales[j]);
  j--; // Decrementa j en cada iteración
} while (j >= 0); // Asegura que el bucle se detenga al llegar al primer elemento del array
