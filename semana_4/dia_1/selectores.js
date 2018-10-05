// Los selectores son funciones de js que le pasas un string con el que quieres trabajar


let mietiqueta = document.querySelector("h1") //es una funcion para obtener la referencia de un (1solo) elemnto html
//para cambiar el contenido
mietiqueta.innerHTML = "Me llamo" //con html, permite el ingreso de elementos html, no recomendado si no quieres recibir contenido html como entrada
mietiqueta.innerText = "Me llamo" //solo permite entrada de texto, no es peligroso!

// Ejercicio 4
// Por medio de un prompt pedirle un nombre
// al usuario, remplazar el nombre dentro de h2
let etiqueta = document.querySelector("h2")
let user = window.prompt('Ingresa tu Nombre')
etiqueta.innerText = user

//Otra manera de hacerlo
/*
let etiqueta = document.querySelector("h2")
etiqueta.innerText = window.prompt('Ingresa tu Nombre')*/

//Input: mostrar un campo para ingresar valores
let miCampo = document.querySelector('input') //para selccionar uno en especifico, se puede crear un id en el documento html y dentro del queryS, se pone # y el id 
miCampo.value //guarda lo que ingreso el usuario


/*function poner(){
let el = document.querySelector('h2')
let miCampo = document.querySelector('input')
el.innerText = miCampo.value
}*/

//Ejercicio 5
//Poner un input y un h1, crear una funcion
//que agarre el valor de input, lo 
//multiplique por 2 y lo ponga dentro de h1
//*Guardar el resultado y sumar el nuevo numero al anterior

contador = 0
let  contador = el.innerText
function poner(){
    let el = document.querySelector('h1')
    let miCampo = document.querySelector('input')
    el.innerText = parseFloat((miCampo.value)*2) + contador
    return el.innerText
    }

    //Antes de querySelector se usaban estas, queryselector abarca estas
    documetn.getElementById('asd') //por id
    document.getElementsByClassName('') //por clase