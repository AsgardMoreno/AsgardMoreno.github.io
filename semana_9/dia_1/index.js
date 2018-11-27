let imagenes = document.querySelectorAll('.imagen');

let imagenSel =null;
function seleccion(){
    imagenSel = event.target.getAttribute('id');
    console.log(imagenSel)
    return imagenSel
}


let divModal = document.querySelector('.modal1');
function modal(){
    divModal.classList.add('Modal');
}
imagenSel.addEventListener('click', modal)