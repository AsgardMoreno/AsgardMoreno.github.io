/*
  Callback.

  Llamar una función al terminar la
  ejecución de otra función

  Útil para funciones en donde puede
  tardar un tiempo indefinido en 
  ejecutarse (Llamadas a internet)
*/

// Función para practicar callback
// el primer parametro que toma es
// un mensaje, el segundo una función
// que actuará como el callback
let mensaje = function(mensaje, callback) {
  setTimeout(function() {
    document.body.innerHTML += `<div>${mensaje}</div>`;
    if(callback) callback();
  }, Math.random() * 500 + 500);
};

//////////
// Lograr ejecutar la funcion varias
// veces y que muestre los mensajes
// secuencialmente

mensaje("Hola, este es el primero", function(){
  mensaje("Este es el segundo", function(){
    mensaje("Yo soy el último");
  });
});



