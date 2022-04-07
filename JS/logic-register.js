function registrar() {
    let nombre = document.getElementById("FN").value;
    let apellido = document.getElementById("LN").value;
    let telefono = document.getElementById("P").value;
    let usuario = document.getElementById("UN").value;
    let clave1 = document.getElementById("Ps1").value;
    let clave2 = document.getElementById("Ps2").value;

    let persona = { "nombre": nombre, "apellido": apellido, "telefono": telefono, "usuario": usuario, "clave": clave1 };
    guardarpersona(persona);

    limpiarCampos();
    recuperarDataPersonas();
}

// guarda objetos tipo persona en local storage en un array
function guardarpersona(persona) {
    let PersonArray = JSON.parse(localStorage.getItem("DataPersonas")) || [];
    PersonArray.push(persona);
    let PersonArrayJ = JSON.stringify(PersonArray);
    localStorage.setItem("DataPersonas", PersonArrayJ);
}

function limpiarCampos() { // limpia formulario de registro
    document.getElementById("FN").value = "";
    document.getElementById("LN").value = "";
    document.getElementById("P").value = "";
    document.getElementById("UN").value = "";
    document.getElementById("Ps1").value = "";
    document.getElementById("Ps2").value = "";
}
//acá se recupera la lista de objetos tipo persona...
function recuperarDataPersonas() {
    let listaPersonas = JSON.parse(localStorage.getItem("DataPersonas") || []);
    alert(listaPersonas[1].nombre);
}