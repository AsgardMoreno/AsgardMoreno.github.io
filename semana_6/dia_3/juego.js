let instrucciones = document.querySelector(".instrucciones");

//Avatar
let piedra = document.querySelector('.piedra');
let pajaro = document.querySelector('.pajaro');
let agua = document.querySelector('.agua');

//Botones
let botonVsComp = document.querySelector('.vsComp');
let botonVsHum = document.querySelector('.vsHum');

// /*nombre de la funcion*/ //en milisegundos

function escribirInstruccion (instruccion){
  let instruccion = {
    Selecciona:'Selecciona Piedra, Pajaro o Agua',

  }
}



function seleccion(event){
  
  console.log(event.target.src);
}

piedra.addEventListenner('click', seleccion);
pajaro.addEventListenner('click', seleccion);
agua.addEventListenner('click', seleccion);



//let opciones = ['piedra', 'pajaro', 'agua'];
//let indice = MAth.floor(Math.random() * opciones.length)
//opcionAlAzar = opciones [indice];
