function registrar() {
    //Dif fromas de obtener campos de input y form...
    let PersonaFormData = new FormData(form);

    let nombre = PersonaFormData.get("FN");

    //let nombre = form.querySelector("#FN").value;
    //let nombre = document.getElementById("FN").value;
    let apellido = document.getElementById("LN").value;
    let telefono = document.getElementById("P").value;
    let usuario = document.getElementById("UN").value;
    let clave1 = document.getElementById("Ps1").value;
    let clave2 = document.getElementById("Ps2").value;

    if (nombre != "" & apellido != "" & telefono != "" & usuario != "" & clave1 != "" & clave2 != "") {

        if (!usuarioExistente(usuario)) {
            if (clave1 == clave2) {
                let persona = { "nombre": nombre, "apellido": apellido, "telefono": telefono, "usuario": usuario, "clave": clave1 };
                guardarpersona(persona);
                alert("Hola " + persona.nombre + " " + persona.apellido + " te damos la bienvenida a TicoRides \n" +
                    "Tu registro se ha completado con éxito...");
                limpiarCampos();
            } else {
                alert("Claves no coinciden, verifique la información...");
            }
        } else {
            alert("Nombre de usuario ya registrado...");
        }
    } else {
        alert("Ingrese todos los datos solicitados por favor...");
    }
}

// guarda objetos tipo persona en local storage en un array
function guardarpersona(persona) {
    let PersonArray = JSON.parse(localStorage.getItem("DataPersonas")) || [];
    PersonArray.push(persona);
    let PersonArrayJ = JSON.stringify(PersonArray);
    localStorage.setItem("DataPersonas", PersonArrayJ);
}

function limpiarCampos() { // limpia formulario de registro... lo hace automático si no se agrega el preventDefault...
    // document.getElementById("FN").value = "";
    form.reset();
}
//acá se recupera la lista de objetos tipo persona...si usar...
function recuperarDataPersonas() {
    let listaPersonas = JSON.parse(localStorage.getItem("DataPersonas") || []);
    return listaPersonas;
}

//para evitar el recargo de la página...

const form = document.getElementById("formregister");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    //console.log(event);
    //alert("Se detectó un envío de formulario...");
})

function usuarioExistente(usuario) {
    let existente = false;
    let Personas = recuperarDataPersonas();
    for (let i = 0; i < Personas.length; i++) {
        if (Personas[i].usuario == usuario) {
            existente = true;
            return existente;
        }
    }
    return existente;
}
