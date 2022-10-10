let cash = 20
let price = 40
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - here's ${difference} dollars change`)
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nie day!")
}
else {
    console.log(`not enough money - you still owe ${difference * -1} dollars`)
}