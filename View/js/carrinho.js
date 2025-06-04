// Simulação de um "banco de dados"
export const carrinhos = [
    { nome: "Produto 1", descricao: "Descrição do Produto 1", imgSrc: "img1.jpg" },
    { nome: "Produto 2", descricao: "Descrição do Produto 2", imgSrc: "img2.jpg" },
    { nome: "Produto 3", descricao: "Descrição do Produto 3", imgSrc: "img3.jpg" },
    { nome: "Produto 4", descricao: "Descrição do Produto 4", imgSrc: "img4.jpg" },
    { nome: "Produto 5", descricao: "Descrição do Produto 5", imgSrc: "img5.jpg" },
    { nome: "Produto 6", descricao: "Descrição do Produto 6", imgSrc: "img6.jpg" },
    { nome: "Produto 7", descricao: "Descrição do Produto 7", imgSrc: "img7.jpg" },
    { nome: "Produto 8", descricao: "Descrição do Produto 8", imgSrc: "img8.jpg" },
    { nome: "Produto 9", descricao: "Descrição do Produto 9", imgSrc: "img9.jpg" },
];

console.log("Achou a pasta")

export function criarCarrinho() {
    const sectionCartoes = document.getElementById("showCarrinho");
    const sectionProduts = document.getElementById("sectionCart");

    for (let i = 0; i < carrinhos.length; i++) {
        const carrinho = carrinhos[i];

        // Criando o cartão
        const cartao = document.createElement("div");
        cartao.classList.add("cartao");

        // Criando nome e descrição
        const nomeDesc = document.createElement("div");
        nomeDesc.id = "nomeDesc";

        const titulo = document.createElement("h1");
        titulo.textContent = carrinho.nome;

        const descricao = document.createElement("p");
        descricao.textContent = carrinho.descricao;

        nomeDesc.appendChild(titulo);
        nomeDesc.appendChild(descricao);

        // Criando imagem e botão
        const imgBtn = document.createElement("div");
        imgBtn.id = "imgBtn";

        const imgCartao = document.createElement("div");
        imgCartao.id = "imgCartao";

        const img = document.createElement("img");
        img.id = "foto";
        img.src = carrinho.imgSrc;
        img.alt = carrinho.nome;

        imgCartao.appendChild(img);

        const botao = document.createElement("button");
        botao.id = "delCarrinho";
        botao.textContent = "Remover do Carrinho";

        // const ibotao = document.createElement("i");
        // ibotao.id = "ibotao";
        // ibotao.classList = "fa-solid fa-cart-shopping"

        // botao.appendChild(ibotao);

        imgBtn.appendChild(imgCartao);
        imgBtn.appendChild(botao);

        // Adicionando tudo ao cartão
        cartao.appendChild(nomeDesc);
        cartao.appendChild(imgBtn);

        // Adicionando o cartão à seção
        sectionCartoes.appendChild(cartao);

        console.log("Rodou o codigo")

        sectionProduts.style.height = "90vh"

        if (i >= 6 && (i - 6) % 3 === 0) {
            const alturaAtual = parseInt(window.getComputedStyle(sectionProduts).height);
            sectionProduts.style.height = `${alturaAtual + 30}vh`;
        }
    }
}