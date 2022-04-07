function registrar(){
    let nombre = document.getElementById("FN").value;
    let apellido = document.getElementById("LN").value;
    let telefono = document.getElementById("P").value;
    let usuario = document.getElementById("UN").value;
    let clave1 = document.getElementById("Ps1").value;
    let clave2 = document.getElementById("Ps2").value;

    let obj = {"nombre": nombre, "apellido": apellido, "telefono": telefono, "usuario": usuario, "clave": clave1}

    let obj_J = JSON.stringify(obj);

    localStorage.setItem(obj.nombre, obj_J);

    alert(nombre + "\n" + apellido + "\n" + telefono + "\n" + usuario + "\n" + clave1 + "\n" + clave2);

    // document.getElementById("LN").value = nombre;  para ponerle texto al input....
    limpiarCampos();
}

function limpiarCampos(){
    document.getElementById("FN").value = "";
    document.getElementById("LN").value = "";
    document.getElementById("P").value = "";
    document.getElementById("UN").value = "";
    document.getElementById("Ps1").value = "";
    document.getElementById("Ps2").value = "";
}