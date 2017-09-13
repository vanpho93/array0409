const arr = [1, 5, 4, 3, 6, 8, 2, 9];

function locSoChan(arrNum) {
    const arrOutput = [];
    for(let i = 0; i < arrNum.length; i++) {
        if(arrNum[i] % 2 === 0) arrOutput.push(arrNum[i]);
    }
    return arrOutput;
}

// Person name, age, height
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

function locTheoTuoi(arr) {
    //return mang cac phan tu co tuoi > 12
}

function locTheoChieuCao(arr) {
    //return cac phan tu co chieu cao > 155
}
// console.log(locSoChan(arr));
