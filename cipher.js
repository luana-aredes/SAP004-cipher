 const cipher = {

   encode: (offset, message) => {
     if (typeof offset != "number" || offset <= 0 || typeof message != "string" || message == "") {
       throw TypeError("Verifique se os campo estão preenchidos corretamente.");
     }

     for (const message of message) {
       const letterPosition = message.charCodeAt();
       const letterPositionOffset = "";
       const letterCipher = String.fromCharCode(letterPositionOffset);
       if (letterPosition >= 65 && letterPosition <= 90) {
         letterPositionOffset = (((letterPosition - 65) + offset) % 26) + 65;
       } else if (letterPosition >= 97 && letterPosition <= 122) {
         letterPositionOffset = (((letterPosition - 97) + offset) % 26) + 97;
       } else {
         message += String.fromCharCode(letterPosition);
       }
       if (letterCipher != " ") {
         message += letterCipher;
       } else {
         message += "";
       }
     }
     return message;
   },


   decode: (offset, message) => {
     if (typeof offset != "number" || offset <= 0 || typeof message != "string" || message == "") {
       throw TypeError("Por favor, verifique se os campo estão preenchidos corretamente.");
     }

     for (const message of message) {
       let letterPosition = message.charCodeAt();
       if (letterPosition >= 65 && letterPosition <= 90) {
         const letterPositionOffset = (((letterPosition - 90) - offset) % 26) + 90;
         var letterDecipher = String.fromCharCode(letterPositionOffset);
       } else if (letterPosition >= 97 && letterPosition <= 122) {
         letterPositionOffset = (((letterPosition - 122) - offset) % 26) + 122;
         letterDecipher = String.fromCharCode(letterPositionOffset);
       } else {
         message += String.fromCharCode(letterPosition);
       }
       if (letterDecipher != " ") {
         message += letterDecipher;
       } else {
         message += "";
       }
     }
     return message;
   }
 }

 export default cipher;
