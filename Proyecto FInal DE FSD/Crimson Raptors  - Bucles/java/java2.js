function sumaConFor(numero) {
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
      suma += i;
    }
    return suma;
  }
  
  function sumaConWhile(numero) {
    let suma = 0;
    let i = 1;
    while (i <= numero) {
      suma += i;
      i++;
    }
    return suma;
  }
  
  function solicitarNumero() {
    let numero = parseInt(prompt("Ingrese un número entero positivo:"));
  
    if (isNaN(numero) || numero <= 0) {
      console.error("Error: Debe ingresar un número entero positivo.");
      return;
    }
  
    const opcion = prompt("Elija un método de suma:\n1. Bucle for\n2. Bucle while");
    
    switch (opcion) {
      case "1":
        console.log("Usando bucle for...");
        console.log("La suma es: " + sumaConFor(numero));
        break;
      case "2":
        console.log("Usando bucle while...");
        console.log("La suma es: " + sumaConWhile(numero));
        break;
      default:
        console.error("Opción no válida. Debe seleccionar 1 o 2.");
    }
  }
  
  solicitarNumero();
  