export async function cadastrarUx(nome, turma, nChamada,) {
    try {
        const response = await fetch('https://back-end-crepes.vercel.app/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                turma: turma,
                nChamada: nChamada,
            }),
        });
        criarCartoes()
    }
    catch (e) {
        console.log(e)
    }
    console.log("pegou")
}