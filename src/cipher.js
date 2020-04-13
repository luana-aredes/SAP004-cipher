 const cipher = {

   encode: (offset, message) => {
     if (typeof offset != "number" || offset <= 0 || typeof message != "string" || message == "") {
       throw TypeError("Verifique se os campo estão preenchidos corretamente.");
     }

     let initialMessage = message;
     let letterOffset = offset;
     let cipheredMessage = "";

     for (var counter = 0; counter < initialMessage.length; counter++) {
       let letterPosition = initialMessage.charCodeAt(counter); //posição da letra
       if (letterPosition >= 65 && letterPosition <= 90) {
         let letterPositionOffset = (((letterPosition - 65) + letterOffset) % 26) + 65;
         let letterDecipher = String.fromCharCode(letterPositionOffset);
         if (letterDecipher != " ") {
           cipheredMessage += letterDecipher;
         } else {
           cipheredMessage += "";
         }

       } else if (letterPosition >= 97 && letterPosition <= 122) {
         let letterPositionOffset = (((letterPosition - 97) + letterOffset) % 26) + 97;
         let letterDecipher = String.fromCharCode(letterPositionOffset);
         if (letterDecipher != " ") {
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
     if (typeof offset != "number" || offset <= 0 || typeof message != "string" || message == "") {
       throw TypeError("Por favor, verifique se os campo estão preenchidos corretamente.");
     }

     let decipheredMessage = "";
     let letterOffset = offset;

     for (var counter = 0; counter < message.length; counter++) {
       let letterPosition = message.charCodeAt(counter);
       if (letterPosition >= 65 && letterPosition <= 90) {
         let letterPositionOffset = (((letterPosition - 90) - letterOffset) % 26) + 90;
         let letterDecipher = String.fromCharCode(letterPositionOffset);
         if (letterDecipher != " ") {
           decipheredMessage += letterDecipher;
         } else {
           decipheredMessage += "";
         }

       } else if (letterPosition >= 97 && letterPosition <= 122) {
         let letterPositionOffset = (((letterPosition - 122) - letterOffset) % 26) + 122;
         let letterDecipher = String.fromCharCode(letterPositionOffset);
         if (letterDecipher != " ") {
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
