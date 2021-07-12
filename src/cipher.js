const cipher = {

  encode: function (offset, string) {
    /*Eliminamos espacios en blanco antes o después de la cadena con método .trim*/
    string = string.trim();
    let result = "";// Variable que guardará resultado
    let newValor = 0;//Guardará el código ascii de cada valor de la cadena si cumple con alguna condición.

    /*Recorremos cadena y aplicamos charCodeAt para que regrese valor ascii en variable.*/
    for (let i = 0; i < string.length; i++) {
      let stringAscii = string.charCodeAt(i);

      /*Condicionamos variable dentro de un rango de >=65 && <91 para obtener MAYÚSCULAS*/
      if ((stringAscii >= 65) && (stringAscii < 91)) {
        /*Si condición:true aplicamos fórmula*/
        newValor = ((stringAscii - 65 + offset) % 26) + 65;
      }
      /*Condicionamos variable dentro de un rango de >=97 && <123 para obtener MINUSCULAS*/
      else if ((stringAscii >= 97) && (stringAscii < 123)) {
        /*Si condición:true aplicamos fórmula*/
        newValor = ((stringAscii - 97 + offset) % 26) + 97;
      }
      /*Si ninguna de las condiciones se cumple,entonces aplicamos fórmula para ESPACIOS*/
      else {
        newValor = ((stringAscii - 32 + offset) % 1) + 32;
      }

      /*a cada valor ascii de nuestra cadena, aplicamos string.fromCarcode para que nos retorne la letra que le corresponde*/
      let newString = String.fromCharCode(newValor);

      /*concatenamos todos las letras nuevas y las guardamos en resultado.*/
      result += newString;

    }
    /*Retornamos el resultado de la cadena con las letras ya sustituidas*/
    return result;
  },



  decode: function (offset, string) {
    string = string.trim();

    let result = ""; //Variable que guardará resultado
    let newValor = 0;//Guardará el código ascii de cada valor de la cadena si cumple con alguna condición.

    /*Recorremos cadena y aplicamos charCodeAt para que regrese valor ascii en variable.*/
    for (let i = 0; i < string.length; i++) {
      let stringAscii = string.charCodeAt(i);

      /*Condicionamos variable dentro de un rango de >=65 && <91 para obtener MAYÚSCULAS*/
      if ((stringAscii >= 65) && (stringAscii < 91)) {
        newValor = (stringAscii + 65 - offset) % 26 + 65;
      }
      /*Condicionamos variable dentro de un rango de >=97 && <123 para obtener MINUSCULAS*/
      else if ((stringAscii >= 97) && (stringAscii < 123)) {
        newValor = (stringAscii - 97 + (26 - offset)) % 26 + 97;
      }

      /*Si ninguna de las condiciones se cumple,entonces aplicamos fórmula para ESPACIOS*/
      else {
        newValor = (stringAscii - 32 + (1 - offset) % 1) + 32;

      }
      /*a cada valor ascii de nuestra cadena, aplicamos string.fromCarcode para que nos retorne la letra que le corresponde*/
      let newString = String.fromCharCode(newValor);


      result += newString;
    }
    return result;
  }

};
export default cipher;