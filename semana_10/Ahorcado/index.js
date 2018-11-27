let box = document.querySelector('.box');
var letras = document.querySelectorAll('.keyRow1, .keyRow2, .keyRow3');
var letraId = 0;
var palabraSplit;
var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var meeseekMove = document.querySelector('.meeseek1');
var meeseekNormal = document.querySelector('.meeseek2')
//Audio
var type = document.getElementById('typew');
var boxMusic = document.getElementById('boxMusic')
var winAudio = document.getElementById('canDoAudio')
var looseAudio = document.getElementById('meeseekDie')

var clicker = function(event){
    letraId = event.target.getAttribute('id');
    console.log(letraId)
    type.play()
    comparar()
    document.querySelector(`#${letraId}`).classList.add('hide')
}

function startBox(){
    for(a=0; a<letras.length; a++){
        document.querySelector(`#${abc[a]}`).classList.remove('hide')
        }
    vidas = 5;
    document.querySelector('.startMensaje').classList.add('hide')
    document.querySelector('.row1').classList.remove('hide')
    document.querySelector('.row2').classList.remove('hide')
    document.querySelector('.row3').classList.remove('hide')
    gameStart()
    for (let i = 0; i<letras.length; i++){
        letras[i].addEventListener('click', clicker)
    }
    counterBad=0;
    counterGood=0;
}
box.addEventListener('click', startBox)
var vidas;

function gameStart(){
    meeseekMove.classList.remove('disapear');
    boxMusic.play()
    document.querySelector('.canDo').classList.add('disapear');
    document.querySelector('.result').innerText = null;
    document.querySelector('.vidasDiv').classList.remove('disapear');
    document.querySelector('.vidas').style.color = 'green'; 
    document.querySelector('.vidas').innerText = vidas;
    document.querySelector('.contenedorMaquina').innerHTML = null;
    generarPalabra()
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSplit = palabra.split("");
    console.log(palabra)
    console.log(palabraSplit)
    for(let s=0; s<palabraSplit.length;s++){
        setTimeout (function(){
            document.querySelector('.contenedorMaquina').innerHTML +=
           ` <span class="escribir" id="${s}">
           _
           </span>
           `
        }, (210 * s))
    }  
    return palabraSplit
}
let counterBad = 0;
let counterGood = 0;
let contiene = 0;

function comparar(){
    if (vidas === 0 || counterGood === palabraSplit.length){
        event.preventDefault(comparar())
    }   
    console.log(letraId != 0)
    document.querySelector(`#${letraId}`).removeEventListener('click', clicker)
    for(let q=0; q<palabraSplit.length; q++){
        palabraSplit[q].indexOf(letraId)
        console.log( palabraSplit[q].indexOf(letraId) + " en indice " + q )
        if ( (palabraSplit[q].indexOf(letraId)) == 0){
            contiene = +1;
            counterGood = counterGood + 1;
            console.log("buenas " + counterGood)
            console.log(palabraSplit[q].indexOf(letraId))
            console.log(vidas + " vidas")
            document.getElementById(`${q}`).innerText = letraId;
       
        }
    }
    contadores()
}


var m=4;
var meeseekMaker = function(){
    for(let i =0; i<m; i++){
        setTimeout ( function(){
        x = window.innerWidth*Math.random()
        y = window.innerHeight*Math.random()
        var k = meeseekNormal.cloneNode()
        k.style.left = x + "px"
        k.style.top = y + "px"
        rotateM = Math.random() * 350;
        console.log(rotateM)
        k.style.transform = `rotate(${rotateM}deg)`
        document.body.appendChild(k)}, (250  * i) )   
    }
}


function contadores (){
    
if (contiene > 0){
    console.log("contiene la letra")
}
if(contiene == 0){
    console.log("no contiene la letra")
    counterBad = counterBad + 1;
    meeseekMaker()
    vidas = vidas - 1;
    document.querySelector('.vidas').innerText = vidas; 
 if(vidas === 3){
    meeseekNormal.classList.remove('disapear');
    meeseekMaker()
    document.querySelector('.vidas').style.color = 'orange';  
    }
 if(vidas === 2){
        //innerWidth da la medida de la pantalla actual
        console.log(`posicion x ${x}, posicion y ${y}`)
        meeseekMaker()
        m += 8;
    }

 else if (vidas === 1){
       
    meeseekMaker()
    document.querySelector('.vidas').style.color = 'red'; 
    document.querySelector('.vidas').classList.add('vida1');
    m += 10;
    }
    else if(vidas === 0){
        meeseekMaker()
        document.querySelector('.vida1').classList.add('vida0')
        meeseekNormal.classList.add('meeseekFull')
    }
}

contiene = 0;

if (counterBad == 5){
    
    document.querySelector('.result').style.color = 'red'; 
    document.querySelector('.result').innerText = 'PERDISTE'
    document.querySelector('.cantDo').classList.remove('disapear')
    looseAudio.play()
    
    setTimeout (function(){
            window.location.reload();
         
    }, 4500)
}

if (counterGood == palabraSplit.length){
    document.querySelector('.result').style.color = 'green'; 
    document.querySelector('.canDo').classList.remove('disapear');
    let win = "GANASTE!!"
    winAudio.play()
    for(let s=0; s<win.length; s++){
        setTimeout (function(){
            console.log(win[s])
            document.querySelector('.result').innerHTML +=
           ` 
           ${win[s]}
           `
        }, (210 * s))
    }  

    if (vidas > 1){document.querySelector('.vidas').classList.add('vida0');}
    if (vidas == 1){document.querySelector('.vida1').classList.add('vida0')}
    setTimeout (function(){
            window.location.reload();
        
    }, 4200)
}
console.log("contadorMalas = " + counterBad)
console.log("contadorBuenas = " + counterGood)
}




