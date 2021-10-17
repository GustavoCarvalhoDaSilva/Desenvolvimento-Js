function carregar(){
    var dias = document.getElementById('dias');
    var meses = document.getElementById('meses')
    var anoA = document.getElementById('anoA')

    var hora = document.getElementById('hora');
    var minuto = document.getElementById('minuto');
    var segundo = document.getElementById('segundo');

    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();
    var diasemana = data.getDay();
    var diaA = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();

    var mesesA = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    var semanas = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

    if(hr < 10){
        hr = "0"+hr;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0"+sec;
    }

    hora.innerHTML = ` ${hr} `;
    minuto.innerHTML = min;
    segundo.innerHTML = sec;

    dias.innerHTML = `${semanas[diasemana]},  ${diaA} d`;
    meses.innerHTML = `e ${mesesA[mes]}  d`;
    anoA.innerHTML = `e ${ano}`;

}
function horadoShow(){
    setInterval(carregar, 1000)
}