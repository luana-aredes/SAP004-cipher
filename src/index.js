import cipher from "./cipher.js";

let initialMessage = document.getElementById("txtmensage");
let letterOffset = document.getElementById("offsetnumber");
let buttonCipher = document.getElementById("buttoncipher");
let buttonDecipher = document.getElementById("buttondecipher");


buttonCipher.onclick = () => {
    let encryptedMessage = cipher.encode(parseInt(letterOffset.value), initialMessage.value.toUpperCase());
    initialMessage.value = encryptedMessage;
  },

  buttonDecipher.onclick = () => {
    let decipheredMessage = cipher.decode(parseInt(letterOffset.value), initialMessage.value);
    initialMessage.value = decipheredMessage;
  };
