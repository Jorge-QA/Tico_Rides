//para cargar los datos una vez se abra la pág...
document.addEventListener("DOMContentLoaded", function () {
    pintarUsuario();
    cargarNombre();
});

function pintarUsuario() {
    let usuario = localStorage.getItem("UsuarioCargado");
    let campoUsuario = document.getElementById("usuario");
    campoUsuario.innerText = usuario;
}

// guarda objetos settings en local storage en un array
function guardarSetting(setting) {
    let settingArray = JSON.parse(localStorage.getItem("DataSettings")) || [];
    settingArray.push(setting);
    let settingArrayJ = JSON.stringify(settingArray);
    localStorage.setItem("DataSettings", settingArrayJ);
}

function recuperarDataSetting() {
    let listSetting = JSON.parse(localStorage.getItem("DataSettings")) || [];
    return listSetting;
    //alert(listaRides[3].description + "    " + listaRides[4].ridename);
}


// Algo pasa acá...
function deleteSetting(usuario) {
    let listaSettings = recuperarDataSetting();

    //Devuelve -1 si no hay coincidencia.... ojo!
    settingIndexInArray = listaSettings.findIndex(element => element.usuario === usuario);
    if (settingIndexInArray != -1) {
        listaSettings.splice(settingIndexInArray, 1);
        let SettingArrayJ = JSON.stringify(listaSettings);
        localStorage.setItem("DataSettings", SettingArrayJ);
    }
}

function registrarSetting() {
    let speed = document.getElementById("SA").value;
    let about = document.getElementById("TA").value;
    let usuario = localStorage.getItem("UsuarioCargado");

    if (speed != "" & about != "") {
        let setting = { "usuario": usuario, "speed": speed, "about": about };
        deleteSetting(usuario);
        guardarSetting(setting);
        alert("La información se ha actualizado con éxito...");
    } else {
        alert("Ingrese todos los datos solicitados por favor...");
    }
}

//carga el nombre y los datos si los hay, en el imput...
function cargarNombre() {
    let usuario = localStorage.getItem("UsuarioCargado");
    datosUsuario(usuario);
    let listaPersonas = JSON.parse(localStorage.getItem("DataPersonas")) || [];
    for (let i = 0; i < listaPersonas.length; i++) {
        if (listaPersonas[i].usuario == usuario) {
            document.getElementById("FN").value = listaPersonas[i].nombre + " " + listaPersonas[i].apellido;
            break;
        }
    }
}

// dentro de cargar nombre...
function datosUsuario(usuario) {
    let settings = recuperarDataSetting()
    for (let i = 0; i < settings.length; i++) {
        if (settings[i].usuario == usuario) {
            document.getElementById("SA").value = settings[i].speed;
            document.getElementById("TA").value = settings[i].about;
            break;
        }
    }
}