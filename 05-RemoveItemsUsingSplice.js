function sumOfTen(arr) {

    arr.splice(2, 2);

    return arr.reduce((a, b) => a + b);
}


console.log(sumOfTen([2, 5, 1, 5, 2, 1]));  