// cambiando clases de un elemento

let x = document.querySelector('.elemento_x');
let y = document.querySelector('.elemento_y');
let z = document.querySelector('.elemento_z');


// classList
function togglex (){
    
    x.classList.toggle('chico');
}

x.addEventListener('click', togglex)

function toggley (){
  
   y.classList.toggle('grande');
}

y.addEventListener('click', toggley)

function togglez (){
   
    z.classList.toggle('chico');
}

z.addEventListener('click', togglez)
