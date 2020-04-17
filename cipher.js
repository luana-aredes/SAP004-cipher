const numberOfLettersAlphabet = "26";
const firstCapitalLetter = "A".charCodeAt();
const lastCapitalLetter = "Z".charCodeAt();
const firstLowerLetter = "a".charCodeAt();
const lastLowercaseLetter = "z".charCodeAt();
let letterPositionOffset = "";


const cipher = {

  encode: (offset, message) => {
    if (typeof offset !== "number" || offset <= 0 || typeof message !== "string" || message === "") {
      throw TypeError("Verifique se os campo estão preenchidos corretamente.");
    }

    let cipheredMessage = "";

    for (const messages of message) {
      let letterPosition = messages.charCodeAt();

      if (letterPosition >= firstCapitalLetter && letterPosition <= lastCapitalLetter) {
        letterPositionOffset = (((letterPosition - firstCapitalLetter) + offset) % numberOfLettersAlphabet) + firstCapitalLetter;
        let letterCipher = String.fromCharCode(letterPositionOffset);
        if (letterCipher !== " ") {
          cipheredMessage += letterCipher;
        } else {
          cipheredMessage += "";
        }

      } else if (letterPosition >= firstLowerLetter && letterPosition <= lastLowercaseLetter) {
        letterPositionOffset = (((letterPosition - firstLowerLetter) + offset) % numberOfLettersAlphabet) + firstLowerLetter;
        let letterDecipher = String.fromCharCode(letterPositionOffset);
        if (letterDecipher !== " ") {
          cipheredMessage += letterDecipher;
        } else {
          cipheredMessage += "";
        }

      } else {
        cipheredMessage += String.fromCharCode(letterPosition);
      }
    }
    return cipheredMessage;
  },


  decode: (offset, message) => {
    if (typeof offset !== "number" || offset <= 0 || typeof message !== "string" || message === "") {
      throw TypeError("Por favor, verifique se os campo estão preenchidos corretamente.");
    }

    let decipheredMessage = "";

    for (const messages of message) {
      let letterPosition = messages.charCodeAt();
      if (letterPosition >= firstCapitalLetter && letterPosition <= lastCapitalLetter) {
        let letterPositionOffset = (((letterPosition - lastCapitalLetter) - offset) % numberOfLettersAlphabet) + lastCapitalLetter;
        let letterDecipher = String.fromCharCode(letterPositionOffset);
        if (letterDecipher !== " ") {
          decipheredMessage += letterDecipher;
        } else {
          decipheredMessage += "";
        }

      } else if (letterPosition >= firstLowerLetter && letterPosition <= lastLowercaseLetter) {
        const letterPositionOffset = (((letterPosition - lastLowercaseLetter) - offset) % numberOfLettersAlphabet) + lastLowercaseLetter;
        let letterDecipher = String.fromCharCode(letterPositionOffset);
        if (letterDecipher !== " ") {
          decipheredMessage += letterDecipher;
        } else {
          decipheredMessage += "";
        }

      } else {
        decipheredMessage += String.fromCharCode(letterPosition);
      }
    }
    return decipheredMessage;
  }
}

export default cipher;
