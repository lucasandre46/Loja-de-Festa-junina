// Simulação de um "banco de dados"
const produtos = [
    { nome: "Crépe De Frango Cremoso", descricao: "Crépe salgado de Frango", imgSrc: "./../../Model/Frango.jpeg" },
    { nome: "Crépe De Pizza", descricao: "Crépe salgado de Presunto e Queijo", imgSrc: "./../../Model/Pizza.jpeg" },
    { nome: "Crépe Doce", descricao: "Crépe doce de Chocolate e Morango", imgSrc: "./../../Model/Frango Morango.jpeg" },
    { nome: "Combo ", descricao: "Crépe salgado de Frango e um copo de 300ml de Refri", imgSrc: "./../../Model/Frango Morango.jpeg" },
    { nome: "Combo", descricao: "Crépe salgado de Presunto e Queijo e um copo de 300ml de Refri", imgSrc: "./../../Model/Frango Morango.jpeg" },
    { nome: "Combo doce", descricao: "Crépe doce de Chocolate e Morango e um copo de 300ml de Refri", imgSrc: "./../../Model/Frango Morango.jpeg" },
    { nome: "Super Combo", descricao: "Crépe salgado de Frango/Presunto e Queijo com Crépe doce de Chocolate e Morango e um copo de 300ml de Refri", imgSrc: "./../../Model/Frango Morango.jpeg" },
    { nome: "Refrigerante", descricao: "Um copo de Refri de 300ml", imgSrc: "./../../Model/refri.jpeg" },
];

export function criarCartoes() {
    const sectionCartoes = document.getElementById("sectionCartoes");
    const sectionProduts = document.getElementById("sectionProduts");

    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];

        // Criando o cartão
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
        botao.id = "addCarrinho";
        // botao.textContent = "Adicionar ao Carrinho";
        botao.textContent = "";

        const ibotao = document.createElement("i");
        ibotao.id = "ibotao";
        ibotao.classList = "fa-solid fa-cart-shopping"

        botao.appendChild(ibotao);

        imgBtn.appendChild(imgCartao);
        imgBtn.appendChild(botao);

        // Adicionando tudo ao cartão
        cartao.appendChild(nomeDesc);
        cartao.appendChild(imgBtn);

        // Adicionando o cartão à seção
        sectionCartoes.appendChild(cartao);

        sectionProduts.style.height = "90vh"

        if (i >= 6 && (i - 6) % 3 === 0) {
            const alturaAtual = parseInt(window.getComputedStyle(sectionProduts).height);
            sectionProduts.style.height = `${alturaAtual + 30}vh`;
        }
    }
}