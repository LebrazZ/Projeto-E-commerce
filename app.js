const produtos = [
    {
        id:1,
        nome:"Notebook Gamer",
        preco:5499.90,
        imagem:"img/notebook.png",
        avaliacao:5
    },
    {
        id:2,
        nome:"iPhone 17",
        preco:6999.90,
        imagem:"img/iphone.png",
        avaliacao:5
    },
    {
        id:3,
        nome:"Headset Gamer",
        preco:399.90,
        imagem:"img/headset.png",
        avaliacao:4
    },
    {
        id:4,
        nome:"Monitor 27''",
        preco:1499.90,
        imagem:"img/monitor.png",
        avaliacao:4
    }
];


const listaProdutos = document.getElementById("listaProdutos");



function criarEstrelas(quantidade){

    return "⭐".repeat(quantidade);

}



// ===============================
// CARRINHO
// ===============================

function adicionarCarrinho(id){

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


    let produto = produtos.find(item => item.id === id);


    let existe = carrinho.find(item => item.id === id);


    if(existe){

        existe.quantidade++;

    }else{

        carrinho.push({

            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            quantidade:1

        });

    }


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarContatorCarrinho();

    alert("Produto adicionado ao carrinho 🛒");

}




// ===============================
// FAVORITOS
// ===============================

function adicionarFavorito(id){

    let favoritos = JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];


    let produto = produtos.find(
        item => item.id === id
    );


    let existe = favoritos.find(
        item => item.id === id
    );


    if(!existe){

        favoritos.push(produto);


        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );


        alert("Produto adicionado aos favoritos ❤️");


    }else{

        alert("Esse produto já está nos favoritos!");

    }

}




// ===============================
// MOSTRAR PRODUTOS
// ===============================

produtos.forEach(produto =>{


    listaProdutos.innerHTML += `

        <div class="card">


            <img src="${produto.imagem}" alt="${produto.nome}">


            <h3>${produto.nome}</h3>


            <div class="avaliacao">

                ${criarEstrelas(produto.avaliacao)}

            </div>


            <p class="preco">

                R$ ${produto.preco.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2
                })}

            </p>


            <div class="acoes-card">


                <button 
                class="comprar"
                onclick="adicionarCarrinho(${produto.id})">

                    Comprar 🛒

                </button>



                <button 
                class="favorito"
                onclick="adicionarFavorito(${produto.id})">

                    ❤️

                </button>


            </div>


        </div>

    `;


});

function atualizarContadorCarrinho() {

    const contador = document.getElementById("contadorCarrinho");

    if (!contador) return;

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let quantidade = 0;

    carrinho.forEach(produto => {
        quantidade += produto.quantidade;
    });

    contador.textContent = quantidade;

}

atualizarContadorCarrinho();

function verificarUsuario(){

    let areaUsuario = document.getElementById("areaUsuario");

    if(!areaUsuario){
        return;
    }


    let logado = localStorage.getItem("logado");
    let nome = localStorage.getItem("nomeUsuario");


    if(logado === "true"){

        areaUsuario.innerHTML = `
            <span>Olá, ${nome} 👋</span>
            <button onclick="sair()">Sair</button>
        `;

    } else {

        areaUsuario.innerHTML = `
            <a href="login.html">Login</a>
            <a href="cadastro.html">Cadastrar</a>
        `;

    }

}


function sair(){

    localStorage.removeItem("logado");
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("usuarioAtual");

    alert("Você saiu da conta!");

    window.location.href = "index.html";

}


verificarUsuario();