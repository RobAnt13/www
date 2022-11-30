let criminals = [{
    firstName: "Martin",
    secondName: "Zeleny",
    birth: 1985,
    licencePlate: "85c322",
    address: "U stlupu 16",
    city: "Ceske Budejovice"
}, {
    firstName: "Jana",
    secondName: "Ruzova",
    birth: 1996,
    licencePlate: "93k922",
    address: "Malska 29",
    city: "Ceske Budejovice"    
}, {
    firstName: "Filip",
    secondName: "Modry",
    birth: 1989,
    licencePlate: "2ep6328",
    address: "Stevardska 38",
    city: "Ceske Budejovice"
}]

// Ulozime data z policka
let filters = {
    searchText: ""
}

// Filter
const renderCriminals = function(ourCriminals, tryToFind){
    let arrayResult = ourCriminals.filter(function(oneSuspect){
        return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
    })

    console.log (arrayResult)

    
    document.querySelector("#idCriminal").innerHTML = ""


    arrayResult.forEach(function(oneSuspect){
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `Meno: ${oneSuspect.firstName}, <br> Priezvisko: ${oneSuspect.secondName} <br> Rok narodenia: ${oneSuspect.birth}
        <br> Poznavacia znacka: ${oneSuspect.licencePlate} <br> Adresa: ${oneSuspect.address} <br> Mesto: ${oneSuspect.city}`

        document.querySelector("#idCriminal").appendChild(paragraph)
    })
}

// Nacitame data z policka
let licencePlate = document.querySelector("#licence-plate")

licencePlate.addEventListener("input", function(event){
    filters.searchText = event.target.value
    renderCriminals(criminals, filters)
})










