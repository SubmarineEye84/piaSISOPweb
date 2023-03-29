var boton = document.getElementById("miBoton");
var modal = document.getElementById("miModal");
var cerrar = document.getElementsByClassName("cerrar")[0];

boton.onclick = function() {
  modal.style.display = "block";
}

cerrar.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
