var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = 'pt';
provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

let InicioSesion = document.querySelector('.sesion');
let CSesion = document.querySelector('.csesion')

function Sesion(){
    firebase.auth().signInWithPopup(provider)
    .then(loginConExito)
    .catch(loginConError)
}


function CerrarSesion(){
    firebase.auth().signOut()

}

CSesion.addEventListener('click', CerrarSesion)
InicioSesion.addEventListener('click', Sesion)
console.log('ok')

let cambioUsuario = function(user){
    if (user){
        console.log("ok")
        document.querySelector(".Usuarios").innerHTML =
        `
        <h2>Usuario: ${user.displayName}</h2>
        <h3>Correo: ${user.email}</h3>
        `
        //si hay
        q
    }
    else {
        document.querySelector(".Usuarios").innerHTML =
        `
        
        <h3>SignedOut</h3>
        `
        //no hay
    }
console.log('Cambio de Usuario...')
console.log(user)
}

firebase.auth().onAuthStateChanged(cambioUsuario)

//Iniciar Sesion

let loginConExito = function(resultado){
    console.log('Login con exito')
    console.log(resultado)
}

let loginConError = function(error) {
    console.log('Ocurrio un error al Inciar Sesion')
    console.log(error)
}
let numero = 0;
let db = firebase.database()
let botonContador = document.querySelector('.botonContador');

let actualizarContador =  function (valor) {
    db.ref('/contador').set(valor);
        // console.log ('el valor es de ' + valor)
}
botonContador.addEventListener('click', function(){
    actualizarContador (numero+ 1)
    
})

let contadorSeActualizo = function(respuesta){
    
    let valor = respuesta.val()
    console.log(valor)
    document.querySelector('.divContador').innerText = (valor);
    numero = parseFloat(valor);
}
db.ref('/contador').on('value', contadorSeActualizo);



