//para cargar los datos una vez se abra la pág...
document.addEventListener("DOMContentLoaded", function () {
    cargarDatos();
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
        //se setea atributo a la fila...
        newRideRowRef.setAttribute("Nombre-Ride", listaRides[i].ridename)
        //a la fila se le agrega una nueva celda
        let newCellRef = newRideRowRef.insertCell(0);
        newCellRef.textContent = listaRides[i].ridename;

        newCellRef = newRideRowRef.insertCell(1);
        newCellRef.textContent = listaRides[i].from;

        newCellRef = newRideRowRef.insertCell(2);
        newCellRef.textContent = listaRides[i].to;

        newCellRef = newRideRowRef.insertCell(3);
        newCellRef.textContent = listaRides[i].departure;

        newCellRef = newRideRowRef.insertCell(4);
        newCellRef.textContent = listaRides[i].arrival;

        newCellRef = newRideRowRef.insertCell(5);
        newCellRef.textContent = listaRides[i].days;

        // acá se inserta el botón y el evento de escucha para el mismo...
        let newdeleteCell = newRideRowRef.insertCell(6);
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        newdeleteCell.appendChild(deleteButton);

        deleteButton.addEventListener("click", (event) => {
            let rideRow = event.target.parentNode.parentNode;
            //para recuperar el valor de la celda donde está el índice en la tabla...
            let atributo_rideName = rideRow.getAttribute("Nombre-Ride");
            rideRow.remove();

            deleteRide(atributo_rideName)

        })
    }
}

function deleteRide(rideName) {
    let listaRides = recuperarDataRides();

    //Devuelve -1 si no hay coincidencia.... ojo!
    rideIndexInArray = listaRides.findIndex(element => element.ridename === rideName);

    listaRides.splice(rideIndexInArray, 1);

    let RidesArrayJ = JSON.stringify(listaRides);
    localStorage.setItem("DataRides", RidesArrayJ);

    //Alternativa creando Array filtradoi (poco ágil...)
    //let newrides = listaRides.filter(element => element.ridename !== rideName)
}


