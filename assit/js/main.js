//Scrivi un programma che esegua un ciclo da 1 a 100
const multipli = document.querySelector(".numero")



for (let i = 1; i <= 100; i++) {


    //selezione multipli di 3 e 5 
    if (i % 3 == 0 && i % 5 == 0) {
        multipli.innerHTML += "<div class='fizzbuzz'>Fizzbuzz</div>"
    }
    //selezione multipli di 3 
    else if (i % 3 == 0) {
        multipli.innerHTML += "<div class='fizz'>fizz</div>"
    }
    //selezione multipli di 5
    else if (i % 5 == 0) {
        multipli.innerHTML += "<div class='buzz'>buzz</div>"
    }

    else {
        multipli.innerHTML += "<div class=numeriNormali>" + i + "</div>"
    }









}













//a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice*\
