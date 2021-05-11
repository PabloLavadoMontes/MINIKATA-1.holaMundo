// Llama a las funciones a ejecutar una vez cargado el documento html
// const principal = () => {añadeTexto(creaH1());}

//Ejecuta este archivo .js cuando haya cargado el documento html
// window.addEventListener("load", principal);

/**
 * Crea un elemento <h1>
 * @returns {HTMLElement} h1
 */
/* function creaH1 () {
    let h1 = document.createElement("h1");
    document.body.appendChild(h1);
    return h1;
} */

/**
 * Agrega texto al elemento <h1> creado
 * @param {HTMLElement} h1 
 * @returns {HTMLElement} contenidoH1
 */
// function añadeTexto (h1) {return h1.textContent = "Hola mundillooo";} 







// Opción 2:

//Ejecuta este archivo .js cuando haya cargado el documento html
window.addEventListener("load", principal);

// Llama a las funciones a ejecutar una vez cargado el documento html
function principal () {añadeTexto(creaH1());}

/**
 * Crea un elemento <h1>
 * @returns {HTMLElement} h1
 */
function creaH1 () {
    let h1 = document.createElement("h1");
    document.body.appendChild(h1);
    return h1;
}

/**
 * Agrega texto al elemento <h1> creado
 * @param {HTMLElement} h1 
 * @returns {HTMLElement} contenidoH1
 */
function añadeTexto (h1) {return h1.textContent = "Hola mundillooo";} 


