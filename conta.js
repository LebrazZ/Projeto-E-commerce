let usuario = JSON.parse(
    localStorage.getItem("usuarioAtual")
);


if(usuario){

    document.getElementById("nomeConta").textContent = usuario.nome;

    document.getElementById("emailConta").textContent = usuario.email;


} else {

    alert("Você precisa estar logado!");

    window.location.href = "login.html";

}



function sair(){

    localStorage.removeItem("logado");
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("usuarioAtual");


    alert("Você saiu da conta!");

    window.location.href = "index.html";

}
