const produtosPromocao = [

{
id:1,
nome:"Notebook Gamer",
precoAntigo:5499.90,
preco:4999.90,
imagem:"img/notebook.png"
},


{
id:3,
nome:"Headset Gamer",
precoAntigo:399.90,
preco:299.90,
imagem:"img/headset.png"
}

];



const lista = document.getElementById(
"listaPromocoes"
);



produtosPromocao.forEach(produto =>{


lista.innerHTML += `


<div class="card">


<span class="badge">
Oferta
</span>



<img src="${produto.imagem}">



<h3>
${produto.nome}
</h3>



<p style="text-decoration: line-through">

R$ ${produto.precoAntigo.toLocaleString("pt-BR",{
minimumFractionDigits:2
})}

</p>



<p class="preco">

R$ ${produto.preco.toLocaleString("pt-BR",{
minimumFractionDigits:2
})}

</p>



<button class="comprar">

Comprar 🛒

</button>



</div>


`;



});