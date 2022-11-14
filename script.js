// Základy Javascript 2

// Funkcie

/* function pozdrav1(){
    console.log("Pozdrav 1")
 }

pozdrav1()

 let pozdrav2 = function(){
    console.log("Pozdrav 2")
 }

 pozdrav2()

 let pozdrav3 = () => console.log("Pozdrav 3")

 pozdrav3() 

 // Funkcie - parameter a argument + šípková notácia

 let naDruhu = function(num){
    console.log(num * num)
 }

 let naDruhu = (num) => console.log(num * num)

 naDruhu(2)
 naDruhu(5)

 let pozdravFunkcia = function(name){
    console.log("Ahoj, ja som " + name)
 }

 let pozdravFunkcia = (name) => console.log("Ahoj, ja som " + name)

 pozdravFunkcia("David")
 pozdravFunkcia("Harry")
 pozdravFunkcia("Hermiona") */


 // Return vo funkcii

 let naDruhu = function(num){
    let result = num * num
    return result
 }

let value1 = naDruhu(5)
value1 = value1 + 50
console.log(value1)

let zvysovaciaFunkcia = function(num){
    let result = num + 100
    return result
}

let value2 = zvysovaciaFunkcia(50)
console.log(value2)

// Adult checker

let adultChecker = function(age){
    if(age >= 18){
        let result = "Dospelý"
        return result
    } else {
        let result = "Dieťa"
        return result
    }
}

let value = adultChecker(12)
console.log(value)

if(value === "Dospelý"){
    console.log("Výsledok kontroly veku: " + value)
    console.log("Môžeš vstúpiť")
} else {
    console.log("Výsledok kontroly veku: " + value)
    console.log("Nemôžeš vstúpiť")
}






