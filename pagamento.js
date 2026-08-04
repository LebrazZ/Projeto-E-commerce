// ===========================
// PAGAMENTO - TECHSTORE
// ===========================

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const listaResumo = document.getElementById("listaResumo");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");

let valorTotal = 0;


// ===========================
// CARREGAR RESUMO
// ===========================

function carregarResumo() {

    listaResumo.innerHTML = "";
    valorTotal = 0;

    if (carrinho.length === 0) {

        listaResumo.innerHTML = "<p>Seu carrinho está vazio.</p>";

        subtotal.textContent = "R$ 0,00";
        total.textContent = "R$ 0,00";

        return;
    }

    carrinho.forEach(produto => {

        const valorProduto = produto.preco * produto.quantidade;

        valorTotal += valorProduto;

        listaResumo.innerHTML += `

            <div class="produto-resumo">

                <span>
                    ${produto.nome} (${produto.quantidade}x)
                </span>

                <strong>
                    R$ ${valorProduto.toFixed(2).replace(".", ",")}
                </strong>

            </div>

        `;

    });

    subtotal.textContent =
        `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;

    total.textContent =
        `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;

}

carregarResumo();


// ===========================
// FINALIZAR PEDIDO
// ===========================

function finalizarPedido() {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const pagamento = document.getElementById("pagamento").value;

    if (nome === "" || email === "") {

        alert("Preencha todos os campos obrigatórios.");

        return;
    }

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio.");

        return;
    }

    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    const novoPedido = {

        id: Date.now(),
        cliente: nome,
        email: email,
        pagamento: pagamento,
        produtos: carrinho,
        total: valorTotal,
        data: new Date().toLocaleString("pt-BR")

    };

    pedidos.push(novoPedido);

    localStorage.setItem(
        "pedidos",
        JSON.stringify(pedidos)
    );

    localStorage.removeItem("carrinho");

    alert(`Pedido realizado com sucesso!

Cliente: ${nome}

Forma de pagamento: ${pagamento}

Total: R$ ${valorTotal.toFixed(2).replace(".", ",")}

Obrigado por comprar na TechStore!`);

    window.location.href = "index.html";

}