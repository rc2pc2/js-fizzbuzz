/**
 *
 * Scrivi un programma che stampi in console i numeri da 1 a 100,
 *
 * ma che per i multipli di 3 stampi “Fizz” al posto del numero e
 * per i multipli di 5 stampi “Buzz”.
 *
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 */

const ulElement = document.querySelector('ul');

// ? i++ => i = i + 1;
for (let i = 1 ; i <= 100 ; i++){

    const liElement = document.createElement('li');
    liElement.classList.add('box');

    const newElement = document.createElement('div');
    newElement.append('#98');
    newElement.classList.add('gina');


    if ( i % 15 === 0 ) {
        console.log('FizzBuzz');
        liElement.innerHTML = '<h3>FizzBuzz</h3>';
        liElement.classList.add('fizzbuzz');
    } else if ( i % 5 === 0 ){
        liElement.innerHTML = '<h3>Buzz</h3>';
        console.log('Buzz');
        liElement.classList.add('buzz');

    } else if ( (i % 3 === 0)){
        liElement.innerHTML = '<h3>Fizz</h3>';
        console.log('Fizz');
        liElement.classList.add('fizz');

    } else {
        liElement.innerHTML = '<h3>' + i + '</h3>';
        console.log(i);
    }

    liElement.appendChild(newElement);

    ulElement.appendChild(liElement);
}