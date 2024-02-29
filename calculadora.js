function insert (num) {
    let numero  = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean () {
    document.getElementById('resultado').innerHTML = '';
}
function back () {
     let diminuir = document.getElementById('resultado').innerHTML;
     document.getElementById('resultado').innerHTML = diminuir.substring(0, diminuir.length -1)
}
function calcular () {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        resultado = ''
        window.alert('Nada para calular')
    }
    
    
}