let modo = 'compu'; // Valores pueden ser 'compu' o 'humano'
let seleccionJugador1 = 0;
let seleccionJugador2 = 0;

function reset(){
  seleccionJugador1 = 0;
  seleccionJugador2 = 0;
}

function setModo(opcion){
  modo = opcion;
  reset();
}

function setOpcion(jugador, opcion){
  if (jugador === 1){
    seleccionJugador1 = opcion;
  } else {
    seleccionJugador2 = opcion;
  }
}

function obtenerSeleccionCPU(opciones){
        const indice = Math.floor(Math.random() * opciones.length);
        return opciones [indice];
}

document.getElementById('jugar').addEventListener('click', jugarRonda);

function jugarRonda(){
  const opciones = ['piedra', 'pajaro', 'agua'],
  jugador1 = opciones[seleccionJugador1],
  jugador2 = (modo === 'compu') ? obtenerSeleccionCPU(opciones) : opciones[seleccionJugador2];

  console.log(modo, jugador1, jugador2);
  //Agregar Lógica de comparación

if (jugador1 === "pajaro" && jugador2 === opciones[0] || jugador1 === "piedra" && jugador2 === opciones[2] || jugador1 === "agua" && jugador2 === opciones[1]){  
  console.log('Perdistessss');   
}  
     
else if (jugador1 === "agua"   && jugador2 === opciones[0] || jugador1 === "piedra" && jugador2 === opciones[1] || jugador1 === "pajaro" && jugador2 === opciones[2]){
  console.log('Ganastesssss');
}else{
    console.log('Empatastesss')
}

  //Desplegar resultados
    
  // if (avatar1 === "pajaro" && jugador2 === opciones[0] || avatar1 === "piedra" && compu === opciones[2] || avatar1 === "agua" && compu === opciones[1]){  
  //     instrucciones.innerText = "PERDISTE";
  //     numeroDerrotas = numeroDerrotas + 1;   
  // }  
     

  // else if (avatar1 === "agua"   && compu === opciones[0] || avatar1 === "piedra" && compu === opciones[1] || avatar1 === "pajaro" && compu === opciones[2]){
  //     instrucciones.innerText = '"GANASTE"';
  //     numeroGanadas = numeroGanadas + 1;
      
  //   }
    
  //   document.querySelector('.derrotas').innerText=numeroDerrotas;
  //   document.querySelector('.victorias').innerText=numeroGanadas;

  //   if (numeroDerrotas > numeroGanadas){
  //     document.querySelector('.derrotas').classList.remove('perdiendo');
  //     document.querySelector('.derrotas').classList.add('ganando');
  //     document.querySelector('.victorias').classList.add('perdiendo');
      
  //   }
  //   else if (numeroDerrotas <= numeroGanadas){
  //     document.querySelector('.victorias').classList.remove('perdiendo');
  //     document.querySelector('.derrotas').classList.add('perdiendo');
  //     document.querySelector('.victorias').classList.add('ganando');
  //   }
}

// document.querySelector('.jugador1-pajaro').addEventListener('click',function(){
//   setOpcion(1,2);
// });

// let instrucciones = document.querySelector(".instrucciones");

// //Avatar1
// let piedra = document.querySelector('.piedra');
// let pajaro = document.querySelector('.pajaro');
// let agua = document.querySelector('.agua');

// //Avatar2
// let piedra2 = document.querySelector('.piedra2');
// let pajaro2 = document.querySelector('.pajaro2');
// let agua2 = document.querySelector('.agua2');

// //Botones
// let botonVsComp = document.querySelector('.vsComp');
// let botonVsHum = document.querySelector('.vsHum');
// let jugar = document.querySelector('#jugar');

// let marcador = document.querySelector('.marcador');

// // /*nombre de la funcion*/ //en milisegundos
// let avatar1 = null;
// let avatar2 = null;

// const opcionesJugador2 = document.querySelectorAll('#imagenes2 img');
// opcionesJugador2.forEach( function(opcion){
//   opcion.addEventListener('click', obtenerSeleccionJugador2);
// })

// //Obtner clicks
// function obtenerSeleccionJugador2(event){
//     seleccionJugador2 = event.target;
// }

// function personaje1(){
//   avatar1 = event.target.getAttribute('id');
//   piedra.classList.remove('selectpersonaje');
//   pajaro.classList.remove('selectpersonaje');
//   agua.classList.remove('selectpersonaje');
//   event.target.classList.add('selectpersonaje');
//   console.log('boton vsComp seleccionado = ' + event.target.classList.contains('selectpersonaje'))
//   console.log('seleccion de jugador1 = ' + avatar1)
// }

// // function personaje2(evento){
// //   console.log('algo')
// //   console.log(evento);
// //   avatar2 = event.target.getAttribute('id');
// //   piedra2.classList.remove('selectpersonaje');
// //   pajaro2.classList.remove('selectpersonaje');
// //   agua2.classList.remove('selectpersonaje');
// //   event.target.classList.add('selectpersonaje');
// // } 

// //Anula la seleccion de personajes antes de seleccionar numero de jugadores
//   // if( (! (botonVsComp.classList.contains('selectboton') ) ) || (! (botonVsHum.classList.contains('selectboton') ) ) )
//   // {
//   // piedra.removeEventListener('click', personaje1);
//   // pajaro.removeEventListener('click', personaje1);
//   // agua.removeEventListener('click', personaje1);
//   // piedra2.removeEventListener('click', personaje2);
//   // pajaro2.removeEventListener('click', personaje2);
//   // agua2.removeEventListener('click', personaje2);
//   // }
// //document.querySelector('elboton').classList.contains(la clase que hace que este seleccionado, con comillas y sin el punto)

// let numeroGanadas=0;
// let numeroDerrotas=0;

// function botonComp(){
//   modoVsHumano = false;

//   instrucciones.innerText = "Selecciona tu personaje";
//   botonVsHum.classList.remove('selectboton');
//   event.target.classList.add('selectboton');
//   console.log(botonVsComp.classList.contains ('selectboton'))
//   //activar seleccion de personaje1 y compu ya que se activo el boton vsComp
//   piedra.addEventListener('click', personaje1);
//   pajaro.addEventListener('click', personaje1);
//   agua.addEventListener('click', personaje1); 
  
//   piedra2.removeEventListener('click', personaje2);
//   pajaro2.removeEventListener('click', personaje2);
//   agua2.removeEventListener('click', personaje2);

// }

// let compu = null;
// botonVsComp.addEventListener('click', botonComp);

// function obtenerSeleccionCPU(opciones){
//         const indice = Math.floor(Math.random() * opciones.length);
//         return opciones [indice];
// }

// function jugarRonda(vsHumano){
//   let opciones = [piedra2, pajaro2, agua2];
//   compu = !vsHumano ? obtenerSeleccionCPU(opciones) : seleccionJugador2;
//   console.log(compu);
  
//   piedra2.classList.remove('selectpersonaje');
//   pajaro2.classList.remove('selectpersonaje');
//   agua2.classList.remove('selectpersonaje');
//   if(!vsHumano){
//     compu.classList.add('selectpersonaje');
//   }
  
//   let opcionavatar = avatar1 + "2";
//   console.log('opcion avatar es: '+opcionavatar)

//   instrucciones.classList.remove('instrucciones');
//   instrucciones.classList.add('resultado');
//   instrucciones.innerText = "EMPATE";
    
//     if (opcionavatar == compu){
     
//     }
//     else if (avatar1 === "pajaro" && compu === opciones[0] || avatar1 === "piedra" && compu === opciones[2] || avatar1 === "agua" && compu === opciones[1]){
      
//       instrucciones.innerText = "PERDISTE";
//       numeroDerrotas = numeroDerrotas + 1;
      
//     }  
     

//     else if (avatar1 === "agua"   && compu === opciones[0] || avatar1 === "piedra" && compu === opciones[1] || avatar1 === "pajaro" && compu === opciones[2]){
  
//       instrucciones.innerText = '"GANASTE"';
//       numeroGanadas = numeroGanadas + 1;
      
//     }
    
//     document.querySelector('.derrotas').innerText=numeroDerrotas;
//     document.querySelector('.victorias').innerText=numeroGanadas;

//     if (numeroDerrotas > numeroGanadas){
//       document.querySelector('.derrotas').classList.remove('perdiendo');
//       document.querySelector('.derrotas').classList.add('ganando');
//       document.querySelector('.victorias').classList.add('perdiendo');
      
//     }
//     else if (numeroDerrotas <= numeroGanadas){
//       document.querySelector('.victorias').classList.remove('perdiendo');
//       document.querySelector('.derrotas').classList.add('perdiendo');
//       document.querySelector('.victorias').classList.add('ganando');
//     }
// }
// jugar.addEventListener('click', function(){
//   //opcion se seleccionó
//   jugarRonda(modoVsHumano);
// });

// // function VsHum(){
// //   if (botonVsHum.classList.contains('selectboton')===true){
// //     piedra.addEventListener('click', personaje1);
// //     pajaro.addEventListener('click', personaje1);
// //     agua.addEventListener('click', personaje1);
// //     piedra2.addEventListener('click', personaje2);
// //     pajaro2.addEventListener('click', personaje2);
// //     agua2.addEventListener('click', personaje2);
// //     instrucciones.classList.remove('instrucciones')
// //     instrucciones.classList.add('resultado');
  
// //     if (avatar1 === avatar2){
        
// //       instrucciones.innerText = "EMPATE";
// //     }

// //     if (avatar1 === "pajaro" && avatar2 === opciones[0] || avatar1 === "piedra" && avatar2 === opciones[2] || avatar1 === "agua" && avatar2 === opciones[1]){
      
// //       instrucciones.innerText = "GANA JUGADOR 2";
// //       numeroDerrotas = numeroDerrotas + 1;
// //     }
    
// //     if (avatar1 === "agua"   && avatar2 === opciones[0] || avatar1 === "piedra" && avatar2 === opciones[1] || avatar1 === "pajaro" && avatar2 === opciones[2]){
// //       instrucciones.innerText = "GANA JUGADOR 1";
// //       numeroGanadas = numeroGanadas + 1;
// //     }
// //     document.querySelector('.derrotas').innerText=numeroDerrotas;
// //     document.querySelector('.victorias').innerText=numeroGanadas;
// //     if (numeroDerrotas > numeroGanadas){
// //       document.querySelector('.derrotas').classList.remove('perdiendo');
  
// //       document.querySelector('.derrotas').classList.add('ganando');
// //       document.querySelector('.victorias').classList.add('perdiendo');
    
// //     }
// //     else if (numeroDerrotas <= numeroGanadas){
// //       document.querySelector('.victorias').classList.remove('perdiendo');
// //       document.querySelector('.derrotas').classList.add('perdiendo');
// //       document.querySelector('.victorias').classList.add('ganando');
    
// //     }
// //   }
// // }

// // jugar.addEventListener('click', VsHum)







// function botonHum(){
//   modoVsHumano = true;
//   instrucciones.innerText = "Jugador 1 selecciona primero su personaje";
//   botonVsComp.classList.remove('selectboton');
//   event.target.classList.add('selectboton');
// }


// botonVsHum.addEventListener('click', botonHum)








