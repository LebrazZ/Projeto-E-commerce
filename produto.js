const produtoDetalhe = document.getElementById("produtoDetalhe");


const parametros = new URLSearchParams(
    window.location.search
);


const idProduto = Number(parametros.get("id"));


const produto = produtos.find(
    item => item.id === idProduto
);



function adicionarCarrinhoProduto(id){

    let carrinho = JSON.parse(
        localStorage.getItem("carrinho")
    ) || [];


    const produtoSelecionado = produtos.find(
        item => item.id === id
    );


    carrinho.push({

        id: produtoSelecionado.id,
        nome: produtoSelecionado.nome,
        preco: produtoSelecionado.preco,
        imagem: produtoSelecionado.imagem,
        quantidade:1

    });


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    alert("Produto adicionado ao carrinho 🛒");

}




if(produto){


produtoDetalhe.innerHTML = `


<div class="produto-imagem-detalhe">

    <img src="${produto.imagem}" 
    alt="${produto.nome}">

</div>



<div class="produto-info">


${produto.promocao ? 
`
<span class="badge">
🔥 Oferta especial
</span>
`
:
""}



<h1>
${produto.nome}
</h1>



<div class="avaliacao">

${"⭐".repeat(produto.avaliacao)}

</div>



<p class="preco-produto">

R$ ${produto.preco.toLocaleString("pt-BR",{
    minimumFractionDigits:2
})}

</p>



<p class="parcelamento">

💳 Em até 12x sem juros

</p>




<button 
class="comprar-produto"
onclick="adicionarCarrinhoProduto(${produto.id})">

🛒 Comprar agora

</button>



<button 
class="favorito-produto">

❤️ Favoritar

</button>




<div class="beneficios-produto">


<p>🚚 Frete rápido</p>

<p>🔒 Compra segura</p>

<p>✅ Garantia de fábrica</p>


</div>



<h3>
Descrição
</h3>


<p>
O ${produto.nome} é um produto de alta qualidade,
desenvolvido para oferecer desempenho,
tecnologia e uma ótima experiência ao usuário.
</p>



<h3>
Especificações
</h3>


<ul>

<li>Produto original</li>

<li>Alta performance</li>

<li>Garantia TechStore</li>

<li>Suporte especializado</li>

</ul>



</div>


`;


}