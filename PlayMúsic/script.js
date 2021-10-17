let musicas = [
    {titulo:'Spectre', artista:'Alan Walker', src:'music/Alan Walker - Spectre [NCS Release].mp3'},

    {titulo:'Cartoon - On & On', artista:'NCS Release - (feat. Daniel Levi) ', src:'music/Cartoon - On  On (feat. Daniel Levi) [NCS Release].mp3'},

    {titulo:'My Heart', artista:'Different Heaven & EH!DE', src:'music/Different Heaven  EHDE - My Heart.mp3'},

    {titulo:'Elektronimia - Energy', artista:'NCS Release [NCS Release]', src:'music/Elektronomia - Energy [NCS Release].mp3'},

    {titulo:'Janji - Heroes Tonigh', artista:'(feat. Johnning) [NCS Release]', src:'music/Janji - Heroes Tonight (feat. Johnning) [NCS Release].mp3'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', ()=>{
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 4;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', ()=>{
    indexMusica++;
    if(indexMusica > 4){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () =>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display="block";
    document.querySelector('.botao-play').style.display="none";
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display="block";
    document.querySelector('.botao-pause').style.display="none";
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + "%";
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
    
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos/60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = "0" + campoSegundos
    }
    return campoMinutos + ':' + campoSegundos;
}