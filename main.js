//Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


//selettore div.container
const container = document.querySelector(".container");

// creazione ciclo per stampare numeri da 1 a 100
for (let UnoCento = 1; UnoCento <= 100; UnoCento++) {
    
    //creazione div
    let box = document.createElement("div"); 

    //aggiungere contenuto al box (div) tramite criteri
    if (UnoCento % 5 === 0 && UnoCento % 3 === 0) { //divisibile sia per 5 che per 3
        box.append("FizzBuzz");
    
    } else if (UnoCento % 5 === 0) { //divisibile per 5
        box.append("Buzz");
    
    } else if (UnoCento % 3 === 0) { //divisibile per 3
        box.append("Fizz");
    
    } else {
        box.append(UnoCento);
    }


    //aggiungere i box (div) al container
    container.append(box)    
}


//Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.