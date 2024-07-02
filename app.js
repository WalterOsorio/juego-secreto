let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asinarTextoElemento(elemeto, texto) {
    let elementoHTML = document.querySelector(elemeto);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asinarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asinarTextoElemento("p","El número secreto es menor")
        }else{
            asinarTextoElemento("p","El número secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el número generado esta incluido en la lista
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length === numeroMaximo) {
        asinarTextoElemento("p","Ya se sortearon todos los números posibles");
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asinarTextoElemento("h1", "Juego del número secreto!");
    asinarTextoElemento("p", `Indica un número del 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Iniciar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
