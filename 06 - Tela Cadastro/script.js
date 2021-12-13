let btn = document.getElementById("btn");
let login = document.getElementById("btn-login");


btn.addEventListener('click', animar);

login.addEventListener('click', voltar2);

function animar(){
    let fundo = document.getElementById("container-2");
    let login = document.getElementById("btn-login");
    let btn = document.getElementById("btn");
    let formulario = document.getElementById("formulario");
    let h1_animado = document.getElementById("h1-animado");
    let corpo = document.getElementById("corpo");
    

    btn.style.display="none";
    login.style.display="inline";
    formulario.style.display="flex";
    container.style.display="none";
    h1_animado.innerHTML ="De um jeito simples e rápido!"
    h1_animado.style.color="#fff"
    fundo.style.background="#2274A5"
    corpo.style.background="#fff"
    fundo.style.transition="1.5s"
    corpo.style.transition="1s"

    btn = fundo.style.animation = "animar-fundo 0.9s both 1";
}

function voltar2(){
    let btn = document.getElementById("btn");
    let fundo = document.getElementById("container-2");
    let login = document.getElementById("btn-login");
    let h1_animado = document.getElementById("h1-animado");
    let corpo = document.getElementById("corpo");


    btn.style.display="inline";
    login.style.display="none";
    formulario.style.display="none";
    container.style.display="inline";
    h1_animado.innerHTML ="Ainda não possui uma conta?";
    h1_animado.style.color="#2274A5";
    fundo.style.background="#fff";
    corpo.style.background="#2274A5";
    fundo.style.transition="1.5s";
    corpo.style.transition="1s";



    login = fundo.style.animation = "voltar 0.9s both 1";

}


// reponsividade animação

let tela1 = document.getElementById("tela-1");

tela1.addEventListener('click', animacao);


function animacao(){
    let container = document.getElementById("container");
    let formulario = document.getElementById("formulario");
    let tela1 = document.getElementById("tela-1");
    let tela2 = document.getElementById("tela-2");



    container.style.display="none"
    formulario.style.display="flex";



    tela1.style.display="none";
    tela2.style.display="flex";

    tela2.style.animation="opacity 1s both 1";
    formulario.style.animation="opacity 2s both 1";
    
    formulario.style.background= "#fff";

}

let tela2 = document.getElementById("tela-2");

tela2.addEventListener('click', animacao_voltar);


function animacao_voltar(){
    let container = document.getElementById("container");
    let formulario = document.getElementById("formulario");
    let tela1 = document.getElementById("tela-1");
    let tela2 = document.getElementById("tela-2");

    formulario.style.display="none";
    container.style.display="inline";
    

    tela1.style.display="flex";
    tela2.style.display="none";

    tela1.style.animation="opacity 1s both 1";
    container.style.animation="opacity 2s both 1";

}

