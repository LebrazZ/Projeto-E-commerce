// ===========================
// PAGAMENTO - TECHSTORE
// ===========================

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const listaResumo = document.getElementById("listaResumo");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");

let valorTotal = 0;

// Mostrar produtos
function carregarResumo() {

    listaResumo.innerHTML = "";

    if (carrinho.length === 0) {

        listaResumo.innerHTML = "<p>Seu carrinho está vazio.</p>";

        subtotal.textContent = "R$ 0,00";
        total.textContent = "R$ 0,00";

        return;
    }

    carrinho.forEach(produto => {

        valorTotal += produto.preco;

        listaResumo.innerHTML += `
            <div class="produto-resumo">
                <span>${produto.nome}</span>
                <strong>R$ ${produto.preco.toFixed(2).replace(".", ",")}</strong>
            </div>
        `;
    });

    subtotal.textContent =
        `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;

    total.textContent =
        `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
}

carregarResumo();

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

    alert(`Pedido realizado com sucesso!

Cliente: ${nome}

Forma de pagamento: ${pagamento}

Total: R$ ${valorTotal.toFixed(2).replace(".", ",")}

Obrigado por comprar na TechStore!`);

    localStorage.removeItem("carrinho");

    window.location.href = "index.html";
}