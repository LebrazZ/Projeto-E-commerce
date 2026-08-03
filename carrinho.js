let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


const lista = document.getElementById("listaCarrinho");
const totalCompra = document.getElementById("totalCompra");


function mostrarCarrinho(){

    lista.innerHTML = "";

    let total = 0;


    carrinho.forEach((produto,index)=>{


        total += produto.preco * produto.quantidade;



        lista.innerHTML += `

        <div class="card">


            <img src="${produto.imagem}">


            <h3>${produto.nome}</h3>


            <p>
            Quantidade: ${produto.quantidade}
            </p>


            <p>
            R$ ${(produto.preco * produto.quantidade)
            .toLocaleString("pt-BR",{
                minimumFractionDigits:2
            })}
            </p>


            <button onclick="remover(${index})">

                Remover

            </button>


        </div>

        `;


    });


    totalCompra.innerHTML =
    `
    Total: R$ ${total.toLocaleString("pt-BR",{
        minimumFractionDigits:2
    })}
    `;


}



function remover(index){

    carrinho.splice(index,1);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarContadorCarrinho();

    mostrarCarrinho();

}



function finalizarCompra(){

    window.location.href="pagamento.html";

}



mostrarCarrinho();