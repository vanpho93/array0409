function locSoChan(arr) {
    const arrOutput = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) arrOutput.push(arr[i]);
    }
    return arrOutput;
}

function locTheoTuoi(arr) {
    const arrOutput = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].age > 12) arrOutput.push(arr[i]);
    }
    return arrOutput;
}

function locTheoChieuCao(arr) {
    const arrOutput = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].height > 155) arrOutput.push(arr[i]);
    }
    return arrOutput;
}