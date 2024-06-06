//Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// creazione ciclo per stampare numeri da 1 a 100
for (let UnoCento = 1; UnoCento <= 100; UnoCento++) {

    //conzdizione per sostituire al numero il fizzbuzz/buzz/fizz
    if (UnoCento % 5 === 0 && UnoCento % 3 === 0) { //divisibile sia per 5 che per 3
        console.log("FizzBuzz");
    
    } else if (UnoCento % 5 === 0) { //divisibile per 5
        console.log("Buzz");
    
    } else if (UnoCento % 3 === 0) { //divisibile per 3
        console.log("Fizz");
    
    } else {
        console.log(UnoCento)
    }
    
}


