const arr = [1, 5, 4, 3, 6, 8, 2, 9];

function locSoChan(arrNum) {
    let arrOutput = [];
    for(let i = 0; i < arrNum.length; i++) {
        if(arrNum[i] % 2 === 0) arrOutput.push(arrNum[i]);
    }
    return arrOutput;
}

console.log(locSoChan(arr));
