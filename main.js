//Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


//selettore div.container
const container = document.querySelector(".container");

// creazione ciclo per stampare numeri da 1 a 100
for (let UnoCento = 1; UnoCento <= 100; UnoCento++) {
    
    //creazione div.box
    let box = `<div class="box">${UnoCento}</div>`; 

    //conzdizione per sostituire al numero il fizzbuzz/buzz/fizz
    if (UnoCento % 5 === 0 && UnoCento % 3 === 0) { //divisibile sia per 5 che per 3
        box = `<div class="box">FizzBuzz</div>`;
    
    } else if (UnoCento % 5 === 0) { //divisibile per 5
        box = `<div class="box">Buzz</div>`;
    
    } else if (UnoCento % 3 === 0) { //divisibile per 3
        box = `<div class="box">Fizz</div>`;
    
    } else {
        box;
    }

    //le box vengono inserite nel container
    container.innerHTML += box;
    console.log(box);
    
}


