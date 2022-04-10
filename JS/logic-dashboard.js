//para cargar los datos una vez se abra la pág...
document.addEventListener("DOMContentLoaded", function () {
   cargarDatos();
});

function recuperarDataRides() {
    let listaRides = JSON.parse(localStorage.getItem("DataRides")) || [];
    return listaRides;
    //alert(listaRides[3].description + "    " + listaRides[4].ridename);
}

function ridesPorUsuario() {
    let usuario = localStorage.getItem("UsuarioCargado");

    let listaRides = recuperarDataRides();
    let rides = [];

    for (let i = 0; i < listaRides.length; i++) {
        if (listaRides[i].usuario == usuario) {
            rides.push(listaRides[i]);
        }
    }
return rides;
}

function cargarDatos() {
    let listaRides = ridesPorUsuario();

    let tableRidesUsuario = document.getElementById("tableRidesUsuario");

    for (let i = 0; i < listaRides.length; i++) {

        //a la tabla se le agrega una nueva filas
        let newRideRowRef = tableRidesUsuario.insertRow(-1);
        //a la fila se le agrega una nueva celda
        let newCellRef = newRideRowRef.insertCell(0);
        newCellRef.textContent = listaRides[i].ridename;

        newCellRef = newRideRowRef.insertCell(1);
        newCellRef.textContent = listaRides[i].from;

        newCellRef = newRideRowRef.insertCell(2);
        newCellRef.textContent = listaRides[i].to;

    }

}