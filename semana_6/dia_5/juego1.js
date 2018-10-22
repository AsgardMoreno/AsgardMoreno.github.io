let instrucciones = document.querySelector(".instrucciones");

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

// /*nombre de la funcion*/ //en milisegundos
let avatar1 = null;
let avatar2 = null;
let avatar3 = null;

function personaje1(event){
  avatar1 = event.target.getAttribute('id');
  piedra.classList.remove('selectpersonaje');
  pajaro.classList.remove('selectpersonaje');
  agua.classList.remove('selectpersonaje');
  event.target.classList.add('selectpersonaje');
}

function personaje2(event){
  avatar2 = event.target.getAttribute('id');
  piedra2.classList.remove('selectpersonaje');
  pajaro2.classList.remove('selectpersonaje');
  agua2.classList.remove('selectpersonaje');
  event.target.classList.add('selectpersonaje');
} 

//Anula la seleccion de personajes antes de seleccionar numero de jugadores
piedra.removeEventListener('click', personaje1);
pajaro.removeEventListener('click', personaje1);
agua.removeEventListener('click', personaje1);
piedra2.removeEventListener('click', personaje1);
pajaro2.removeEventListener('click', personaje1);
agua2.removeEventListener('click', personaje1);



function personaje3(compu){
  avatar3 = compu.target.getAttribute('id');
  piedra2.classList.remove('selectpersonaje');
  pajaro2.classList.remove('selectpersonaje');
  agua2.classList.remove('selectpersonaje');
  compu.target.classList.add('selectpersonaje');
  
} 

// para checar si el boton vs comp esta seleccionado
//document.querySelector('elboton').classList.contains(la clase que hace que este seleccionado, con comillas y sin el punto)

let opciones = ['piedra', 'pajaro', 'agua'];
let indice = Math.floor(Math.random() * opciones.length);
compu = opciones [indice];

let numeroGanadas=0;
let numeroDerrotas=0;

function botonComp(){
  instrucciones.innerText = "Selecciona tu personaje";
  botonVsHum.classList.remove('selectboton');
  event.target.classList.add('selectboton');
}
botonVsComp.addEventListener('click', botonComp);


function VsComp(){
  if (botonVsComp.classList.contains('selectboton')===true){
    
    piedra.addEventListener('click', personaje1);
    pajaro.addEventListener('click', personaje1);
    agua.addEventListener('click', personaje1);

    let opciones = [piedra2, pajaro2, agua2];
    let indice = Math.floor(Math.random() * opciones.length);
    let compu = opciones [indice];

    avatar3 = compu;
    piedra2.classList.remove('selectpersonaje');
    pajaro2.classList.remove('selectpersonaje');
    agua2.classList.remove('selectpersonaje');
    compu.classList.add('selectpersonaje');

    instrucciones.classList.remove('instrucciones');
    instrucciones.classList.add('resultado');
    avatar1.classList.remove("RSize");
    compu.classList.remove("RSize");
    
    if (avatar1 === compu){
      instrucciones.innerText = "EMPATE";
      avatar1.classList.remove("RSize");
      compu.classList.remove("RSize");

    }

    else if (avatar1 === "pajaro" && compu === opciones[0] || avatar1 === "piedra" && compu === opciones[2] || avatar1 === "agua" && compu === opciones[1]){
      avatar1.classList.remove("RSize");
      instrucciones.innerText = "PERDISTE";
      numeroDerrotas = numeroDerrotas + 1;
      compu.classList.add("RSize");
    }
      
    else if (avatar1 === "agua"   && compu === opciones[0] || avatar1 === "piedra" && compu === opciones[1] || avatar1 === "pajaro" && compu === opciones[2]){
      compu.classList.remove("RSize");
      instrucciones.innerText = "GANASTE";
      numeroGanadas = numeroGanadas + 1;
        
      avatar1.classList.add("RSize");
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

jugar.addEventListener('click', VsComp)

// function VsHum(){
//   if (botonVsHum.classList.contains('selectboton')===true){
//     piedra.addEventListener('click', personaje1);
//     pajaro.addEventListener('click', personaje1);
//     agua.addEventListener('click', personaje1);
//     piedra2.addEventListener('click', personaje2);
//     pajaro2.addEventListener('click', personaje2);
//     agua2.addEventListener('click', personaje2);
//     instrucciones.classList.remove('instrucciones')
//     instrucciones.classList.add('resultado');
  
//     if (avatar1 === avatar2){
        
//       instrucciones.innerText = "EMPATE";
//     }

//     if (avatar1 === "pajaro" && avatar2 === opciones[0] || avatar1 === "piedra" && avatar2 === opciones[2] || avatar1 === "agua" && avatar2 === opciones[1]){
      
//       instrucciones.innerText = "GANA JUGADOR 2";
//       numeroDerrotas = numeroDerrotas + 1;
//     }
    
//     if (avatar1 === "agua"   && avatar2 === opciones[0] || avatar1 === "piedra" && avatar2 === opciones[1] || avatar1 === "pajaro" && avatar2 === opciones[2]){
//       instrucciones.innerText = "GANA JUGADOR 1";
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
//   }
// }

// jugar.addEventListener('click', VsHum)







function botonHum(){
  instrucciones.innerText = "Jugador 1 selecciona primero su personaje";
  botonVsComp.classList.remove('selectboton');
  event.target.classList.add('selectboton');
}

function ModSel(){
  instrucciones.innerText = "Selecciona el modo de juego";
  event.target.classList.add('selectboton');
}

botonVsHum.addEventListener('click', botonHum)








