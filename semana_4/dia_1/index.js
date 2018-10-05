// Modals

// Variable global dentro de exploradores
// window: es uno que tiene funciones, todo lo que esta dentro de 
// Alert, envia mensaje al usuario. Desde html, llamando js
window.alert("esta es una alerta") //solo alert tambien funciona, pero en ciertos
                                //se usa para otras cosas y es bueno especificarlo

// Confirm
if (window.confirm("seguro?")){    //generalmente se usa con if, confirm da opciones:cancelar y aceptar
    window.alert("si")
} else{
    window.alert("NO")
}

// Ejercicio 1; Preguntar con un confirm si desea sumar
// Declarar 2 variables con numeros
// En caso de si, mostrar la suma de los 2 con alert
// en caso de no, la resta
let num1 = 50
let num2 = 100
if (window.confirm("Sumar o Restar")){   
    window.alert(num1 + num2)
} else{
    window.alert(num2 -num1)
}

// Prompt: Permite el ingreso de datos  
// parseFloat("6.4") // de texto a numero
// parseInt("6.2") //6
let nombre = window.prompt('Ingresa tu nombre')
window.alert(`Mi nombre es ${nombre}`)

//Por medio del prompt, pedir valores
//Mostrarlo por alert la suma de los 2

let valor1 = parseFloat(window.prompt('Escribe el valor 1'))
let valor2 = parseFloat(window.prompt( 'Escribe el segundo valor'))
suma = valor1 + valor2
window.alert(`La suma es de ${suma}` )

// Comiste en un restaurant y el mesero
//te trae la terminal para que pagues,
// debes ingresar cuanto pagaras, unescapevez ingresado
// te pregunta si deseas 
// agregar propina, imprime el total que 
// te cobraron a tu tarjeta

let cuenta = parseFloat(window.prompt('Es hora de pagar tu comida, Ingresa cantidad a pagar:'))
if (window.confirm ('Desea Agregar propina?? ')){
    let percent = parseFloat(window.prompt(`Que porentaje de propina desea dejar??`))
    cuentaTotal = cuenta * (cuenta/percent)
    }    else{
        cuentaTotal = cuenta
    }
window.alert (`El total a cargar a tu tarjeta es de : $ ${parseInt(cuentaTotal)}`)


let numx = parseFloat(window.prompt('Ingresa una cantidad'))
contador = 1
while (contador < numx){
window.alert(`ventana # ${contador}` )
contador++
}