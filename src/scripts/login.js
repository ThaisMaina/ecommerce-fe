var usuarioInput = document.getElementById("usuario");

var senhaInput = document.getElementById("senha");

var btnEntrar = document.getElementById("botao");

btnEntrar.addEventListener("click", () => {
  if (usuarioInput.value.length == 0 || senhaInput.value.length == 0) {
    alert("Campos obrigatórios");
  } else {
    console.log("usuário digitado é", usuarioInput.value);
    console.log("senha digitada é", senhaInput.value);
    window.open("src/pages/app.html");
  }
});
