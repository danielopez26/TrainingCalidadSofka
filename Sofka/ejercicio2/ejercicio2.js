const exitoso = document.getElementById('exitoso');
const bultoLiviano = document.getElementById('bultoLiviano');
const promedioPeso = document.getElementById('promedioPeso');
const dolares = document.getElementById('dolares');
const pesos = document.getElementById('pesos');
const numeroBultos = document.getElementById('numeroBultos');
const bultoPesado = document.getElementById('bultoPesado');

let bultos = [];
const pesoMax = 18000;

function cargarBulto() {
    let salir = "s";
    let seguir;

    while (salir == "s") {
        peso = prompt("Ingrese el peso del bulto ");
        if (peso <= 500) {
            bultos.push(peso);
        } else {
            alert("Excede el peso maximo");
        }
        seguir = confirm("Desea cargar mas bultos")
        if (seguir == false) {
            salir = "y";
        }
    }
    return (exitoso.innerHTML = "Su carga ha sido exitosa");
}

function precioBulto() {
    let valorBulto = [];
    let sumaBultos = 0;
    let pesoPromedio = 0;
    let valorTotal = 0;

    for (var i = 0; i < bultos.length; i++) {
        if (bultos[i] >= 0 & bultos[i] <= 25) {
            valorBulto.push((bultos[i] * 0));
        } else if (bultos[i] >= 26 & bultos[i] <= 300) {
            valorBulto.push((bultos[i] * 1500));
        } else {
            valorBulto.push((bultos[i] * 2500));
        }
        sumaBultos += (parseInt(bultos[i]));
        valorTotal += (parseInt(valorBulto[i]));
    }
    pesoPromedio = sumaBultos / i;
    promedioPeso.innerHTML = ("El peso promedio de los bultos es: " + pesoPromedio + "<br>");
    dolares.innerHTML = ("El valor total en dolares de la carga es: " + valorTotal / 3600 + "$" + "<br>");
    return (pesos.innerHTML = ("El valor total de la carga es: " + valorTotal + " pesos"));
}

cargarBulto();
precioBulto();
numeroBultos.innerHTML = ("El numero de bultos cargados es: " + bultos.length + "<br>");
bultoPesado.innerHTML = ("El bulto mas pesado es: " + Math.max(...bultos) + "<br>");
bultoLiviano.innerHTML = ("El bulto mas liviano es: " + Math.min(...bultos) + "<br>");