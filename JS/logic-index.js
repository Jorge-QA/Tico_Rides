//para evitar el recargo de la página...

const form = document.getElementById("formSearchRide");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    //console.log(event);
    //alert("Se detectó un envío de formulario...");
})

//para cargar los datos una vez se abra la pág...
document.addEventListener("DOMContentLoaded", function () {
     //cargarDatos();
    cargarCombos();
});

function recuperarDataRides() {
    let listaRides = JSON.parse(localStorage.getItem("DataRides")) || [];
    return listaRides;
    //alert(listaRides[3].description + "    " + listaRides[4].ridename);
}

function cargarDatos() {
    let listaRides = ridesPorParametro();

    let tableSearchRide = document.getElementById("tableSearchRide");

    for (let i = 0; i < listaRides.length; i++) {

        //a la tabla se le agrega una nueva filas
        let newRideRowRef = tableSearchRide.insertRow(-1);
        //a la fila se le agrega una nueva celda
        let newCellRef = newRideRowRef.insertCell(0);
        newCellRef.textContent = listaRides[i].usuario;

        newCellRef = newRideRowRef.insertCell(1);
        newCellRef.textContent = listaRides[i].from;

        newCellRef = newRideRowRef.insertCell(2);
        newCellRef.textContent = listaRides[i].to;

        newCellRef = newRideRowRef.insertCell(3);
        newCellRef.textContent = listaRides[i].ridename;

        newCellRef = newRideRowRef.insertCell(4);
        newCellRef.textContent = listaRides[i].departure;

        newCellRef = newRideRowRef.insertCell(5);
        newCellRef.textContent = listaRides[i].arrival;

        newCellRef = newRideRowRef.insertCell(6);
        newCellRef.textContent = listaRides[i].days;

        newCellRef = newRideRowRef.insertCell(7);
        newCellRef.textContent = listaRides[i].description;

    }

}

function cargarCombos() {
    let selectFrom = document.getElementById("from");
    let selectTo = document.getElementById("to");

    let Fcom = fromCombo();
    let Tcom = toCombo();

    for (let i = 0; i < Fcom.length; i++) {
        selectFrom.options[i] = new Option(Fcom[i], Fcom[i]);
    }
    for (let i = 0; i < Tcom.length; i++) {
        selectTo.options[i] = new Option(Tcom[i], Tcom[i]);
    }

}

function fromCombo() {
    let listaRides = recuperarDataRides();
    let fromArray = [];
    for (let i = 0; i < listaRides.length; i++) {
        fromArray.push(listaRides[i].from);
    }
    let result = fromArray.filter((item, index) => {
        return fromArray.indexOf(item) === index;
    })
    return result;
}

function toCombo() {
    let listaRides = recuperarDataRides();
    let toArray = [];
    for (let i = 0; i < listaRides.length; i++) {
        toArray.push(listaRides[i].to);
    }
    let result = toArray.filter((item, index) => {
        return toArray.indexOf(item) === index;
    })
    return result;
}

//Crea arreglo de rides con parametros seleccionados de combos...
function ridesPorParametro() {
    let comboFrom = document.getElementById("from");
    let FromSelected = comboFrom.options[comboFrom.selectedIndex].text;

    let comboTo = document.getElementById("to");
    let ToSelected = comboTo.options[comboTo.selectedIndex].text;

    let listaRides = recuperarDataRides();
    let rides = [];

    for (let i = 0; i < listaRides.length; i++) {
        if (listaRides[i].from == FromSelected & listaRides[i].to == ToSelected) {
            rides.push(listaRides[i]);
        }
    }
return rides;
}
