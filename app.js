const produtos = [
    {
        id:1,
        nome:"Notebook Gamer",
        preco:5499.90,
        imagem:"img/notebook.png"
    },
    {
        id:2,
        nome:"iPhone 17",
        preco:6999.90,
        imagem:"img/iphone.png"
    },
    {
        id:3,
        nome:"Headset Gamer",
        preco:399.90,
        imagem:"img/headset.png"
    },
    {
        id:4,
        nome:"Monitor 27''",
        preco:1499.90,
        imagem:"img/monitor.png"
    }
];

const listaProdutos = document.getElementById("listaProdutos");

function criarEstrelas(quantidade) {
    return "⭐".repeat(quantidade);
}

produtos.forEach(produto =>{
    
    listaProdutos.innerHTML += `
        <div class="card">

            ${produto.promocao ? '<span class="badge">Oferta</span>' : ""}

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
                <button class="comprar">
                    Comprar
                </button>

                <button class="favorito">
                    ❤️
                </button>
            </div>

        </div>
    `;
});
