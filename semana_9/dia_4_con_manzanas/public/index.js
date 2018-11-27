let provider = newfirebase.auth.GoogleAuthProvider();
let contenedor = document.querySelector('.contenedor')
let cambioDeUsuario = function (usuario){
    if (usuario){
        contenedor.classList.add('active')

    }
    else{
        contenedor.classList.remove('active')
    }
}

document.querySelector('.login').addEventListener('click', function(){
    firebase.auth().onSignInPopup(provider)
});

document.querySelector('.logout').addEventListener('click', function(){
    firebase.auth().onSignOut()
});

firebase.auth().onSign

mensaje.addEventListener('keyup', function(e)){
    if (e.key !== 'Enter')
    return
});