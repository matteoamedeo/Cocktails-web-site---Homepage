import spinner from './spinner.js'

function ajax(pagina,contenitore,titoloPagina, titolo){
    const XHR = new XMLHttpRequest;
    XHR.open('GET', pagina, true);
    XHR.send();
    XHR.onprogress = spinner()
    XHR.onload = function () {
        contenitore.innerHTML = this.responseText;
        titoloPagina.textContent = titolo
    }
}



export default ajax