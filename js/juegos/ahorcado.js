$(document).ready(function () {



});


function aleatorio(inferior, superior) {
    numPosibilidades = superior - inferior +1;
    aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
}

function esta(caracter, myArray) {
    for(var j=0; j<myArray.length; j++){
        if(caracter == myArray[j]){
            return true;
        }
    }
    return false;
}

function estanTodos(arrayAciertos,miPalabra) {
    for(var i=0; i<miPalabra.length; i++){
        if(!esta(miPalabra.charAt(i),arrayAciertos)){
            return false;
        }
    }
    return true;
}

var palabras = ['ahorcado', 'lavadora', 'invierno', 'plastico', 'ordenador', 'colador', 'guantera', 'alimentador', 'calculos'];
var palabraEscogida = palabras[aleatorio(0,palabras.length-1)];
var aciertos= [];

function escribePalabra(palabra, arrayAciertos) {
    var texto = '';
    for (var  i=0; i<palabra.length; i++){
        texto += '<span>';
        var cActual = palabra.charAt(i);
        if(esta(cActual, arrayAciertos)){
            texto += cActual;
        }else {
            texto += '_';
        }
    }
    $("#letras").html(texto);
}