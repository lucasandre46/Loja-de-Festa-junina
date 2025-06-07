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
    console.log("pegou")
}

// import { bdProprio } from "./../login.js"; 
// console.log(bdProprio)

// export async function adicionarAoCarrinho(produto) {
//     try {
//         // Pegamos o primeiro usuário cadastrado em bdProprio (se houver)
//         const usuario = bdProprio.length > 0 ? bdProprio[0] : null;

//         if (!usuario) {
//             alert("Nenhum usuário cadastrado! Faça login primeiro.");
//             return;
//         }

//         const response = await fetch('https://back-end-crepes.vercel.app/usuarios', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 usuario: {
//                     nomeUx: usuario.nome,
//                     turma: usuario.turma,
//                     nChamada: usuario.chamada
//                 },
//                 produtoId: produto.id
//             }),
//         });

//         if (response.status === 200) {
//             console.log("Produto adicionado ao carrinho!");
//         } else {
//             alert("Erro ao adicionar ao carrinho.");
//         }
//     }
//     catch (e) {
//         console.error(e);
//     }
// }

// export async function cadastrarProdutoNoCarrinho(nome, descricao, imgSrc,) {
//     try {
//         const response = await fetch('https://back-end-crepes.vercel.app/usuarios', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 nome: nome,
//                 descricao: descricao,
//                 imgSrc: imgSrc,
//             }),
//         });
//         // criarCartoes()
//     }
//     catch (e) {
//         console.log(e)
//     }
//     console.log("pegou")
// }

// export async function excluirCartoes(id) {
//    try {
//       const response = await fetch('https://back-end-crepes.vercel.app/produtos', {
//          method: 'DELETE',
//          headers: {
//             'Content-Type': 'application/json',
//          },
//          body: JSON.stringify({ id }),
//       });
//       criarCartoes()
//    }
//    catch (error) {
//       console.error('Erro ao excluir os cartoes', error)
//    }
// }

// export async function atualizarCartao(id,  nome, descricao, imgSrc, ) {
//    try {
//       const response = await fetch('https://back-end-crepes.vercel.app/produtos', {
//          method: 'PUT',
//          headers: {
//             'Content-Type': 'application/json',
//          },
//          body: JSON.stringify({
//             nome: nome,
//             descricao: descricao,
//             imgSrc: imgSrc,
//          }),
//       })
//       criarCartoes();
//    } catch (error) {
//       console.error('Erro ao atualizar os cartoes', error)
//    }
// }