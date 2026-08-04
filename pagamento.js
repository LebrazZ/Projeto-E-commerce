// ===========================
// PAGAMENTO - TECHSTORE
// ===========================


const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const desconto = Number(localStorage.getItem("desconto")) || 0;


const listaResumo = document.getElementById("listaResumo");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");


let valorTotal = 0;



// ===========================
// CARREGAR RESUMO
// ===========================

function carregarResumo(){

    listaResumo.innerHTML = "";

    valorTotal = 0;


    if(carrinho.length === 0){

        listaResumo.innerHTML =
        "<p>Seu carrinho está vazio.</p>";

        subtotal.textContent = "R$ 0,00";
        total.textContent = "R$ 0,00";

        return;

    }



    carrinho.forEach(produto => {


        const valorProduto =
        produto.preco * produto.quantidade;


        valorTotal += valorProduto;



        listaResumo.innerHTML += `

            <div class="produto-resumo">

                <span>
                    ${produto.nome} (${produto.quantidade}x)
                </span>

                <strong>
                    R$ ${valorProduto.toLocaleString("pt-BR",{
                        minimumFractionDigits:2
                    })}
                </strong>

            </div>

        `;


    });



    const valorDesconto = valorTotal * desconto;

    const totalFinal = valorTotal - valorDesconto;



    subtotal.textContent =
    `R$ ${valorTotal.toLocaleString("pt-BR",{
        minimumFractionDigits:2
    })}`;



    total.textContent =
    `R$ ${totalFinal.toLocaleString("pt-BR",{
        minimumFractionDigits:2
    })}`;



    // Guarda o valor final da compra

    valorTotal = totalFinal;


}


carregarResumo();




// ===========================
// FINALIZAR PEDIDO
// ===========================

function finalizarPedido(){


    const nome =
    document.getElementById("nome").value.trim();


    const email =
    document.getElementById("email").value.trim();


    const pagamento =
    document.getElementById("pagamento").value;



    if(nome === "" || email === ""){

        alert("Preencha todos os campos obrigatórios.");

        return;

    }



    if(carrinho.length === 0){

        alert("Seu carrinho está vazio.");

        return;

    }



    const pedidos =
    JSON.parse(localStorage.getItem("pedidos")) || [];




    const novoPedido = {


        id: Date.now(),

        cliente:nome,

        email:email,

        pagamento:pagamento,

        produtos:carrinho,

        desconto:desconto,

        total:valorTotal,

        data:new Date().toLocaleString("pt-BR")


    };



    pedidos.push(novoPedido);



    localStorage.setItem(
        "pedidos",
        JSON.stringify(pedidos)
    );



    localStorage.removeItem("carrinho");

    localStorage.removeItem("desconto");



    alert(`Pedido realizado com sucesso!

Cliente: ${nome}

Pagamento: ${pagamento}

Total: R$ ${valorTotal.toLocaleString("pt-BR",{
    minimumFractionDigits:2
})}

Obrigado por comprar na TechStore!`);



    window.location.href="index.html";


}






// ===========================
// FORMAS DE PAGAMENTO
// ===========================


const selectPagamento =
document.getElementById("pagamento");


const pixBox =
document.getElementById("pixBox");


const cartaoBox =
document.getElementById("cartaoBox");


const boletoBox =
document.getElementById("boletoBox");



mostrarPagamento();



selectPagamento.addEventListener(
"change",
mostrarPagamento
);




function mostrarPagamento(){


    if(pixBox)
        pixBox.style.display="none";


    if(cartaoBox)
        cartaoBox.style.display="none";


    if(boletoBox)
        boletoBox.style.display="none";




    if(selectPagamento.value==="Pix"){


        if(pixBox)
            pixBox.style.display="block";


        gerarQRCode();


    }



    if(selectPagamento.value==="Cartão de Crédito"){


        if(cartaoBox)
            cartaoBox.style.display="block";


        gerarParcelas();


    }




    if(selectPagamento.value==="Boleto"){


        if(boletoBox)
            boletoBox.style.display="block";


        const hoje = new Date();


        hoje.setDate(
            hoje.getDate()+3
        );



        document.getElementById("vencimento").textContent =
        hoje.toLocaleDateString("pt-BR");


    }


}






// ===========================
// COPIAR PIX
// ===========================


function copiarPix(){


    const codigo =
    document.getElementById("codigoPix");


    codigo.select();


    document.execCommand("copy");


    alert("Código Pix copiado!");

}





// ===========================
// PARCELAMENTO
// ===========================


function gerarParcelas(){


    const selectParcelas =
    document.getElementById("parcelas");


    selectParcelas.innerHTML="";



    for(let i=1;i<=12;i++){



        let valorParcela;

        let texto;



        if(i<=6){


            valorParcela =
            valorTotal / i;



            texto =
            `${i}x de R$ ${valorParcela.toLocaleString("pt-BR",{
                minimumFractionDigits:2
            })} sem juros`;



        }else{


            let totalComJuros =
            valorTotal * 1.12;



            valorParcela =
            totalComJuros / i;



            texto =
            `${i}x de R$ ${valorParcela.toLocaleString("pt-BR",{
                minimumFractionDigits:2
            })} com juros`;

        }




        selectParcelas.innerHTML += `

            <option>

                ${texto}

            </option>

        `;


    }


}






// ===========================
// QR CODE PIX
// ===========================


function gerarQRCode(){


    const codigo =
    document.getElementById("codigoPix");


    const qr =
    document.getElementById("qrcode");



    if(!codigo || !qr)
        return;




    qr.innerHTML="";



    new QRCode(qr,{

        text:codigo.value,

        width:180,

        height:180

    });


}