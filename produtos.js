const produtos = [
    {
        id: 1,
        nome: "Notebook Gamer",
        preco: 5499.90,
        imagem: "img/notebook.png",
        avaliacao: 5,
        promocao: true,
        categoria: "Notebook"
    },
    {
        id: 2,
        nome: "iPhone 17",
        preco: 6999.90,
        imagem: "img/iphone.png",
        avaliacao: 5,
        promocao: false,
        categoria: "Smartphone"
    },
    {
        id: 3,
        nome: "Headset Gamer",
        preco: 399.90,
        imagem: "img/headset.png",
        avaliacao: 4,
        promocao: true,
        categoria: "Áudio"
    },
    {
        id: 4,
        nome: "Monitor 27''",
        preco: 1499.90,
        imagem: "img/monitor.png",
        avaliacao: 5,
        promocao: false,
        categoria: "Monitor"
    }
];

const lista = document.getElementById("listaProdutos");
const pesquisa = document.getElementById("pesquisa");


// ===============================
// CARRINHO
// ===============================

function adicionarCarrinho(id){

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


    let produto = produtos.find(
        item => item.id === id
    );


    let existe = carrinho.find(
        item => item.id === id
    );


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
// ESTRELAS
// ===============================

function criarEstrelas(qtd){

    return "⭐".repeat(qtd);

}



// ===============================
// MOSTRAR PRODUTOS
// ===============================

function mostrarProdutos(produtosMostrar){

    lista.innerHTML = "";


    produtosMostrar.forEach(produto => {


        lista.innerHTML += `

        <div class="card">


    ${produto.promocao ? 
    '<span class="badge">🔥 Oferta</span>' : ''}


    <img src="${produto.imagem}" 
    alt="${produto.nome}">


    <h3>
        ${produto.nome}
    </h3>


    <div class="avaliacao">
        ${criarEstrelas(produto.avaliacao)}
    </div>



    ${produto.promocao ? 

    `<p class="preco-antigo">
        R$ ${(produto.preco * 1.15)
        .toLocaleString("pt-BR",{
            minimumFractionDigits:2
        })}
    </p>`

    : ''}



    <p class="preco">

        R$ ${produto.preco.toLocaleString("pt-BR", {
            minimumFractionDigits:2
        })}

    </p>


    <p class="parcelamento">
        Em até 12x sem juros
    </p>



    <button 
    class="comprar"
    onclick="adicionarCarrinho(${produto.id})">

        🛒 Adicionar ao carrinho

    </button>



    <button 
    class="detalhes"
    onclick="verProduto(${produto.id})">

        Ver detalhes

    </button>



    <button 
    class="favorito"
    onclick="adicionarFavorito(${produto.id})">

        ❤️

    </button>


</div>

        `;


    });

}

// mostra todos ao abrir a página
mostrarProdutos(produtos);



// ===============================
// PESQUISA
// ===============================

pesquisa.addEventListener("input", function(){


    const texto = pesquisa.value.toLowerCase();


    const resultado = produtos.filter(produto =>


        produto.nome.toLowerCase().includes(texto)

    );


    mostrarProdutos(resultado);


});

function verProduto(id){

    window.location.href = 
    `produto.html?id=${id}`;

}