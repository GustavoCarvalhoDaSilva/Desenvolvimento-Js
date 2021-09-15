function somar(){   
    let resultado = document.getElementById('txt')
    let nomeU = document.getElementById('nome').value;
    let alturaU = Number.parseFloat(document.getElementById('altura').value);
    let pesoU = Number.parseFloat(document.getElementById('peso').value);
    let calculo = pesoU/alturaU**2
    if(calculo <= 18.5){
        resultado.innerHTML = `${nomeU}, Seu IMC é ${calculo.toFixed(2)}<br>
        Você está abaixo do peso <br>
        Você deve ficar preocupado e consultar um médico`
    }else if(calculo >= 18.6 && calculo <= 24.9){
        resultado.innerHTML = `${nomeU}, Seu IMC é ${calculo.toFixed(2)}<br>
        Você está no peso ideal (Parabéns)<br>`
    }else if(calculo >= 25 && calculo <= 29.9){
        resultado.innerHTML = `${nomeU}, Seu IMC é ${calculo.toFixed(2)}<br>
        Você está levemente acima do peso`
    }else if(calculo >= 30 && calculo <= 34.9){
        resultado.innerHTML = `${nomeU}, Seu IMC é ${calculo.toFixed(2)}<br>
        Você está em OBESIDADE GRAU I <br>
        Tome cuidado`
    }else if(calculo >= 35 && calculo <= 39.9){
        resultado.innerHTML = `${nomeU}, Seu IMC é ${calculo.toFixed(2)}<br>
        Você está em OBESIDADE GRAU II (Severa) <br>
        Tome cuidado e consulte um médico`
    }else if(calculo > 40){
        resultado.innerHTML = `${nomeU}, Seu IMC é ${calculo.toFixed(2)}<br>
        Você está em OBESIDADE GRAU III (Mórbida) <br>
        Tome muito cuidado e culte um médico em imediatamente`
    } 
}
function resetar(){
    let resultado = document.getElementById('txt')
    resultado.innerHTML = ""
}