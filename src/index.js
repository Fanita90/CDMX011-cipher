import cipher from './cipher.js'; //vanilla js

/*Evento creado para botón cifrar*/
document.getElementById("cifrar").addEventListener("click", (event) => {
    event.preventDefault();//Quita el comportamiento que un boton tiene por default.

    /*Variable para obtener el valor del id string/cadena*/
    let string = document.getElementById("string").value;

    /*Condicional para espacio vacio en string*/
    if (string == "") {
        alert("Rellena el campo de texto");
    }

    /*Variable para obtener el valor del id offset/desplazamiento*/
    let offset = document.getElementById("offset").value;

    /*convertimos el argumento de offset a número*/
    offset = parseInt(offset);

    /*Guardamos función en variable resultado*/
    let resultado = cipher.encode(offset, string);

    /*Variable para mostrar resultado en el cuadro de texto de id= string*/
    let mostrarResultado = document.getElementById("string")
    mostrarResultado.value = resultado;
})

/*Evento creado para botón descifrar*/
document.getElementById("descifrar").addEventListener("click", (event) => {
    event.preventDefault();
    /*Variable para obtener el valor del id string/cadena*/
    let string = document.getElementById("string").value;

    /*Variable para obtener el valor del id offset/desplazamiento*/
    let offset = document.getElementById("offset").value;

    /*convertimos el argumento de ofset a número*/
    offset = parseInt(offset);

    /*Guardamos función en variable resultado*/
    let resultado = cipher.decode(offset, string);

    /*Variable para mostrar resultado en el cuadro de texto de id= string*/
    let mostrarResultado = document.getElementById("string")
    mostrarResultado.value = resultado;

})

