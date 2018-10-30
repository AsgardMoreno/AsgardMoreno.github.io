//
//      

//        Imprimir Imagenes
let urlNext;
let urlPrev;
let urlLast;

let personajes =null;

let respuesta = function(res) {
  console.log(res);
  personajes = Array(20);
  urlNext = (res.info.next);
  urlPrev = (res.info.prev);
  urlLast = (res.info.pages);

  for(i = 0; i<20; i++){
  
  document.querySelector('.DivR').innerHTML +=
  `
    <div class="pImg">
      <img src="${res.results[i].image}" class="person">
      <div>#${res.results[i].id}-${res.results[i].name}</div>
      <div>Genero: ${res.results[i].gender}</div>
      <div>Especie: ${res.results[i].species}</div> <div>${res.results[i].type}</div> 
      <div>Origen: ${res.results[i].origin.name}</div>
      
    </div>
    `
  }
  
}
  
function cambiarPagina(e){

document.querySelector('.DivR').innerHTML = 
'   '
let flecha = e.target.getAttribute('id');
console.log("boton seleccionado = " + flecha);  

if (flecha === 'botonSig'){
  
  fetch(urlNext)
  .then(res => res.json() )
  .then(respuesta)
}
  if (flecha === 'botonAnt'){
    
    fetch(urlPrev)
    .then(res => res.json() )
    .then(respuesta)    
}
  if (flecha === 'botonUlt'){ 
    
    fetch(`https://rickandmortyapi.com/api/character/?page=${urlLast}`)
    .then(res => res.json() )
    .then(respuesta)
  }
  if (flecha === 'botonPrim'){ 
    
    fetch(`https://rickandmortyapi.com/api/character/?page=1`)
    .then(res => res.json() )
    .then(respuesta)
  }
}

let botonNext = document.querySelector('#botonSig');
let botonAnt = document.querySelector('#botonAnt');
let botonPrim = document.querySelector('#botonPrim');
let botonUlt = document.querySelector('#botonUlt');
console.log(botonNext, botonAnt, botonUlt, botonPrim);

botonAnt.addEventListener('click', cambiarPagina);
botonPrim.addEventListener('click', cambiarPagina);
botonUlt.addEventListener('click', cambiarPagina);
botonNext.addEventListener('click', cambiarPagina);

let select = document.querySelector('.filtro');
console.log("filtro " + select.value)
function filter(){
    if (select.value === "all"){
        document.querySelector('.DivR').innerHTML =
        ` `
        fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(respuesta)
    }
    else if(select.value === "name"){
        document.querySelector('.DivR').innerHTML =
        ` `
        fetch(`https://rickandmortyapi.com/api/character/?name=a`)
        .then(response => response.json())
        .then(respuesta)
    }
    else if (select.value === "alien" || "human" || "humanoid" || "unknown" || "poopybutthole" || "mytholog" 
    || "animal" || "vampire" || "robot" || "cronenberg" || "disease" || "parasite"){
        document.querySelector('.DivR').innerHTML =
        ` `
        fetch(`https://rickandmortyapi.com/api/character/?species=${select.value}`)
        .then(response => response.json())
        .then(respuesta)
    }
    else if(select.value === "male" || "female" || "unknown"){
        document.querySelector('.DivR').innerHTML =
        ` `
        fetch(`https://rickandmortyapi.com/api/character/?gender=${select.value}`)
        .then(response => response.json())
        .then(respuesta)
    }
       
}
select.addEventListener('input', filter)

// //fetch
fetch("https://rickandmortyapi.com/api/character/?page=1")
  .then(res => res.json() )
  .then(respuesta)
