//para cargar los datos una vez se abra la pág...
document.addEventListener("DOMContentLoaded", function () {
    pintarUsuario();

});

function pintarUsuario() {
    let usuario = localStorage.getItem("UsuarioCargado");
    let campoUsuario = document.getElementById("usuario");
    campoUsuario.innerText = usuario;
}

function registrarRide() {

    let dias =Dias();

    let ridename = document.getElementById("RN").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let description = document.getElementById("Dp").value;
    let departure = document.getElementById("Dep").value;
    let arrival = document.getElementById("EA").value;

    let usuario = localStorage.getItem("UsuarioCargado");


    if (ridename != "" & from != "" & to != "" & description != "" & departure != "" & arrival != "" & dias != "") {
        if (!RideExistente(ridename)) {
               let ride = { "usuario": usuario, "ridename": ridename, "from": from, "to": to, "description": description, "departure": departure, "arrival": arrival, "days": dias };
        guardarRide(ride);
        alert(ridename + " se ha guardado con éxito...");
        limpiarCampos();
        }else{
            alert("Nombre de ride ya registrado...");
        }
    } else {
        alert("Ingrese todos los datos solicitados por favor...");
    }
}

// guarda objetos ride persona en local storage en un array
function guardarRide(ride) {
    let RidesArray = JSON.parse(localStorage.getItem("DataRides")) || [];
    RidesArray.push(ride);
    let RidesArrayJ = JSON.stringify(RidesArray);
    localStorage.setItem("DataRides", RidesArrayJ);
}

function limpiarCampos() { // limpia formulario de registro...
    document.getElementById("RN").value = "";
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("Dp").value = "";
    document.getElementById("Dep").value = "";
    document.getElementById("EA").value = "";

    document.getElementById("Sunday").checked = false;
    document.getElementById("Monday").checked = false;
    document.getElementById("Tuesday").checked = false;
    document.getElementById("Wednesday").checked = false;
    document.getElementById("Thursday").checked = false;
    document.getElementById("Friday").checked = false;
    document.getElementById("Saturday").checked = false;
}

function Dias() {
    dias = [];
    Sunday = document.getElementById("Sunday").checked;
    if (Sunday) {
        dias.push("Sunday");
    }
    Monday = document.getElementById("Monday").checked;
    if (Monday) {
        dias.push("Monday");
    }
    Tuesday = document.getElementById("Tuesday").checked;
    if (Tuesday) {
        dias.push("Tuesday");
    }
    Wednesday = document.getElementById("Wednesday").checked;
    if (Wednesday) {
        dias.push("Wednesday");
    }
    Thursday = document.getElementById("Thursday").checked;
    if (Thursday) {
        dias.push("Thursday");
    }
    Friday = document.getElementById("Friday").checked;
    if (Friday) {
        dias.push("Friday");
    }
    Saturday = document.getElementById("Saturday").checked;
    if (Saturday) {
        dias.push("Saturday");
    }

return dias;

}

function recuperarDataRides() {
    let listaRides = JSON.parse(localStorage.getItem("DataRides")) || [];
    return listaRides;
    //alert(listaRides[3].description + "    " + listaRides[4].ridename);
}

function RideExistente(ride) {
    let existente = false;
    let Rides = recuperarDataRides();
    for (let i = 0; i < Rides.length; i++) {
        if (Rides[i].ridename == ride) {
            existente = true;
            return existente;
        }
    }
    return existente;
}

