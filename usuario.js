function verificarLogin(){

    let usuario = JSON.parse(
        localStorage.getItem("usuario")
    );


    let logado = localStorage.getItem("login");


    let areaUsuario = document.getElementById("areaUsuario");


    if(areaUsuario && usuario && logado === "true"){

        areaUsuario.innerHTML = `

            <span>
                Olá, ${usuario.nome} 👋
            </span>


            <button onclick="sair()">
                Sair
            </button>

        `;

    }

}



function sair(){

    localStorage.removeItem("login");


    alert("Você saiu da conta!");


    window.location.href="index.html";

}



verificarLogin();