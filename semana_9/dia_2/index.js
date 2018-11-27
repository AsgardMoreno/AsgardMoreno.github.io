let tabs = document.querySelectorAll('.tabs');
 
let info1 = document.querySelector('.info1');
let info2 = document.querySelector('.info2');
let info3 = document.querySelector('.info3');
let info4 = document.querySelector('.info4');
info2.classList.add('ocultar')
info3.classList.add('ocultar')
info4.classList.add('ocultar')

let mostrarInfo = function(event){
    let sel = event.target.getAttribute('class')

    console.log(sel)
    if (sel === 'tab1'){
        document.querySelector('.tab1').classList.add('seleccionado')
        document.querySelector('.tab2').classList.remove('seleccionado')
        document.querySelector('.tab3').classList.remove('seleccionado')
        document.querySelector('.tab4').classList.remove('seleccionado')
        info1.classList.remove('ocultar')
        info2.classList.add('ocultar')
        info3.classList.add('ocultar')
        info4.classList.add('ocultar')
    }
    if (sel === 'tab2'){
        document.querySelector('.tab2').classList.add('seleccionado')
        document.querySelector('.tab1').classList.remove('seleccionado')
        document.querySelector('.tab3').classList.remove('seleccionado')
        document.querySelector('.tab4').classList.remove('seleccionado')
        info2.classList.remove('ocultar')
        info1.classList.add('ocultar')
        info3.classList.add('ocultar')
        info4.classList.add('ocultar')
    }
    if (sel === 'tab3'){
        document.querySelector('.tab3').classList.add('seleccionado')
        document.querySelector('.tab2').classList.remove('seleccionado')
        document.querySelector('.tab1').classList.remove('seleccionado')
        document.querySelector('.tab4').classList.remove('seleccionado')
        info3.classList.remove('ocultar')
        info1.classList.add('ocultar')
        info2.classList.add('ocultar')
        info4.classList.add('ocultar')
    }
    if (sel === 'tab4'){
        document.querySelector('.tab4').classList.add('seleccionado')
        document.querySelector('.tab2').classList.remove('seleccionado')
        document.querySelector('.tab3').classList.remove('seleccionado')
        document.querySelector('.tab1').classList.remove('seleccionado')
        info4.classList.remove('ocultar')
        info1.classList.add('ocultar')
        info3.classList.add('ocultar')
        info2.classList.add('ocultar')
    }
}

for (let t=0; t < tabs.length; t++){
    tabs[t].addEventListener('click', mostrarInfo)
}


