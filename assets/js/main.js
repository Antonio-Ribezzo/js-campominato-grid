/* 
CONSEGNA
- L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
- Ogni cella ha un numero progressivo, da 1 a 100.Ci saranno quindi 10 caselle per ognuna delle 10 righe.
- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata.

BONUS
- Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
    - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/



// Genero una funzione che mi crei un elemento nel DOM (decido io di che tipo, con quale classe e con quale informazione al suo interno)
function createMyElement(typeOfElement, nameOfClass, innerElement){
    //associo ad una variabile l'elemento creato
    let elemento = document.createElement(typeOfElement)
    //aggiungo una classe all'elemento
    elemento.classList.add(nameOfClass)
    //aggiungo un linea HTML dentro l'elemento creato
    elemento.innerHTML = innerElement
    //la funzione quando chiamata mi restituirà l'elemento creato con tutte le caratteristiche specificate dai parametri
    return elemento
}
 //test funzione "createMyElement"
console.log(createMyElement('div', 'row', 'ciao'))

//salvo in una costante il button
let button = document.querySelector('button')
console.log(button)

//associo al button una funzione che mi genera la griglia con le funzionalità richieste
button.addEventListener('click', function(){
    //faccio partire un ciclo che mi generi i 100 elementi nel DOM
    for(let i = 1; i <=100; i++){
        //trovo l'elemento dove stampare
        let containerCampo = document.querySelector('#container-campo')

        //stampo dentro l'elemento i div che associo ad una variabile "divBox"
        const divBox = containerCampo.appendChild(createMyElement('div', 'box-10', i))

        //rendo cliccabili tutti gli elementi
        divBox.addEventListener('click', function(){
            this.classList.toggle('blue')
            console.log(i)
        })
    }
})