let searchInput = document.querySelector('input.S')
let searchButton = document.querySelector('#search')

function search (){
    if (searchInput.value = ""){
    }
    else {
    window.location.href=`https://www.google.com.mx/search?q=${searchInput.value}`;
    }
}

function enter(e){
    if((e.key) == 'Enter')
    search()
}
searchInput.addEventListener('keyup', enter)
searchButton.addEventListener('click', search)
