import cipher from './cipher.js';

document.getElementById("cifrar").addEventListener("click", (event) => {
    event.preventDefault();
    let string = document.getElementById("string").value;
    if (string == "") {
        alert("Rellena el campo de texto");
    }

    else if (typeof string === Number) {
        alert("Solo se aceptan letras");
    }
    let offset = document.getElementById("offset").value;
    offset = parseInt(offset);

    let resultado = cipher.encode(offset, string);
    let mostrarResultado = document.getElementById("string")
    mostrarResultado.value = resultado;
})

document.getElementById("descifrar").addEventListener("click", (event) => {
    event.preventDefault();
    let string = document.getElementById("string").value;

    let offset = document.getElementById("offset").value;
    offset = parseInt(offset);

    let resultado = cipher.decode(offset, string);
    let mostrarResultado = document.getElementById("string")
    mostrarResultado.value = resultado;

})

