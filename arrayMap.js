
// double the numbers

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const doubleNumbers = numbers.map(value => value * 2);
console.log(doubleNumbers);

//////////////////

const person = [
    {name: 'Bruno', age: 22},
    {name: 'Luiz', age: 23},
    {name: 'Torres', age: 24},
    {name: 'Silva', age: 25},
    {name: 'Beatriz', age: 30},
    {name: 'Fernanda', age: 35},
    {name: 'Ana', age: 27}
];

const names = person.map(obj => obj.name);
    console.log(names);

const ages = person.map(obj => ({ age: obj.age}));
    console.log(ages);

const comIds = person.map(function(obj, index) {
    const newObj = {...obj};
    newObj.id = (index + 1) * 1000;
    return newObj;
});
console.log(comIds);

