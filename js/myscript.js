
const ulElement = document.querySelector('ul');

// ? i++ => i = i + 1;
for (let i = 1 ; i <= 100 ; i++){

    const liElement = document.createElement('li');
    liElement.classList.add('box');

    const newElement = document.createElement('div');
    newElement.append('#98');
    newElement.classList.add('class-wrapper');

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