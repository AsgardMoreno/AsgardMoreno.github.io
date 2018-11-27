//Autenticar
let proveedor = new firebase.auth.GoogleAuthProvider()

//Ingreso del Usuario
let cambioUsuario = function (usuario){
    if (!usuario){
        firebase.auth().signInWithPopup(proveedor)
    }
}
firebase.auth().onAuthStateChanged(cambioUsuario)

// Descarga de archivos de firebase storage
// https://firebase.google.com/docs/storage/web/download-files

// Subida de archivos de firebase storage
// https://firebase.google.com/docs/storage/web/upload-files

//Sacar una referencia al storage
let storage = firebase.storage().ref()

//para cambiar la imagen segun la seleccion
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');

let num;
let numeroDeImagen = function(){
    num = event.target.getAttribute('id');
console.log(num)
}
input1.addEventListener('click', numeroDeImagen)
input2.addEventListener('click', numeroDeImagen)
input3.addEventListener('click', numeroDeImagen)

//Se crea la funcion para cambiar la imagen 
//del elemento, el parametro es la url


let mostrar = function(url){
    let imagen = document.querySelector(`imagen${num}`)
    imagen.src = url
}
//Esta funcion solicita a firebase
//el url de la imagen
let solicitarLink = function(){
    storage.child(`/imagen${num}.*`)
    .getDownloadURL()
    .then(mostrar)
}

//Para que cargue la imagen al cargar la pagina
solicitarLink()

//Falta hacerlo dinamico, que funcione cada vez
document.querySelector(`.guardar1`).addEventListener('click', function(){
    console.log(`input${num}`)
    if((`input${num}`).files.length){
        storage.child(`imagen${num}.*`)
        .put(`input${num}`).files[0]
        .then(solicitarLink)
    }
})
document.querySelector(`.guardar2`).addEventListener('click', function(){
    console.log(`input${num}`)
    if((`input${num}`).files.length){
        storage.child(`imagen${num}.*`)
        .put(`input${num}`).files[0]
        .then(solicitarLink)
    }
})
document.querySelector(`.guardar3`).addEventListener('click', function(){
    console.log(`input${num}`)
    if((`input${num}`).files.length){
        storage.child(`imagen${num}.*`)
        .put(`input${num}`).files[0]
        .then(solicitarLink)
    }
})