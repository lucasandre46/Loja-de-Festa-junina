import { iniciarTrocaAutomatica } from "./bannerRotativo.js"
import { trocarBanner } from  "./bannerRotativo.js";

document.addEventListener("DOMContentLoaded", () => {
    iniciarTrocaAutomatica();
});

window.trocarBanner = trocarBanner