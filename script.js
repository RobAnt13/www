// Základy Javascript 2

// Funkcie

// Undefined a null 

// Undefined v premenne
/* let age

if(age === undefined){
    console.log("Vyplnte vek")
} else {
    console.log(age)
}

// Undefined ako argument funkcie
let mojaFunkcia = function(num){
    console.log(num)
}

mojaFunkcia() 

// Undefined v return
let mojaFunkcia2 = function(num){
    return num
}

let value = mojaFunkcia2()
console.log(value)

// Null ako priradena hodnota
let myAge = 30
myAge = null
console.log(myAge) */

// Funkcia s viacerými parametrami
let sucet = function(a, b, c){
    return a + b + c
}

let value = sucet(20, 30, 5)
console.log(value)

// Default hodnoty
let game = function(name = "Anonymny", score = 0){
    return "Meno: " + name + ", Score: " + score
}

let value2 = game("David", 50)
console.log(value2)

// Vstupný kód

// Globálny scope (num1, num2, num3)
// Lokálny scope (a, b, c)

let num1 = 5
let num2 = 8
let num3 = 2

let pristup = function(a, b, c){
    if(a === num1 && b === num2 && c === num3){
        console.log("Môžte vstúpiť")
    } else {
        console.log("Vstup zakázaný")
    }
}

pristup(5, 3, 9)
pristup(5, 8, 2)



