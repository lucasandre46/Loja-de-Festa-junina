import { carrinhos } from "./carrinho.js";
const carrinhos = carrinhos;

export function atualizarStatusCarrinho() {

    const statusCarrinho = document.getElementById("statusCarrinho");
    if (carrinhos.length === 0) {
        statusCarrinho.textContent = "Seu carrinho está vazio.";
    } else if (carrinhos.length === 1) {
        statusCarrinho.textContent = "Seu carrinho tem 1 item.";
    } else {
        statusCarrinho.textContent = `Seu carrinho tem ${carrinhos.length} itens.`;
    }
}