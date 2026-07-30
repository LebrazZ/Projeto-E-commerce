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

const lista = document.querySelector(".lista-produtos");

produtos.forEach(produto=>{

    lista.innerHTML += `
        <div class="card">

            <img src="${produto.imagem}" alt="${produto.nome}">

            <h3>${produto.nome}</h3>

            <p class="preco">
                R$ ${produto.preco.toFixed(2)}
            </p>

            <button>Comprar</button>

        </div>
    `;

});
