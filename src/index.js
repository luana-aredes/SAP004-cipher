let username = "";
let password = "";

const username1 = "luana@gmail.com";
const password1 = "102030";

const username2 = "joao@gmail.com";
const password2 = "203040";

const username3 = "maria@gmail.com";
const password3 = "304050";

const username4 = "jase@gmail.com";
const password4 = "405060";

let enterbutton = document.getElementById("enterbutton");
enterbutton.onclick = () => {
  newPage();
}

function newPage() {
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  if (
    (username == username1 && password == password1) ||
    (username == username2 && password == password2) ||
    (username == username3 && password == password3) ||
    (username == username4 && password == password4)
  ) {
    location.href = "http://localhost:5000/home";
  } else {
    alert("usuário ou senha incorretos");
  }
}
