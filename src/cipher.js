const cipher = {

  encode: function (offset, string) {
    string = string.trim();//

    let result = ""; //Variable que guardará resultado
    let newValor = 0;
    //for: recorre nuestra cadena y aplicamos charCodeAt para que nos regrese el valor ascii en la variable stringAscii
    for (let i = 0; i < string.length; i++) {
      let stringAscii = string.charCodeAt(i);
      //si nuestra variable stringAscii se encuentra en el rango 65-91 entonces es mayúscula y aplicamos la formula
      if ((stringAscii >= 65) && (stringAscii < 91)) {
        newValor = ((stringAscii - 65 + offset) % 26) + 65;
      }
      /*si nuestra variable stringAscii se e 
      ncuentra en el rango de 97-123 entonces es minúscula y 
      aplicamos la siguiente fórmula, el valor de 65 cambia a 97 porque en ascii es donde empieza en abecedario en minúsculas,
      y termina en el 123*/
      else if ((stringAscii >= 97) && (stringAscii < 123)) {
        newValor = ((stringAscii - 97 + offset) % 26) + 97;
      }
      /*si no es mayuscula o minúscula, entonces es un espacio, que en ascii se encuentra en la posición 32, 
      lo ponemos en módulo 1 porque no se desplazará y solo necesitamos el valor 32*/
      else {
        newValor = ((stringAscii - 32 + offset) % 1) + 32;
      }
      /*Obtenemos el valor ascii de nuestra cadena y la desencriptamos*/
      let newString = String.fromCharCode(newValor);
      //concatenamos todos las letras nuevas y las guardamos en resultado.
      result += newString;
    }//cierre for
    //Retornamos el resultado de la cadena con las letras ya sustituidas

    return result;
  },





  decode: function (offset, string) {
    string = string.trim();

    let result = ""; //Variable que guardará resultado
    let newValor = 0;

    for (let i = 0; i < string.length; i++) {
      let stringAscii = string.charCodeAt(i);

      if ((stringAscii >= 65) && (stringAscii < 91)) {
        newValor = ((stringAscii - 65 + (26 - offset)) % 26) + 65;


      }

      else if ((stringAscii >= 97) && (stringAscii < 123)) {
        newValor = ((stringAscii - 97 + (26 - offset)) % 26) + 97;

      }

      else {
        newValor = ((stringAscii - 32 + (26 - offset)) % 1) + 32;

      }

      let newString = String.fromCharCode(newValor);


      result += newString;
    }
    return result;
  }

};
export default cipher;