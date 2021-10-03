function calcular(){
    var imc;

    var msg = document.getElementById('msg');
    var calculo = document.getElementById('calculo');

    var peso = parseInt(document.getElementById('peso').value);
    document.getElementById('peso-val').textContent = peso + " kg";

    var altura = parseInt(document.getElementById('altura').value);
    document.getElementById('altura-val').textContent = altura + " cm"

    imc = (peso/ Math.pow( (altura/100),2 )).toFixed(1);
    msg.innerHTML = `Seu imc é ${imc}`

    if(imc < 18.5){
        calculo.innerHTML = 'Você está <mark style="background-color:red; color:#fff">ABAIXO DO PESO</mark> - CUIDADO'
    }else if(imc >= 18.5 && imc <= 24.9){
        calculo.innerHTML = `Você está no seu <mark style="background-color:green; color:#fff">PESO IDEAL</mark> - PARABÉNS`
    }else if(imc >= 25 && imc <= 29.9){
        calculo.innerHTML = `Você está em <mark style="background-color:red; color:#fff">SOBREPESO</mark>- CUIDADO`
    }else if(imc >= 30 && imc <= 34.9){
        calculo.innerHTML = `Você está em <mark style="background-color:red; color:#fff">OBESIDADE GRAU I</mark>- CUIDADO`
    }else if(imc >= 35 && imc <= 39.9){
        calculo.innerHTML = `Você está em <mark style="background-color:red; color:#fff">OBESIDADE GRAU II</mark>- CUIDADO`
    }else if(imc >= 40){
        calculo.innerHTML = `Você está em <mark style="background-color:red; color:#fff">OBESIDADE GRAU III</mark>- CUIDADO`
    }
}

