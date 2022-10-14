function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => {
        return b.price - a.price});
}

console.log(sortLowToHigh([
    {id: 1, price: 50}, 
    {id: 2, price: 5}, 
    {id: 3, price: 150}
]));
