let searchInput = document.querySelector('input.S')
let searchButton = document.querySelector('#search')

function validar(event){
    if( searchInput.value.match(/^ +$/) || searchInput.value.match(/^$/) ){ //^ inicio de cadena, $ fin de cadena, "espacio y +", que haya un espacio o mas
event.defaultPrevented;
return false;
    }
}
function search (){
    validar()
    window.location.href=`https://www.google.com.mx/search?q=${searchInput.value}`;
    }
function enter(e){
    if((e.key) == 'Enter')
    search()
}
searchInput.addEventListener('keyup', enter)
searchButton.addEventListener('click', search)
