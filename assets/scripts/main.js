window.addEventListener('scroll', function (){
    let animacion = document.getElementById('animado');
    let posicionobj1 = animacion.getBoundingClientRect().top;
    console.log(posicionobj1);
    let tamanodePantalla = window.innerHeight;

    if(posicionobj1 < tamanodePantalla){
        animacion.style.animation = 'mover 1s ease-out'
    }
})
window.addEventListener('scroll', function (){
    let animacion = document.getElementById('animado2');
    let posicionobj1 = animacion.getBoundingClientRect().top;
    console.log(posicionobj1);
    let tamanodePantalla = window.innerHeight;

    if(posicionobj1 < tamanodePantalla){
        animacion.style.animation = 'mover 1s ease-out'
    }
})
window.addEventListener('scroll', function (){
    let animacion = document.getElementById('animado3');
    let posicionobj1 = animacion.getBoundingClientRect().top;
    console.log(posicionobj1);
    let tamanodePantalla = window.innerHeight;

    if(posicionobj1 < tamanodePantalla){
        animacion.style.animation = 'mover 1s ease-out'
    }
})