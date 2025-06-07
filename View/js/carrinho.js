import { pegarCartoes } from "./../../Controller/services/produtos_S.js";
import { pegarPedidos } from "./../../Controller/services/produtos_S.js";

export async function criarCarrinho() {
    const sectionCartoes = document.getElementById("showCarrinho");
    const sectionProduts = document.getElementById("sectionCart");

    const carrinhos = await pegarPedidos();
    const produtos = await pegarCartoes();

    console.log("pegou os pedidos e produtos");

    // Verifica se os dados retornaram corretamente
    console.log("Carrinhos:", carrinhos);
    console.log("Produtos:", produtos);

    if (!Array.isArray(carrinhos)) {
        console.error("Erro: 'carrinhos' não é um array válido:", carrinhos);
        return;
    }

    // Obtendo o nome do usuário logado
    const bdProprio = JSON.parse(localStorage.getItem('bdProprio')) || [];
    const usuarioLogado = bdProprio.length > 0 ? bdProprio[0].nome : null;

    if (!usuarioLogado) {
        console.error("Nenhum usuário logado encontrado.");
        return;
    }

    // Filtrando os pedidos apenas do usuário logado
    const carrinhosUsuario = carrinhos.filter(carrinho => carrinho.usuario.nomeUx === usuarioLogado);

    for (const carrinho of carrinhosUsuario) {
        const produto = produtos.find(p => p.id === carrinho.produtoId);

        if (!produto) {
            console.warn("Produto não encontrado para carrinho:", carrinho);
            continue;
        }

        // Criando o cartão do produto
        const cartao = document.createElement("div");
        cartao.classList.add("cartao");

        // Criando nome e descrição
        const nomeDesc = document.createElement("div");
        nomeDesc.id = "nomeDesc";

        const titulo = document.createElement("h1");
        titulo.textContent = produto.nome;

        const descricao = document.createElement("p");
        descricao.textContent = produto.descricao;

        nomeDesc.appendChild(titulo);
        nomeDesc.appendChild(descricao);

        // Criando imagem e botão
        const imgBtn = document.createElement("div");
        imgBtn.id = "imgBtn";

        const imgCartao = document.createElement("div");
        imgCartao.id = "imgCartao";

        const img = document.createElement("img");
        img.id = "foto";
        img.src = produto.imgSrc;
        img.alt = produto.nome;

        imgCartao.appendChild(img);

        const botao = document.createElement("button");
        botao.id = "delCarrinho";
        botao.textContent = "Remover do Carrinho";

        imgBtn.appendChild(imgCartao);
        imgBtn.appendChild(botao);

        // Adicionando tudo ao cartão
        cartao.appendChild(nomeDesc);
        cartao.appendChild(imgBtn);

        // Adicionando o cartão à seção
        sectionCartoes.appendChild(cartao);

        console.log("Produto adicionado ao carrinho:", produto.nome);
    }

    sectionProduts.style.height = "90vh";
}
