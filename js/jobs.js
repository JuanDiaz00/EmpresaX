document.addEventListener("DOMContentLoaded", function (event) {
    var divSaludos = document.getElementById("jobs");
    var array = [];
    if (localStorage.getItem("arraySaludos") == null) {
        array = [];
        localStorage.setItem("arraySaludos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arraySaludos"));
    }
    var listadoSaludos = JSON.parse(localStorage.getItem("arraySaludos"));
    var divSaludos = document.getElementById("jobs");
    listadoSaludos.forEach(element => {
        divSaludos.innerHTML = divSaludos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre"] + ' dice: </h5><p>' + element["saludo"] + '</p></div></div>';
    });
    return false;
});

function registrarTrabajo() {
    var texto = document.getElementById("texto_opinion");
    var nombre = document.getElementById("nombre");
    var array = [];
    if (localStorage.getItem("arraySaludos") == null) {
        array = [];
        localStorage.setItem("arraySaludos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arraySaludos"));
    }
    array.push({ "saludo": texto.value, "nombre": nombre.value });
    localStorage.setItem("arraySaludos", JSON.stringify(array));
    var listadoSaludos = JSON.parse(localStorage.getItem("array"));
    var divSaludos = document.getElementById("jobs");
    listadoSaludos.forEach(element => {
        divSaludos.innerHTML = divSaludos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre"] + ' dice: </h5><p>' + element["saludo"] + '</p></div></div>';
    });
    return false;
}