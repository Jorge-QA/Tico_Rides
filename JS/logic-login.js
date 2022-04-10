function login() {

    let usuario = document.getElementById("NM").value;
    let clave = document.getElementById("Ps").value;

    let Personas = recuperarDataPersonas();

    if (usuario != "" & clave != "") {
        if (registrado(usuario, clave, Personas)) {
            alert("Bienvenid@ " + usuario);
            //location.href = "dashboard.html";
            localStorage.setItem("UsuarioCargado", usuario);
            window.open("dashboard.html");
            window.close("login.html");
        }else{
            alert("Usuario no registrado o clave incorrecta...");
        }
    } else {
        alert("Debe de ingresar valores...");
    }

}

function registrado(usuario, clave, Personas) {
    let registrado = false;
    for (let i = 0; i < Personas.length; i++) {
        if (Personas[i].usuario == usuario & Personas[i].clave == clave) {
            registrado = true;
            return registrado;
        }
    }
    return registrado;
}

function recuperarDataPersonas() {
    let listaPersonas = JSON.parse(localStorage.getItem("DataPersonas")) || [];
    return listaPersonas;
}


// let usuario = document.getElementById("NM").value;
// let clave = document.getElementById("Ps").value;

// let Personas = recuperarDataPersonas();

// if (usuario != "" & clave != "") {
//     for (let i = 0; i < Personas.length; i++) {
//         if (Personas[i].usuario == usuario & Personas[i].clave == clave) {
//             alert("Bienvenido " + Personas[i].nombre + " " + Personas[i].apellido);
//             window.open("dashboard.html");
//             break;
//         }
//     }
//     alert("Usuario no registrado o clave incorrecta...");
// }else{
//     alert("Debe de ingresar valores...");
