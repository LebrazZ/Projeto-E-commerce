let usuario = JSON.parse(
    localStorage.getItem("usuarioAtual")
);


if(usuario){

    document.getElementById("nomeConta").textContent = usuario.nome;

    document.getElementById("emailConta").textContent = usuario.email;


} else {

    alert("Você precisa estar logado!");

    window.location.href = "login.html";

}

const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

const listaPedidos = document.getElementById("listaPedidos");

if(listaPedidos){

    if(pedidos.length === 0){

        listaPedidos.innerHTML = "<p>Você ainda não realizou nenhuma compra.</p>";

    }else{

        listaPedidos.innerHTML = "";

        pedidos.reverse().forEach(pedido=>{

            let produtosHTML = "";

            pedido.produtos.forEach(produto=>{

                produtosHTML += `
                    <li>
                        ${produto.nome} (${produto.quantidade}x)
                    </li>
                `;

            });

            listaPedidos.innerHTML += `

                <div class="pedido">

                    <h3>Pedido #${pedido.id}</h3>

                    <p><strong>Data:</strong> ${pedido.data}</p>

                    <p><strong>Pagamento:</strong> ${pedido.pagamento}</p>

                    <ul>

                        ${produtosHTML}

                    </ul>

                    <p>

                        <strong>

                            Total: R$ ${pedido.total.toLocaleString("pt-BR",{

                                minimumFractionDigits:2

                            })}

                        </strong>

                    </p>

                </div>

            `;

        });

    }

}