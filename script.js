function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length -2; ++i) {
        sum = sum + arr[i]
    }
    return sum;
}

console.log(arrSum([1, 2, 3, 4, 5, 6]));