document.addEventListener("DOMContentLoaded", function(event) {
    var divProductos = document.getElementById("services");
    var array = [];
    if (localStorage.getItem("arrayProductos") == null) {
        array = [];
        localStorage.setItem("arrayProductos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("array"));
    }
    var listadoProductos = JSON.parse(localStorage.getItem("arrayProductos"));
    var divProductos = document.getElementById("services");
    listadoProductos.forEach(element => {
        divProductos.innerHTML = divProductos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre_producto"] + '</h5></div></div>';
    });
    return false;
});

function registrarServicio() {
    var nombre = document.getElementById("nombre_producto");
    var array = [];
    if (localStorage.getItem("arrayProductos") == null) {
        array = [];
        localStorage.setItem("arrayProductos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayProductos"));
    }
    array.push({ "nombre_producto": nombre.value });
    localStorage.setItem("arrayProductos", JSON.stringify(array));
    var listadoProductos = JSON.parse(localStorage.getItem("arrayProductos"));
    var divProductos = document.getElementById("services");
    listadoProductos.forEach(element => {
        divProductos.innerHTML = divProductos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre_producto"] + ' </h5></div></div>';
    });
    document.getElementById("info1productos").style = "display:block;";
    return false;
}