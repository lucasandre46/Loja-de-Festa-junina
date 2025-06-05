// Simulação de um "banco de dados"
const produtos = [
    { nome: "Produto 1", descricao: "Descrição do Produto 1", imgSrc: "img1.jpg" },
    { nome: "Produto 2", descricao: "Descrição do Produto 2", imgSrc: "img2.jpg" },
    { nome: "Produto 3", descricao: "Descrição do Produto 3", imgSrc: "img3.jpg" },
    { nome: "Produto 4", descricao: "Descrição do Produto 4", imgSrc: "img4.jpg" },
    { nome: "Produto 5", descricao: "Descrição do Produto 5", imgSrc: "img5.jpg" },
    { nome: "Produto 6", descricao: "Descrição do Produto 6", imgSrc: "img6.jpg" },
    { nome: "Produto 7", descricao: "Descrição do Produto 7", imgSrc: "img7.jpg" },
    { nome: "Produto 8", descricao: "Descrição do Produto 8", imgSrc: "img8.jpg" },
    { nome: "Produto 9", descricao: "Descrição do Produto 9", imgSrc: "img9.jpg" },
    { nome: "Produto 10", descricao: "Descrição do Produto 10", imgSrc: "img10.jpg" },
    { nome: "Produto 11", descricao: "Descrição do Produto 11", imgSrc: "img11.jpg" },
    { nome: "Produto 12", descricao: "Descrição do Produto 12", imgSrc: "img12.jpg" },
    { nome: "Produto 13", descricao: "Descrição do Produto 13", imgSrc: "img13.jpg" },
    { nome: "Produto 14", descricao: "Descrição do Produto 14", imgSrc: "img14.jpg" },
    { nome: "Produto 15", descricao: "Descrição do Produto 15", imgSrc: "img15.jpg" },
    { nome: "Produto 16", descricao: "Descrição do Produto 16", imgSrc: "img16.jpg" },
    { nome: "Produto 17", descricao: "Descrição do Produto 17", imgSrc: "img17.jpg" },
    { nome: "Produto 18", descricao: "Descrição do Produto 18", imgSrc: "img18.jpg" },
    { nome: "Produto 19", descricao: "Descrição do Produto 19", imgSrc: "img19.jpg" },
    { nome: "Produto 20", descricao: "Descrição do Produto 20", imgSrc: "img20.jpg" },
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