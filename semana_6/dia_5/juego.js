let instrucciones = document.querySelector(".instrucciones");
let juga1 = document.querySelector('.jug1');
let juga2 = document.querySelector('.jug2');

let divImg1 = document.querySelector('#imagenes1');
let divImg2 = document.querySelector('#imagenes2');

//Avatar1
let piedra = document.querySelector('.piedra');
let pajaro = document.querySelector('.pajaro');
let agua = document.querySelector('.agua');

//Avatar2
let piedra2 = document.querySelector('.piedra2');
let pajaro2 = document.querySelector('.pajaro2');
let agua2 = document.querySelector('.agua2');

//Botones
let botonVsComp = document.querySelector('.vsComp');
let botonVsHum = document.querySelector('.vsHum');
let jugar = document.querySelector('#jugar');


let marcador = document.querySelector('.marcador');
let reiniciar = document.querySelector('.reiniciar');

// /*nombre de la funcion*/ //en milisegundos
let avatar1 = null;
let avatar2 = null;


function reset(){
  
  instrucciones.classList.add('instrucciones');
  instrucciones.classList.remove('resultado');
  instrucciones.innerText = "Selecciona el MODO de juego y si es contra la computadora o un humano,o elige tu personaje para jugar directamente contra la computadora";
 
  agua.classList.remove('selectpersonaje');
  pajaro.classList.remove('selectpersonaje');
  piedra.classList.remove('selectpersonaje');
  agua2.classList.remove('selectpersonaje');
  pajaro2.classList.remove('selectpersonaje');
  piedra2.classList.remove('selectpersonaje');
  avatar1=null;
  avatar2=null;
  document.querySelector('.derrotas').innerText= defaultStatus;
  document.querySelector('.victorias').innerText= defaultStatus;
  
  remover();
  
}
reiniciar.addEventListener('click', reset)

function personaje1(){
  avatar1 = event.target.getAttribute('id');
  piedra.classList.remove('selectpersonaje');
  pajaro.classList.remove('selectpersonaje');
  agua.classList.remove('selectpersonaje');
  event.target.classList.add('selectpersonaje');
  console.log('boton vs comp/hum seleccionado = ' + event.target.classList.contains('selectpersonaje'))
  console.log('seleccion de jugador1 = ' + avatar1)
}

function personaje2(){
  piedra.removeEventListener('click', personaje1);
  pajaro.removeEventListener('click', personaje1);
  agua.removeEventListener('click', personaje1);
  piedra.classList.remove('selectpersonaje');
  pajaro.classList.remove('selectpersonaje');
  agua.classList.remove('selectpersonaje');
  avatar2 = event.target.getAttribute('id');
  piedra2.classList.remove('selectpersonaje');
  pajaro2.classList.remove('selectpersonaje');
  agua2.classList.remove('selectpersonaje');
  event.target.classList.add('selectpersonaje');
  console.log('boton vs comp/hum seleccionado = ' + event.target.classList.contains('selectpersonaje'))
  console.log('seleccion de jugador1 = ' + avatar2)
} 

//Anula la seleccion de personajes antes de seleccionar numero de jugadores
function remover(){
  if( (! (botonVsComp.classList.contains('selectboton') ) ) || (! (botonVsHum.classList.contains('selectboton') ) ) )
  {
  piedra.removeEventListener('click', personaje1);
  pajaro.removeEventListener('click', personaje1);
  agua.removeEventListener('click', personaje1);
  piedra2.removeEventListener('click', personaje2);
  pajaro2.removeEventListener('click', personaje2);
  agua2.removeEventListener('click', personaje2);
  }
}
//document.querySelector('elboton').classList.contains(la clase que hace que este seleccionado, con comillas y sin el punto)

let numeroGanadas=0;
let numeroDerrotas=0;

function botonComp(){

  juga1.innerText = "VICTORIAS";
  juga2.innerText = "DERROTAS";

  instrucciones.innerText = "Selecciona tu personaje";
  botonVsHum.classList.remove('selectboton');
  event.target.classList.add('selectboton');
  console.log(botonVsComp.classList.contains ('selectboton'))
  //activar seleccion de personaje1 y compu ya que se activo el boton vsComp
  piedra.addEventListener('click', personaje1);
  pajaro.addEventListener('click', personaje1);
  agua.addEventListener('click', personaje1); 
  
  piedra2.removeEventListener('click', personaje2);
  pajaro2.removeEventListener('click', personaje2);
  agua2.removeEventListener('click', personaje2);
 
}

function botonHum(){
  reset();
  juga1.innerText = "JUGADOR 1";
  juga2.innerText = "JUGADOR 2";

  
  instrucciones.innerText = "Primero elige jugador1, despues jugador 2, DESPUES PRESIONA JUGAR!";
  botonVsComp.classList.remove('selectboton');
  event.target.classList.add('selectboton');
  console.log(botonVsHum.classList.contains ('selectboton'))
  //activar seleccion de personaje1 
  piedra.addEventListener('click', personaje1);
  pajaro.addEventListener('click', personaje1);
  agua.addEventListener('click', personaje1); 
  // jugador 2 se activa despues de la seleccion de jugador1
  piedra2.removeEventListener('click', personaje2);
  pajaro2.removeEventListener('click', personaje2);
  agua2.removeEventListener('click', personaje2);
  
  piedra2.classList.add('noSelect');
  pajaro2.classList.add('noSelect');
  agua2.classList.add('noSelect');

  divImg2.classList.add('#mascara', '.mascara');

  jugar.removeEventListener('click', vsHum); 

  if( (piedra || agua || pajaro).contains('selectboton') ){
    piedra.removeEventListener('click', personaje1);
    pajaro.removeEventListener('click', personaje1);
    agua.removeEventListener('click', personaje1);
    personaje2();
    divImg1.classList.add('#mascara', '.mascara');
  }
}

botonVsHum.addEventListener('click', botonHum)
botonVsComp.addEventListener('click', botonComp);

function obtenerSeleccionCPU(opciones){
  let indice = Math.floor(Math.random() * opciones.length);
  return opciones [indice];
}
let compu = null;


function VsComp(){
  if (botonVsComp.classList.contains ('selectboton')){
  let opciones = [piedra2, pajaro2, agua2];
  compu = obtenerSeleccionCPU(opciones);
  
  
  piedra2.classList.remove('selectpersonaje');
  pajaro2.classList.remove('selectpersonaje');
  agua2.classList.remove('selectpersonaje');
  compu.classList.add('selectpersonaje');
  
  
  let opcionavatar = avatar1 + "2";
  console.log('opcionavatar es: '+ opcionavatar)

  instrucciones.classList.remove('instrucciones');
  instrucciones.classList.add('resultado');
  instrucciones.innerText = "EMPATE";
    
    if (opcionavatar == compu){
     
    }
    else if (avatar1 === "pajaro" && compu === opciones[0] || avatar1 === "piedra" && compu === opciones[2] || avatar1 === "agua" && compu === opciones[1]){
      
      instrucciones.innerText = "PERDISTE";
      numeroDerrotas = numeroDerrotas + 1;
      
    }  
     

    else if (avatar1 === "agua"   && compu === opciones[0] || avatar1 === "piedra" && compu === opciones[1] || avatar1 === "pajaro" && compu === opciones[2]){
  
      instrucciones.innerText = '"GANASTE"';
      numeroGanadas = numeroGanadas + 1;
      
    }
    
    document.querySelector('.derrotas').innerText=numeroDerrotas;
    document.querySelector('.victorias').innerText=numeroGanadas;

    if (numeroDerrotas > numeroGanadas){
      document.querySelector('.derrotas').classList.remove('perdiendo');
      document.querySelector('.derrotas').classList.add('ganando');
      document.querySelector('.victorias').classList.add('perdiendo');
      
    }
    else if (numeroDerrotas <= numeroGanadas){
      document.querySelector('.victorias').classList.remove('perdiendo');
      document.querySelector('.derrotas').classList.add('perdiendo');
      document.querySelector('.victorias').classList.add('ganando');
    }
  }
}
jugar.addEventListener('click', VsComp);

function VsHum(){
  
    instrucciones.classList.remove('instrucciones');
    instrucciones.classList.add('resultado');
    instrucciones.innerText = "EMPATE"; 

    if (opcionavatar === avatar2){
        
      instrucciones.innerText = "EMPATE";
    }

    if (avatar1 === "pajaro" && avatar2 === "piedra2" || avatar1 === "piedra" && avatar2 === "agua2" || avatar1 === "agua" && avatar2 === "pajaro2"){
      
      instrucciones.innerText = "GANA JUGADOR 2";
      numeroDerrotas = numeroDerrotas + 1;
    }
    
    if (avatar1 === "agua"   && avatar2 === "piedra2" || avatar1 === "piedra" && avatar2 === "pajaro2" || avatar1 === "pajaro" && avatar2 === "agua2"){
      instrucciones.innerText = "GANA JUGADOR 1";
      numeroGanadas = numeroGanadas + 1;
    }
    document.querySelector('.derrotas').innerText=numeroDerrotas;
    document.querySelector('.victorias').innerText=numeroGanadas;
    if (numeroDerrotas > numeroGanadas){
      document.querySelector('.derrotas').classList.remove('perdiendo');
  
      document.querySelector('.derrotas').classList.add('ganando');
      document.querySelector('.victorias').classList.add('perdiendo');
    
    }
    else if (numeroDerrotas <= numeroGanadas){
      document.querySelector('.victorias').classList.remove('perdiendo');
      document.querySelector('.derrotas').classList.add('perdiendo');
      document.querySelector('.victorias').classList.add('ganando');
    }
  }















