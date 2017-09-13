const arr = [1, 5, 4, 3, 6, 8, 2, 9];

class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const arrPerson = [
    new Person('Teo', 10, 170),
    new Person('Ti', 15, 160),
    new Person('Tun', 20, 150)
];

function locTheoDieuKien(arr, checkElement) {
    const arrOutput = [];
    for(let i = 0; i < arr.length; i++) {
        if(checkElement(arr[i])) arrOutput.push(arr[i]);
    }
    return arrOutput;
}

console.log(locTheoDieuKien(arr, num => num % 2 === 0));
console.log(locTheoDieuKien(arrPerson, person => person.age > 12));
console.log(locTheoDieuKien(arrPerson, person => person.height > 155));
