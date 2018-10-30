/*
  Una forma fácil de replicar 
  elementos con javascript es
  utilizando template strings

  dentro de backticks ` `
  
  para poner una variable dentro
  del template string se utiliza
    ${nombreVariable}
*/

let agregar = function(nombre) {
  let miTemplate = `
    <div class="tarjeta">
      <span>${nombre}</span>
    </div>
  `;
  let contenedor = 
    document.querySelector('.misTarjetas');

  contenedor.innerHTML += miTemplate;
};

let btn = document.querySelector('button');
let input = document.querySelector('input');

// Declaramos el evento
btn.addEventListener('click', function() {
  let nombreSeleccionado = input.value;
  agregar(nombreSeleccionado);
})