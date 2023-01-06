let botao = document.querySelector('.nav-menu')
let divappend = document.querySelector('.div-append')
let mq = window.matchMedia('(max-width: 468px)')

if(mq.matches === false) {
    console.log('maior')
} else {
    botao.removeAttribute('hidden')
    botao.addEventListener('click', () => {
        botao.classList.toggle('img-afterclick')
        divappend.toggleAttribute('hidden')
    })
}