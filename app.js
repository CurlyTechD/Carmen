let numeroSecreto= 0;
let intentos = 0;
let listaNumerosSorteados =[]; 
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Felicidades Ganaste en ${intentos} ${(intentos === 1) ? 'Vez': 'Veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // EL Usuario No Acerto 
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ("p", "El Numero Secreto es Menor");
        } else {
            asignarTextoElemento ('p', 'El Numero Secreto es Mayor');
        }
        intentos ++; 
        limpiarCaja();
    }
    return; 
}
function limpiarCaja (){
 document.querySelector ('#valorUsuario').value = '';
  
}

function generaNumeroSecreto (){
 let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
console.log (numeroGenerado);
console.log (listaNumerosSorteados);
// Si ya sorteaste todos los numeros 
if(listaNumerosSorteados.length == numeroMaximo){
asignarTextoElemento ('p', 'Ya se sortearon todos los numeros posibles');
}else {
// Si el Numero Generado esta en la lista 
if (listaNumerosSorteados.includes(numeroGenerado)){
return generaNumeroSecreto();

} else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}
}
}

function condicionesIniciales(){
asignarTextoElemento ('h1','Juego del Numero Secreto!');
asignarTextoElemento ("p",`Indica un Numero Entre 1 y ${numeroMaximo}`);
numeroSecreto= generaNumeroSecreto ();
intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros 
    //Gemnerar el Numero aleatorio 
    //Inicializar el numero de Intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
 
}

condicionesIniciales();




