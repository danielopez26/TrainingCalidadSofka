const resultado = document.getElementById('resultado');

//Funcion que me lee los datos y ejecuta la funcion pasaje al dar click en el boton calcular
var getData = function() {
    const distancia = parseInt(document.getElementById('distancia').value);
    const dias = parseInt(document.getElementById('dias').value);
    showPrice = (pasaje(distancia, dias));
    resultado.innerHTML = showPrice;
}


//Funcion que calcula el valor del pasaje

function pasaje(distancia, dias) {
    const valorKm = 35;
    var valor;

    if (distancia > 1000 & dias > 7) {
        descuento = ((distancia * valorKm) * 30) / 100;
        valor = (distancia * valorKm) - descuento;
    } else {
        valor = distancia * valorKm;
    }
    return ("El valor total del viaje es " + valor + "$");
}