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


            <div class="quantidade">

                <button onclick="diminuir(${index})">
                    -
                </button>

                <span>
                    ${produto.quantidade}
                </span>

                <button onclick="aumentar(${index})">
                    +
                </button>

            </div>


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


const valorDesconto = total * desconto;

const totalFinal = total - valorDesconto;

totalCompra.innerHTML = `

    <p>
        Subtotal:
        <strong>
            R$ ${total.toLocaleString("pt-BR",{
                minimumFractionDigits:2
            })}
        </strong>
    </p>

    <p>
        Desconto:
        <strong style="color:#16a34a;">
            - R$ ${valorDesconto.toLocaleString("pt-BR",{
                minimumFractionDigits:2
            })}
        </strong>
    </p>

    <h2>
        Total:
        R$ ${totalFinal.toLocaleString("pt-BR",{
            minimumFractionDigits:2
        })}
    </h2>

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

function aumentar(index){

    carrinho[index].quantidade++;

    salvarCarrinho();

    mostrarCarrinho();

}



function diminuir(index){

    if(carrinho[index].quantidade > 1){

        carrinho[index].quantidade--;

    }else{

        carrinho.splice(index,1);

    }


    salvarCarrinho();

    mostrarCarrinho();

}



function salvarCarrinho(){

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarContadorCarrinho();

}

function finalizarCompra(){

    window.location.href="pagamento.html";

}

let desconto = 0;

function aplicarCupom(){

    const cupom = document
        .getElementById("cupom")
        .value
        .trim()
        .toUpperCase();

    const mensagem =
        document.getElementById("mensagemCupom");

    if(cupom === "TECH10"){

        desconto = 0.10;

        mensagem.innerHTML =
            "✅ Cupom aplicado! 10% de desconto.";

    }else if(cupom === "BEMVINDO20"){

        desconto = 0.20;

        mensagem.innerHTML =
            "✅ Cupom aplicado! 20% de desconto.";

    }else{

        desconto = 0;

        mensagem.innerHTML =
            "❌ Cupom inválido.";

    }

    localStorage.setItem("desconto", desconto);

    mostrarCarrinho();

}

mostrarCarrinho();