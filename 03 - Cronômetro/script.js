var h = 0;
var m = 0;
var s = 0;
var mi = 0;
var time
function digitos(digito) {
    if (digito < 10) {
        return ('0'+ digito)
    }else{
        return(digito)
    }
}
function start(){
    time = setInterval(timer, 100)
}
function stop(){
    clearInterval(time)
}
function reset(){
    clearInterval(time)
    h = 0;
    m = 0;
    s = 0;
    mi = 0;
    document.getElementById('timer').innerHTML = '00 : 00 : 00 : 00'

}
function timer(){
    if(mi < 9){
        mi = mi + 1;
    }else if(s < 59){
        mi = 0;
        s = s + 1;
    }else if(m < 59){
        mi = 0;
        s = 0;
        m = m + 1;
    }else if(h < 24){
        mi = 0;
        s = 0;
        m = 0;
        h = h + 1;
    }
    document.getElementById('timer').innerHTML = digitos(h) + ' : ' + digitos(m) + ' : ' + digitos(s) + ' : ' + digitos(mi)
}