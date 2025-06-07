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