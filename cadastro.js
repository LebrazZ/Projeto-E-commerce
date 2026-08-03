const formulario = document.getElementById("formCadastro");


formulario.addEventListener("submit", function(e){

    e.preventDefault();


    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;


    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


    let usuarioExiste = usuarios.find(
        usuario => usuario.email === email
    );


    if(usuarioExiste){

        alert("Esse e-mail já está cadastrado!");

        return;
    }


    let novoUsuario = {

        nome: nome,
        email: email,
        senha: senha

    };


    usuarios.push(novoUsuario);


    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );


    alert("Cadastro realizado com sucesso!");


    window.location.href = "login.html";

});