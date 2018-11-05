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
  numeroGanadas=0;
  numeroDerrotas=0;
  agua.classList.remove('selectpersonaje');
  pajaro.classList.remove('selectpersonaje');
  piedra.classList.remove('selectpersonaje');
  agua2.classList.remove('selectpersonaje');
  pajaro2.classList.remove('selectpersonaje');
  piedra2.classList.remove('selectpersonaje');
  avatar1=null;
  avatar2=null;
  botonVsHum.classList.remove('selectboton');
  botonVsHum.classList.remove('selectboton');
  document.querySelector('.derrotas').innerText= defaultStatus;
  document.querySelector('.victorias').innerText= defaultStatus;
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
reiniciar.addEventListener('click', reset)

function personaje1(){
  avatar1 = event.target.getAttribute('id');
  piedra.classList.remove('selectpersonaje');
  pajaro.classList.remove('selectpersonaje');
  agua.classList.remove('selectpersonaje');
  event.target.classList.add('selectpersonaje');
  
  console.log('seleccion de jugador1 = ' + avatar1)
  console.log('avatar1 seleccionado? '+ event.target.classList.contains('selectpersonaje') );
  //Para cuando es de dos jugadores
  if(botonVsHum.classList.contains('selectboton') && (event.target.classList.contains('selectpersonaje')==true)){
    divImg1.classList.add('mascara');
    divImg2.classList.remove('mascara');

    piedra2.addEventListener('click', personaje2);
    pajaro2.addEventListener('click', personaje2);
    agua2.addEventListener('click', personaje2); 
    if (avatar2 === piedra2 || agua2 || pajaro2){
      jugar.addEventListener('click', vsHum);
    }
  }
  if (botonVsComp.classList.contains ('selectboton') && avatar1 != null){
  jugar.addEventListener('click', vsComp)
  }
  return (avatar1)

}

//Anula la seleccion de personajes antes de seleccionar numero de jugadores
// function evitarSeleccion(){
//   if( (! (botonVsComp.classList.contains('selectboton') ) ) || (! (botonVsHum.classList.contains('selectboton') ) ) )
//   {
//   piedra.removeEventListener('click', personaje1);
//   pajaro.removeEventListener('click', personaje1);
//   agua.removeEventListener('click', personaje1);
//   piedra2.removeEventListener('click', personaje2);
//   pajaro2.removeEventListener('click', personaje2);
//   agua2.removeEventListener('click', personaje2);
//   }
// }
//document.querySelector('elboton').classList.contains(la clase que hace que este seleccionado, con comillas y sin el punto)

let numeroGanadas=0;
let numeroDerrotas=0;

function botonComp(){
  jugar.removeEventListener('click', vsHum)
  reset()
  instrucciones.classList.remove('resultado');
  instrucciones.classList.add('instrucciones');

  divImg2.classList.remove('mascara');
  divImg1.classList.remove('mascara');

  juga1.innerText = "VICTORIAS";
  juga2.innerText = "DERROTAS";

  instrucciones.innerText = "Selecciona tu personaje";
  botonVsHum.classList.remove('selectboton');
  event.target.classList.add('selectboton');
  console.log('botonVsComp?? '+ botonVsComp.classList.contains ('selectboton'))
  //activar seleccion de personaje1 y compu ya que se activo el boton vsComp
  piedra.addEventListener('click', personaje1);
  pajaro.addEventListener('click', personaje1);
  agua.addEventListener('click', personaje1); 
  jugar.addEventListener('click', vsComp);
}
botonVsComp.addEventListener('click', botonComp)

function botonHum(){
  reset()
  jugar.removeEventListener('click', vsComp)

  juga1.innerText = "JUGADOR 1";
  juga2.innerText = "JUGADOR 2";
  instrucciones.classList.remove('resultado');
  instrucciones.classList.add('instrucciones');

  instrucciones.innerText = "Primero elige jugador1, despues jugador 2, DESPUES PRESIONA JUGAR!";
  botonVsComp.classList.remove('selectboton');
  event.target.classList.add('selectboton');
  console.log('botonVsHum?? ' + botonVsHum.classList.contains ('selectboton'))
  // jugador 2 se activa despues de la seleccion de jugador1
  divImg2.classList.add('mascara');
  jugar.removeEventListener('click', vsHum); 
  //activar seleccion de personaje1 
  piedra.addEventListener('click', personaje1);
  pajaro.addEventListener('click', personaje1);
  agua.addEventListener('click', personaje1); 

}

  function personaje2(){
  avatar2 = event.target.getAttribute('id');
  piedra2.classList.remove('selectpersonaje');
  pajaro2.classList.remove('selectpersonaje');
  agua2.classList.remove('selectpersonaje');
  event.target.classList.add('selectpersonaje');
  console.log('avatar2 seleccionado??  ' + event.target.classList.contains('selectpersonaje'));
  console.log('seleccion de jugador2?? ' + event.target.classList.contains('selectpersonaje') );
  if(botonVsHum.classList.contains('selectboton') && (event.target.classList.contains('selectpersonaje')==true)){
    jugar.addEventListener('click', vsHum);
  }
  return (avatar2)

  }
    

botonVsHum.addEventListener('click', botonHum)


function obtenerSeleccionCPU(opciones){
  let indice = Math.floor(Math.random() * opciones.length);
  return opciones [indice];
}
let compu = null;


function vsComp(){
  let opciones = [piedra2, pajaro2, agua2];
  compu = obtenerSeleccionCPU(opciones);

  if (botonVsComp.classList.contains ('selectboton') && avatar1 != null && compu != null){
  
  
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
  avatar1 = null;
  setTimeout(function(){
  compu.classList.remove('selectpersonaje')
  piedra.classList.remove('selectpersonaje')
  pajaro.classList.remove('selectpersonaje')
  agua.classList.remove('selectpersonaje')
  }, 1500
  )
}




function vsHum(){
  if (botonVsHum.classList.contains ('selectboton') && avatar1 != null && avatar2 != null){

    divImg1.classList.remove('mascara');
 
    instrucciones.classList.remove('instrucciones');
    instrucciones.classList.add('resultado');
    instrucciones.innerText = "EMPATE"; 

    if (avatar1 === avatar2){
        
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
  
  avatar1 = null;
  avatar2 = null;
  

  setTimeout(function(){

    piedra.classList.remove('selectpersonaje')
    pajaro.classList.remove('selectpersonaje')
    agua.classList.remove('selectpersonaje')

    piedra2.classList.remove('selectpersonaje')
    pajaro2.classList.remove('selectpersonaje')
    agua2.classList.remove('selectpersonaje')
    divImg2.classList.add('mascara');

    }, 2000
    )
    

}

