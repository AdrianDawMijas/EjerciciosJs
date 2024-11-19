let numero, n, salir = false, volver, cont;

do {
  // Reiniciamos el contador de intentos
  cont = 0;

  // Calculamos el número aleatorio entre 1 y 1000
  numero = parseInt(Math.random() * 1000) + 1;

  do {
    // Bucle del juego hasta que el usuario acierte o salga
    do {
      // Bucle de petición del número
      volver = false;
      n = prompt("¿Qué número del 1 al 1000 crees que he pensado?");
      
      // Si se canceló el cuadro
      if (n === null) {
        salir = true; // Marcamos que el usuario quiere salir
      } else if (isNaN(n) || n < 1 || n > 1000) {
        // Si el número no es válido
        alert("Número no válido. Introduce un número entre 1 y 1000.");
        volver = true; // Repetimos el bucle
      } else {
        // Convertimos `n` a un número
        n = parseInt(n);
      }
    } while (!salir && volver);

    if (!salir) {
      cont++; // Incrementamos el contador de intentos

      // Comprobamos el número
      if (numero > n) {
        alert("Mi número es mayor.");
      } else if (numero < n) {
        alert("Mi número es menor.");
      } else {
        // Si el usuario acierta
        alert(`¡Acertaste! Intentos: ${cont}`);
        break; // Salimos del bucle interno
      }
    }
  } while (!salir && numero !== n);

  // Preguntamos si quiere jugar otra vez
} while (!salir && confirm("¿Quieres jugar de nuevo?"));

// Mensaje final según la elección del usuario
if (salir) {
  document.write("<h1>Se canceló la partida</h1>");
} else {
  document.write("<h1>Gracias por jugar</h1>");
}
