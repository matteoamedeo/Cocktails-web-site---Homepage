const home = document.querySelector('body')
const barreMenu = document.getElementsByClassName('barre')
const menu = document.getElementById('menu')
const menuSlider = document.getElementById('menu-slider')
const immagini = Array.from(document.getElementsByTagName('img'))
const share = document.getElementById('share')
const homeText = Array.from(document.getElementsByTagName('p'))
const sliderWrapper = document.getElementsByClassName('img-wrapper')
const imgSlider = document.querySelectorAll('#slider-wrapper #img-wrapper img')
const logoCocktails = document.getElementById('cocktails-logo')
const links = Array.from(document.querySelectorAll('#menu-slider a'))
const cercaIcon = document.getElementById('cerca-icon')
const cercaMenu = document.querySelector('#cerca-menu')
const imgAmericano = document.querySelectorAll('.card img')
const sezioni = document.querySelectorAll('.sezioni')
const login = document.getElementById('login')
const titoloPagina = document.querySelector('title')
const inpNomeUtente = document.querySelectorAll('p > input')

menu.addEventListener('click', apriMenu)
document.addEventListener('scroll', showShare)

let arr = ['0', '-100vw', '-200vw']
let index = 0


function slider2() {
    setTimeout(function () {
        sliderWrapper[0].style.marginLeft = arr[0]
    }, 3000)
    setTimeout(function () {
        sliderWrapper[0].style.marginLeft = arr[1]
    }, 3000)
    setTimeout(function () {
        sliderWrapper[0].style.marginLeft = arr[2]
    }, 6000)
    // }
    sliderWrapper[0].style.transition = 'all 3s ease'
}

window.addEventListener('click', prova)

function prova(e) {
    if (e.target.id === 'cerca-icon') {
        apriMenuCerca()
    } else if (e.target.id === 'chiudi-cerca') {
        chiudiMenuCerca()

    } else if (e.target.id === 'avvia-cerca') {
        avviaCerca()
    }
}

function apriMenuCerca() {
    cercaMenu.classList.add('apri-menu-cerca')
    cercaMenu.classList.remove('chiudi-menu-cerca')
}

function chiudiMenuCerca() {
    cercaMenu.classList.add('chiudi-menu-cerca')
    cercaMenu.classList.remove('apri-menu-cerca')
}

function avviaCerca() {}

links.forEach(link => {
    link.addEventListener('click', link2)
});

function link2(e) {
    e.preventDefault()
    console.log(e.target.textContent);
    if (e.target.textContent === 'home') {
        apriMenu()
    }
}

function apriMenu() {
    barreMenu[0].classList.toggle('barra1')
    barreMenu[1].classList.toggle('barra2')
    barreMenu[2].classList.toggle('barra3')
    menuSlider.classList.toggle('chiudi-menu-slider')
    menuSlider.classList.toggle('apri-menu-slider')
    logoCocktails.classList.toggle('text-blur')
    immagini.forEach(immagine => {
        immagine.classList.toggle('img-blur')
    });
    homeText.forEach(text => {
        text.classList.toggle('text-blur')
    });
    for (let i = 1; i < sezioni.length; i++) {
        sezioni[i].classList.toggle('img-blur')
        sezioni[i].classList.toggle('text-blur')

    }
}
const percentInizio = document.body.scrollHeight * 6 / 100
const percentFine = document.body.scrollHeight * 41 / 100

function showShare() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > percentInizio && document.documentElement.scrollTop <
        percentFine) {
        share.classList.add('show-share')
    } else {
        share.classList.remove('show-share')
    }
}

function ajax(pagina, titolo) {
    const XHR = new XMLHttpRequest;
    XHR.open('GET', pagina, true);
    XHR.send();
    XHR.onload = function () {
        home.innerHTML = this.responseText;
        titoloPagina.textContent = titolo
        const inpNome = document.getElementById('inpNomeUtente').name
        console.log(inpNome);
        createItem(inpNome)
    }
}

function createItem(nome) {
    localStorage.setItem("nomeUtente1", nome);
}

function readValue() {
    var x = localStorage.getItem("mytime");
    document.getElementById("demo").innerHTML = x;
}