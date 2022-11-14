/*// Variables, String, Number
let firstName = "Robo"
let secondName = "Antony"
let city = "Bratislava"
let age = 38
console.log(firstName + " " + secondName + ", " + age + " rokov" + ", " + city)

// Maximálny počet bodov
let maxPoints = 100
// Počet dosiahnutých bodov študentov
let student1 = 45
let student2 = 70

// Mená študentov
let student1Name = "Harry"
let student2Name = "Hermiona"

// Výpočet úspešnosti v %, maximálny počet bodov je 100
let result1 = (student1 / maxPoints) * 100
let result2 = (student2 / maxPoints) * 100

// Výsledky
console.log(student1Name + " dosiahol " + result1 + "% úspešnosti")
console.log(student2Name + " dosiahol " + result2 + "% úspešnosti")

// Dátovy typ BOOLEAN
// String
let firstName = "Fero"

// Number
let age = 21

// Boolean (true, false)
let adult = false

// Boolean - operátory
let result = age >= 10
console.log(result)


/* let position = "Administrator"

if(position === "Programator") {
    console.log("Aky je rozdiel medzi html, css a javascriptom.")
} else if(position === "Administrator") {
    console.log("Ake poznate druhy sieti")
} else if(position === "Sekretarka") {
    console.log("Ake pozname funkcie v exceli")
} else {
    console.log("Chyba, zavolajte programatora")
} 

// Aplikácia na reguláciu teploty
let temperature = 35

if(temperature <= 10){
    console.log("chladno")
} else if(temperature >= 11 && temperature <= 25){
    console.log("teplo")
} else {
    console.log("horko")
}

// Filtrovať páchateľov
let weight = 100
let height = 190

if(weight >= 100 && height >= 190){
    console.log("Hlavný podozrivý")
} else if(weight >= 100 || height >= 190){
    console.log("Hlavný podozrivý")
} else {
    console.log("Nepreverovat")
}


// Scope
// Global scope (prva)
// Local scope (druha)

let prva = "Prvy text"

if(true){
    console.log(prva)
    let druha = "Druhy text"
    console.log(druha)

    if(true){
        let tretia = "Treti text"
        console.log(tretia)
        console.log(druha)
    }
} */

// Variable shadowing

let myName = "Fero"

if(true){
    let myName = "Jozo"

    if(true){
        console.log(myName)
    }
}

if(true){
    console.log(myName)
}



