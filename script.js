// Základy Javascript 3

// Objekty

let myBook = {
    title: "Silmarillion",
    author: "J. R. R. Tolkien",
    published: 1977,
    award: "Locus Award for Best Fantasy Novel"
}

// Výpis jednotlivých vlastností
console.log(myBook.title)
console.log(myBook.author)
console.log(myBook.published)
console.log(myBook.award)

// Výpis všetkých vlastností naraz
console.log(`${myBook.title} je kniha autora ${myBook.author}, bola vydana v roku ${myBook.published} a ziskala cenu ${myBook.award}`)

// Zmena vlastnosti objektu
myBook.title = "The Hobbit"
myBook.published = 1937

console.log(`${myBook.title} je kniha od autora ${myBook.author} a bola vydana v roku ${myBook.published}`)









