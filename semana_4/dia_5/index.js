// Crear una app que te diga cual es tu
// indice de masa corporal

// Utilizar css para que se vea presentable

// Usar inputs para pedir los datos

// La formula es  peso(kg) / altura(m) ^ 2

//Inputs
let peso = document.querySelector('input.peso')
let altura =document.querySelector('input.altura')
let calculo = document.querySelector('p.resultado')
let mensaje = document.querySelector('p.mensaje')


//Boton
let botonCalculo = document.querySelector('button.calculo')

//Funciones
function IMC(){
calculo.value = parseFloat(peso.value/(altura.value^2));
    if (calculo.value >= 30 ){
    document.body.style.backgroundColor = "#c63030";   
    mensaje.innerText = "OBESIDAD" 
    mensaje.style.color = "yellow";
    }
    if ((calculo.value >=25) & (calculo.value <30)){
    document.body.style.backgroundColor = "rgb(198, 134, 48)";   
    mensaje.innerText = "SOBREPESO" 
    mensaje.style.color = "#ffa900";
    }
    if ((calculo.value >=18.5) & (calculo.value <25)){
        document.body.style.backgroundColor = "rgb(167, 249, 217)";   
        mensaje.innerText = "PESO NORMAL" 
        mensaje.style.color = "WHITE";
    }
    if (calculo.value <18.5){
    document.body.style.backgroundColor = "rgb(255, 229, 3)";   
    mensaje.innerText = "FALTA DE PESO" 
    mensaje.style.color = "rgb(0, 255, 0)";
    }
let resulT = calculo.value.toFixed(2);
calculo.innerText = "Tu indice de Masa corporal es de " + resulT +" kg"

}   

botonCalculo.addEventListener('click', IMC)

document.body.style.background = "white"; //cambiar el color del fondo

