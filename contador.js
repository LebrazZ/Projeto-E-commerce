// ===============================
// CONTADOR DO CARRINHO
// ===============================

function atualizarContadorCarrinho() {

    const contador = document.getElementById("contadorCarrinho");

    if (!contador) return;

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let quantidade = 0;

    carrinho.forEach(produto => {
        quantidade += produto.quantidade;
    });

    contador.textContent = quantidade;
}

atualizarContadorCarrinho();