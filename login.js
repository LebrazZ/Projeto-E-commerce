function login(){

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if(!usuario){
        alert("Usuário não encontrado. Faça seu cadastro!");
        return;
    }

    if(email === usuario.email && senha === usuario.senha){

        localStorage.setItem("logado", "true");
        localStorage.setItem("nomeUsuario", usuario.nome);

        alert("Login realizado com sucesso!");

        window.location.href = "index.html";

    } else {

        alert("E-mail ou senha incorretos!");

    }

}