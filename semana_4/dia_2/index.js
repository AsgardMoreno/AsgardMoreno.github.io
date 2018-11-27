// css: cascade style sheet; sus instrucciones
//pueden aplicarse como cascada a los elementos descendientes

var miBoton = document.querySelector('button')
function diHola(){
    window.alert('hola!');
}

miBoton.addEventListener('click', diHola);

//EJ1, asignar un evento al boton que pida un
//nombre por medio de un prompt, una vez que
//lo ingrese el usuario mostrarlo con alert
var nombreUsuario;
var miInput = document.querySelector('input.tipo2.tipo3')
function nombre(){
    nombreUsuario = window.prompt('Escribe tu nombre')
    return nombreUsuario;
    
}

miInput.addEventListener('click', nombre);

//Ej2, que muestre el valor del input en un window alert


var miBoton2 = document.querySelector('button.ej2')

function inP(){
window.alert(nombreUsuario)
}
miBoton2.addEventListener('click', inP);

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
//Poner numero de intentos, al 3 intento que muestre que ya 
//no puede seguir, que lo muestre en head


let contraUser = document.querySelector('input.me');
let cab2 = document.querySelector('h2');

let miboton3 = document.querySelector('button.con');

const contraValue = '12345';
const user = "oscar";

let counter = 3;
function contrasena(){
    
    console.log("contra " + contraUser.value + " ,usuario " + nombreUsuario )
    if ((contraValue === contraUser.value) && (user === nombreUsuario)){
        cab2.innerText = "Acceso Permitido"
        document.querySelector('input.me').disabled = true;
        document.querySelector('input.me').placeholder = 'Ya accedio!';
    }
    if ((contraValue !== contraUser.value) || (user !== nombreUsuario)){
        counter = counter - 1
        contraUser.value = "";
        cab2.innerText = "Tienes " + counter + " intentos"; 
         
        if (counter <= 0){
            cab2.innerText = "Cuenta Bancaria Bloqueada";
            document.querySelector('input.me').disabled = true;
            document.querySelector('input.me').placeholder = 'disabled';
        } 
    }
} 

miboton3.addEventListener('click', contrasena)
