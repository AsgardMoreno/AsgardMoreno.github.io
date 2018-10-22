let instrucciones = document.querySelector(".instrucciones");

//Avatar
let piedra = document.querySelector('.piedra');
let pajaro = document.querySelector('.pajaro');
let agua = document.querySelector('.agua');

//Botones
let botonVsComp = document.querySelector('.vsComp');
let botonVsHum = document.querySelector('.vsHum');
let jugar = document.querySelector('#jugar');

// /*nombre de la funcion*/ //en milisegundos

function personaje(event){
  let avatar = event.target.getAttribute('id');
  piedra.classList.remove('selectpersonaje');
  pajaro.classList.remove('selectpersonaje');
  agua.classList.remove('selectpersonaje');
  event.target.classList.add('selectpersonaje');
} 

piedra.addEventListener('click', personaje);
pajaro.addEventListener('click', personaje);
agua.addEventListener('click', personaje);

function botonComp(){
  instrucciones.innerText = "Selecciona tu personaje";
  botonVsHum.classList.remove('selectboton');
  event.target.classList.add('selectboton');
}
function botonHum(){
  instrucciones.innerText = "Jugador 1 selecciona primero su personaje";
  botonVsComp.classList.remove('selectboton');
  event.target.classList.add('selectboton');
}
function ModSel(){
  instrucciones.innerText = "Selecciona el modo de juego";
  event.target.classList.add('selectboton');
}
botonVsComp.addEventListener('click', botonComp)
botonVsHum.addEventListener('click', botonHum)


function VsComp(){
  avatar.classList.add('RSize')
}
jugar.addEventListener('click', VsComp)




//let opciones = ['piedra', 'pajaro', 'agua'];
//let indice = MAth.floor(Math.random() * opciones.length)
//opcionAlAzar = opciones [indice];
