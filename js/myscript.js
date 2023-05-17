
const ulElement = document.querySelector('ul');

for (let i = 1 ; i <= 100 ; i++){
    const liElement = document.createElement('li');
    liElement.classList.add('box');

    const newElement = document.createElement('div');
    newElement.append(i);
    newElement.classList.add('class-wrapper');

    if ( i % 15 === 0 ) {
        // console.log('FizzBuzz');
        liElement.innerHTML = '<h3>FizzBuzz</h3>';
        liElement.classList.add('fizzbuzz');
    } else if ( i % 5 === 0 ){
        // console.log('Buzz');
        liElement.innerHTML = '<h3>Buzz</h3>';
        liElement.classList.add('buzz');
    } else if ( (i % 3 === 0)){
        // console.log('Fizz');
        liElement.innerHTML = '<h3>Fizz</h3>';
        liElement.classList.add('fizz');
    } else {
        // console.log(i);
        liElement.innerHTML = '<h3>' + i + '</h3>';
    }

    liElement.appendChild(newElement);
    ulElement.appendChild(liElement);
}