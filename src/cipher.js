const cipher = {

  encode: (offset, message) => {
    if (typeof offset != "number" || offset <= 0) {
      throw TypeError("Offset deve ser numérico e maior que zero.");
    }

    if (typeof message != "string" || message.length <= 0) {
      throw TypeError("Message deve ser um texto e possuir mais do que 1 caractere");
    }

    let initialMessage = message;
    let letterOffset = offset;
    let cipheredMessage = "";

    for (var contador = 0; contador < initialMessage.length; contador++) {
      let letterPosition = initialMessage.charCodeAt(contador);
      let letterPositionOffset = (((letterPosition - 65) + letterOffset) % 26) + 65;
      let letterDecipher = String.fromCharCode(letterPositionOffset);
      cipheredMessage += letterDecipher;
    }

    return cipheredMessage;
  },

  decode: (offset, message) => {
    if (typeof offset != "number" || offset <= 0) {
      throw TypeError("Offset deve ser numérico e maior que zero.");
    }

    if (typeof message != "string" || message.length <= 0) {
      throw TypeError("Message deve ser um texto e possuir mais do que 1 caractere");
    }

    let decipheredMessage = "";

    for (var counter = 0; counter < message.length; counter++) {
      let letterPosition = message.charCodeAt(counter);
      let letterPositionOffset = (((letterPosition + 65) - offset) % 26) + 65;
      let letterDecipher = String.fromCharCode(letterPositionOffset);
      decipheredMessage += letterDecipher;
    }

    return decipheredMessage;
  }

};

export default cipher;
