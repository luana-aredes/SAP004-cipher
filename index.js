const username1 = "luana@gmail.com";
const password1 = "102030";

const username2 = "joao@gmail.com";
const password2 = "203040";

const username3 = "maria@gmail.com";
const password3 = "304050";

const username4 = "jase@gmail.com";
const password4 = "405060";

alert("usuário: luana@gmail.com \n Senha: 102030");

document.getElementById("enterbutton").addEventListener("click", newPage);

function newPage() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (
    (username == username1 && password == password1) ||
    (username == username2 && password == password2) ||
    (username == username3 && password == password3) ||
    (username == username4 && password == password4)
  ) {
    location.href = "https://luana-aredes.github.io/SAP004-cipher/home.html";
  } else {
    alert("usuário ou senha incorretos");
  }
}
