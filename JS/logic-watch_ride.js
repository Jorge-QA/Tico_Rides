
//para cargar los datos una vez se abra la pág...
document.addEventListener("DOMContentLoaded", function () {
    cargarCombo();
    mostrarRide();
    pintarUsuario();
});

function pintarUsuario() {
    let usuario = localStorage.getItem("UsuarioCargado");
    let campoUsuario = document.getElementById("usuario");
    campoUsuario.innerText = usuario;
}
function recuperarDataRides() {
    let listaRides = JSON.parse(localStorage.getItem("DataRides")) || [];
    return listaRides;
    //alert(listaRides[3].description + "    " + listaRides[4].ridename);
}

function ridesExistentesUsuario() {
    let listaRides = recuperarDataRides();
    let usuario = localStorage.getItem("UsuarioCargado");
    let rides = [];
    for (let i = 0; i < listaRides.length; i++) {
        if (listaRides[i].usuario == usuario) {
            rides.push(listaRides[i].ridename);
        }
    }
    return rides;
}

function cargarCombo() {
    let ComboRides = document.getElementById("RN");

    let ridesExistentes = ridesExistentesUsuario();

    for (let i = 0; i < ridesExistentes.length; i++) {
        ComboRides.options[i] = new Option(ridesExistentes[i], ridesExistentes[i]);
    }
}

function ridePorParametro() {
    let ComboRides = document.getElementById("RN");
    let listaRides = recuperarDataRides();
    let ride = [];
    if (!ComboRides.length == 0) {
        let rideSelected = ComboRides.options[ComboRides.selectedIndex].text;

        for (let i = 0; i < listaRides.length; i++) {
            if (listaRides[i].ridename == rideSelected) {
                ride.push(listaRides[i]);
                break;
            }
        }
    }
    return ride;
}

function mostrarRide() {
    let ride = ridePorParametro();
    if (ride != "") {
        limpiarCheckBox();
        document.getElementById("from").value = ride[0].from;
        document.getElementById("to").value = ride[0].to;
        document.getElementById("Dp").value = ride[0].description;
        document.getElementById("Dep").value = ride[0].departure;
        document.getElementById("EA").value = ride[0].arrival;
        diasSeleccionados(ride);
    }

}

function diasSeleccionados(ride) {
    dias = ride[0].days;

    for (let i = 0; i < dias.length; i++) {
        switch (dias[i]) {
            case "Sunday":
                document.getElementById("Sunday").checked = true;
                break;
            case "Monday":
                document.getElementById("Monday").checked = true;
                break;
            case "Tuesday":
                document.getElementById("Tuesday").checked = true;
                break;
            case "Wednesday":
                document.getElementById("Wednesday").checked = true;
                break;
            case "Thursday":
                document.getElementById("Thursday").checked = true;
                break;
            case "Friday":
                document.getElementById("Friday").checked = true;
                break;
            case "Saturday":
                document.getElementById("Saturday").checked = true;
                break;
            default:
                break;
        }
    }
}

function limpiarCheckBox() {
    document.getElementById("Sunday").checked = false;
    document.getElementById("Monday").checked = false;
    document.getElementById("Tuesday").checked = false;
    document.getElementById("Wednesday").checked = false;
    document.getElementById("Thursday").checked = false;
    document.getElementById("Friday").checked = false;
    document.getElementById("Saturday").checked = false;
}
