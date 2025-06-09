let banners = document.getElementById('banners');
let numeroAtual = 0;
let intervaloTroca;
const TOTAL_BANNERS = 4;
let eventosAdicionados = false;

export function trocarBanner(numerobanner) {
    numeroAtual = numerobanner;
    banners.style.left = `-${numerobanner}00vw`;

    for (let i = 0; i < TOTAL_BANNERS; i++) {
        const btn = document.getElementById('btn' + i);
        if (btn) {
            btn.classList.remove('botao-ativo');
            btn.classList.add('botao');
        }
    }

    const btnAtivo = document.getElementById('btn' + numerobanner);
    if (btnAtivo) {
        btnAtivo.classList.add('botao-ativo');
    }
}

function iniciarIntervalo() {
    clearInterval(intervaloTroca); // Garante que não existam múltiplos intervalos
    intervaloTroca = setInterval(() => {
        numeroAtual = (numeroAtual + 1) % TOTAL_BANNERS;
        trocarBanner(numeroAtual);
    }, 2500);
}

export function iniciarTrocaAutomatica() {
    iniciarIntervalo();

    if (!eventosAdicionados) {
        for (let i = 0; i < TOTAL_BANNERS; i++) {
            const botao = document.getElementById('btn' + i);
            if (botao) {
                botao.addEventListener('mouseenter', () => clearInterval(intervaloTroca));
                botao.addEventListener('mouseleave', iniciarIntervalo);
            }
        }
        eventosAdicionados = true;
    }
}
