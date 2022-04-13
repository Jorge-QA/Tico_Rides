//para cargar los datos una vez se abra la pág...
document.addEventListener("DOMContentLoaded", function () {
    pintarUsuario();
});

function pintarUsuario() {
    let usuario = localStorage.getItem("UsuarioCargado");
    let campoUsuario = document.getElementById("usuario");
    campoUsuario.innerText = usuario;
}