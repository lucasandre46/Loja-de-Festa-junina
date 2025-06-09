import { criarCartoes } from "./../../View/js/produtos_view.js";

export async function pegarCartoes() {
    try {
        const response = await fetch('https://back-end-crepes.vercel.app/produtos')
        if (response.status === 200) {
            const data = await response.json()
            const produtos = data.produtos;

            return produtos;
        } else {
            alert('Sevice offline...');
            const produtos = [];
            return produtos;
        }
    }
    catch (e) {
        alert(e)
    }
    console.log("pegou o produtos")
}

export async function pegarPedidos() {
    try {
        const response = await fetch('https://back-end-crepes.vercel.app/usuarios');
        if (response.status === 200) {
            const data = await response.json();
            const usuarios = data.usuarios;

            // Mapear usuários e criar um array de pedidos
            const carrinhos = usuarios.map(user => ({
                usuario: user.usuario, // Dados do usuário
                produtoId: user.produtoId // ID do produto associado
            }));

            return carrinhos;
        } else {
            alert('Service offline...');
            return [];
        }
    } catch (e) {
        alert(e);
        console.error('Erro ao buscar pedidos:', e);
        return [];
    }
}

export async function removerDoCarrinho(produto) {
    try {
        // Obtendo o usuário logado do `localStorage`
        const bdProprio = JSON.parse(localStorage.getItem('bdProprio')) || [];
        const usuarioLogado = bdProprio.length > 0 ? bdProprio[0].nome : null;

        if (!usuarioLogado) {
            alert("Nenhum usuário logado encontrado!");
            return;
        }

        const response = await fetch('https://back-end-crepes.vercel.app/usuarios', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                usuarioNome: usuarioLogado,
                produtoId: produto.id
            }),
        });

        if (response.status === 200) {
            alert("Produto removido do carrinho!");
            location.reload()
        } else {
            alert("Erro ao remover do carrinho.");
        }
    } catch (error) {
        console.error("Erro ao excluir os produtos do carrinho", error);
    }
}