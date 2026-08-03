let favoritos = JSON.parse(
localStorage.getItem("favoritos")
) || [];


const lista = document.getElementById(
"listaFavoritos"
);



favoritos.forEach(produto => {


lista.innerHTML += `

<div class="card">


<img src="${produto.imagem}">


<h3>
${produto.nome}
</h3>


<p>
R$ ${produto.preco.toLocaleString("pt-BR",{
minimumFractionDigits:2
})}
</p>


<button onclick="removerFavorito(${produto.id})">

Remover ❤️

</button>


</div>

`;


});



function removerFavorito(id){


favoritos = favoritos.filter(
produto => produto.id !== id
);


localStorage.setItem(
"favoritos",
JSON.stringify(favoritos)
);


location.reload();


}