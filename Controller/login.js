import { cadastrarUx } from "./../Controller/services/login_S.js";

const bdProprio = JSON.parse(localStorage.getItem('bdProprio')) || [];

function salvarBdProprio() {
    localStorage.setItem('bdProprio', JSON.stringify(bdProprio));
}

let telaCad = document.getElementById('login')

export function escondeTelaCad() {
    telaCad.style.left = '-100vw'
}

export function mostraTelaCad() {
    if(bdProprio.length > 0){
            telaCad.style.left = '0vw'
    }else{
        escondeTelaCad()
    }
}

export function recolheDadosLogin() {
    let nomeUx = document.getElementById('nomeAdd');
    let turma = document.getElementById('turmaAdd');
    let nChamada = document.getElementById('nChamadaAdd');

    bdProprio.push({
        nome: nomeUx.value,
        turma: turma.value,
        chamada: nChamada.value
    });

    salvarBdProprio();

    console.log(bdProprio);

    if (nomeUx.value === "", turma.value === '', nChamada === '') {
        alert('Check se todos os campos estão preenchidos');
    } else {
        cadastrarUx(nomeUx.value, turma.value, nChamada.value,);
        escondeTelaCad();

        nomeUx.value = '';
        turma.value = '';
        nChamada.value = '';
    }
}

export function limparDadosLogin() {
    let nomeUx = document.getElementById('nomeAdd');
    let turma = document.getElementById('turmaAdd');
    let nChamada = document.getElementById('nChamadaAdd');

    nomeUx.value = '';
    turma.value = '';
    nChamada.value = '';
}

document.addEventListener("DOMContentLoaded", () => {
    if (bdProprio.length > 0) {
        escondeTelaCad();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const bdSalvo = JSON.parse(localStorage.getItem('bdProprio')) || [];
    bdProprio.push(...bdSalvo);
});

