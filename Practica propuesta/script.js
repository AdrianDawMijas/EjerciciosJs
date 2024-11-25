function color() {
    const rojo = parseInt(Math.random() * 255);
    const verde = parseInt(Math.random() * 255);
    const azul = parseInt(Math.random() * 255);
    return `rgb(${rojo}, ${verde}, ${azul})`;
}

function cambioColor() {
  document.getElementById('caja1').style.backgroundColor = color();
  document.getElementById('caja2').style.backgroundColor = color();
  document.getElementById('caja3').style.backgroundColor = color();
}