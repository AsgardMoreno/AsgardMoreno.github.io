// css: cascade style sheet; sus instrucciones
//pueden aplicarse como cascada a los elementos descendientes

var miBoton = document.querySelector ('button')
function diHola(){
    window.alert('hola!');
}

miBoton.addEventListener('click', diHola);

//EJ1, asignar un evento al boton que pida un
//nombre por medio de un prompt, una vez que
//lo ingrese el usuario mostrarlo con alert

var miBoton2 = document.querySelector('button.ej2')
function nombre(){
    let nombre = window.prompt('Escribe tu nombre')
    window.alert(nombre);
}

miBoton2.addEventListener('click', nombre);

//Ej2, que muestre el valor del input en un window alert


var miInput = document.querySelector('input.tipo2.tipo3')

function inP(){
    let nombre2 = window.prompt('Escribe tu nombre')
window.alert(nombre2);
}
miInput.addEventListener('click', inP);

//funciones anonimas: funcion sin nombre, solo funciona dentro
//de ese pedazo de codigo
//Escribiendo la funcion dentro del listener
//Se puede asignar a una variable, solo al ser anonima
/*
miBoton.addEventListener('click', function() {
    window.alert('hola');
});
*/


//Ejercicio 2
//Tienen que hacer una aplicacino qe se
//use para proteger una boveda, con un
//input pediran la clave al usuario y 
//cuando el usuario presione un boton
//checara si la contraseña es cprrecta.
//mostrar el resultado en otro input


let miInput2 = document.querySelector ('input.me')
let cab2 = document.querySelector ('h2');

let miboton3 = document.querySelector ('button.con')

let innp = document.querySelector ('input')


function inP1(){
    let contraN = miInput2.value
    counter = 3
    if (contraN === '12345'){
        innp.value = "Contraseña Correcta, Acceso Permitido"
    }
    else{
        let contraN = miInput2.value
        innp.value = "Contraseña incorrecta"
        while ((contraN !== '12345') && (counter > 0)){
                miInput2.value = ""
                counter = counter - 1;
                cab2.innerText = "Tienes " + counter + " intentos más";
                if (counter = 0){
                cab2.innerText = "Cuenta Bancaria Bloqueada";
                cab2 = document.querySelector('input.me[placeholder="disabled"]')
                }
         }
    }
}
miboton3.addEventListener('click', inP1)


//Poner numero de intentos, al 3 intento que muestre que ya 
//no puede seguir, que lo muestre en head