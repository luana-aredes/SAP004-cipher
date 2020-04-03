const cipher = {

  encode: (offset, message) => {
    if (message.length <= 0) {
      return;
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

  decode: (offsettodecipher, messagetodedecipher) => {
    if (messagetodedecipher.length <= 0) {
      return;
    }

    let messageToDecipher = messagetodedecipher;
    let letterOffset = offsettodecipher;

    let decipheredMessage = "";

    for (var contador = 0; contador < messageToDecipher.length; contador++) {
      if ((letterPosition - 65) < letterOffset) {
        let letterPosition = messageToDecipher.charCodeAt(contador);
        let letterPositionOffset = (((letterPosition - 65) - letterOffset) + 26) + 65;
        let letterDecipher = String.fromCharCode(letterPositionOffset);
      } else {
        let letterPosition = messageToDecipher.charCodeAt(contador);
        let letterPositionOffset = (((letterPosition - 65) - letterOffset) % 26) + 65;
        let letterDecipher = String.fromCharCode(letterPositionOffset);
      }

      decipheredMessage += letterDecipher;
    }
    return decipheredMessage;
  }

};

export default cipher;
