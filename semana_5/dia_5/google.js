let searchInput = document.querySelector('#InSearch')
let searchButton = document.querySelector('#search')
let luckyButton = document.querySelector('#luck')

function validar(event){
if( searchInput.value.match(/^ +$/) || searchInput.value.match(/^$/) ){ //^ inicio de cadena, $ fin de cadena, "espacio y +", que haya un espacio o mas
searchInput=event.defaultPrevented;
    
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

function lucky(){
    window.location.href='https://www.google.com/doodles/'
}

searchInput.addEventListener('keyup', enter)
searchButton.addEventListener('click', search)
luckyButton.addEventListener('click', lucky)
