import cipher from "./cipher.js";

const message = document.getElementById("txtmensage");
const offset = document.getElementById("offset-number");

document.getElementById("button-cipher").addEventListener("click", buttonCipher);
document.getElementById("button-decipher").addEventListener("click", buttonDecipher);

function buttonCipher() {
  let encryptedMessage = cipher.encode(parseInt(offset.value), message.value);
  message.value = encryptedMessage;
};

function buttonDecipher() {
  let decipheredMessage = cipher.decode(parseInt(offset.value), message.value);
  message.value = decipheredMessage;
};
