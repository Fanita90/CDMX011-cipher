import cipher from './cipher.js';

const codifica = () => {
    let string = document.getElementById("string").value;
    let offset = document.getElementById("offset").value;
    cipher.encode(string, offset);
}

console.log(cipher);
