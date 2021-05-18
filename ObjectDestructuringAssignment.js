const person = {
    name: 'Bruno',
    lastname: 'Torres',
    age: 22,
    address: {
        street: 'Av Brasil',
        number: 320
    }
}

const { address: { street, number}, address }= person;

console.log(street, number, address);