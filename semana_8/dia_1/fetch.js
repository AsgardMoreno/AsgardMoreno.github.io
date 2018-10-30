/*
  Fetch te permite solicitar recursos por medio
  de la red, generalmente hacia otros servidores

  Se utiliza el protocolo HTTP

  A traves de una URL se obtendrá una respuesta

  la respuesta puede ser un objeto de javascript
  o puede ser texto plano

  https://rickandmortyapi.com/

*/

// Fetch aplicado al API de rick and morty

let respuesta = function(res) {
  console.log(res);
  let personajes = Array(20);
  
  document.body.innerHTML +=
    `
      <div>
        <img src="${res.results[0].image}">
        <div>${res.results[0].name}</div>
      </div>
      <div>
      <img src="${res.results[11].image}">
      <div>${res.results[10].name} - ${res.results[10].type} - ${res.results[10].status}</div>
      </div>
      
      
      `
}

fetch("https://rickandmortyapi.com/api/character/?page=1")
  .then(res => res.json())
  .then(respuesta)