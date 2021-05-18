// filter

// returning numbers above 10
//
// First way
//
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(value, index, array) {
    if (value > 10) {
        return true;
    } else {
        return false;
    }
}

const numbersFiltereds = numbers.filter(callbackFilter);
console.log(numbersFiltereds);


//
// Seconde way
//
const numbers2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(value) {
    return value > 10;
}

const numbersFiltereds2 = numbers2.filter(callbackFilter);
console.log(numbersFiltereds2);

//
// Third way
//

const numbers3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numbersFiltereds3 = numbers3.filter(value => value > 10);
console.log(numbersFiltereds3);


//////////

const person = [
    {name: 'Bruno', age: 22},
    {name: 'Luiz', age: 23},
    {name: 'Torres', age: 24},
    {name: 'Silva', age: 25},
    {name: 'Beatriz', age: 30},
    {name: 'Fernanda', age: 35},
    {name: 'Ana', age: 27}
];

const personNameAbove4 = person.filter(function(obj) {
    return obj.name.length > 4;
});
console.log(personNameAbove4);

// or

const personNameAbove4Letters = person.filter(obj => obj.name.length > 4);
console.log(personNameAbove4Letters);

//////////

const personAgeAbove25 = person.filter( obj => obj.age > 25);
console.log(personAgeAbove25);


///////////


const nameEndsWithA = person.filter(obj => obj.name.toLowerCase().endsWith('a'));
console.log(nameEndsWithA);