import { iniciarTrocaAutomatica } from "./bannerRotativo.js"
import { trocarBanner } from  "./bannerRotativo.js";

import { escondeTelaCad } from "./../login.js";
import { recolheDadosLogin } from "./../login.js";
import { limparDadosLogin } from "./../login.js";

window.escondeTelaCad = escondeTelaCad;
window.recolheDadosLogin = recolheDadosLogin;
window.limparDadosLogin = limparDadosLogin;

document.addEventListener("DOMContentLoaded", () => {
    iniciarTrocaAutomatica();
});

window.trocarBanner = trocarBanner