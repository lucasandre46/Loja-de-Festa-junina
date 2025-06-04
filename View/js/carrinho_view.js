function atualizarStatusCarrinho() {
    const statusCarrinho = document.getElementById("statusCarrinho");
    if (carrinho.length === 0) {
        statusCarrinho.textContent = "Seu carrinho está vazio.";
    } else if (carrinho.length === 1) {
        statusCarrinho.textContent = "Seu carrinho tem 1 item.";
    } else {
        statusCarrinho.textContent = `Seu carrinho tem ${carrinho.length} itens.`;
    }
}