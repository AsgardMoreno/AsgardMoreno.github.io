// Ejercicio para el día 3 Calculadora

// Utilizar css para darle una
// mejor presentación al html

// Generar funciones para las acciones
// de sumar, restar, multiplicar y dividir
// (Aún no se escribirá la funcionalidad)

// Generar variables que obtengan la
// referencia a los elementos de html
// (3 inputs y 4 botones)

// Asignar eventos a los botones para que
// ejecuten las funciones correspondientes

// Escribir la funcionalidad de las 4
// posibles operaciones de la calculadora

/*function eventoDeTeclado(e){         para que responda al presionar una tecla
console.log(e;)
document.addEventListener('keyup', eventoDeTeclado)
}*/


//Inputs
let Num1 = document.querySelector('input.num1')
let Num2 = document.querySelector('input.num2')
let Result = document.querySelector('input.resultado')


//Botones
let BotonS = document.querySelector('button.botonMas')
let BotonM = document.querySelector('button.botonMenos')
let BotonP = document.querySelector('button.botonPor')
let BotonE = document.querySelector('button.botonEntre')

//Funciones
function suma(){
Result.value = parseFloat(Num1.value) + parseFloat(Num2.value);
}
BotonS.addEventListener('click', suma);



function resta(){
Result.value = Num1.value - Num2.value;
}
BotonM.addEventListener('click', resta);


function multi(){
Result.value = Num1.value * Num2.value;
}
BotonP.addEventListener('click', multi);


function div (){
Result.value = parseInt(Num1.value) / parseInt(Num2.value);
}
BotonE.addEventListener('click', div);


//Eventos del teclado
//la e recibira un objeto con propiedades del evento
//dentro de esas propiedades estara el nombre de la
//tecla que se uso
function detectarEnter(e){
    if(i.key == 'Enter'){
        suma ()
    }
}
Num1.addEventListener('keyup', detectarEnter)
Num2.addEventListener('keyup', detectarEnter)

/*                                          //Keycode.info, para saber como llamar una tecla
//focus
//Detecta cuando entras a un campo
num1.addEventListener('focus', function(){
//Entre a un campo
});


//blur
//Detecta cuando sales de un campo
num1.addEventListener('blur', function(){
    //Sali a un campo
    });
    */