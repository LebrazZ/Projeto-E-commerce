function login(){

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;


    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


    let usuarioEncontrado = usuarios.find(
        usuario => usuario.email === email && usuario.senha === senha
    );


    if(usuarioEncontrado){

        localStorage.setItem("logado", "true");

        localStorage.setItem(
            "nomeUsuario",
            usuarioEncontrado.nome
        );


        localStorage.setItem(
            "usuarioAtual",
            JSON.stringify(usuarioEncontrado)
        );


        alert("Login realizado com sucesso!");


        window.location.href = "index.html";


    } else {

        alert("E-mail ou senha incorretos!");

    }

}