document.getElementById("adicionar").addEventListener("click", adicionarLista);

function adicionarLista(){
    var texto = document.getElementById("texto").value;
    var lista = document.getElementById("lista");
    var botao = document.getElementById("adicionar")

    if(texto == ""){
        alert("[ERRO] - Digite algo para adicionar a lista");
    }else{

        lista.innerHTML += `<p> ${texto} </li> </p>`;
        document.getElementById("texto").value = null;
    }

    botao.innerHTML = "Adicionar mais uma tarefa";
    lista.style.color = "#083D77";
}   
