const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple, Inc.",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]
// 111721 iterate the array with for..of loop

for (const phone of phones) {
    console.log(phone)
}
 
for (const phone of phones) {
    console.log(phone.price)
}

// use string interpolation to put $ sign in front when they are output

for (const phone of phones) {
    console.log(`Price is $${phone.price}`)
}

    // For..loop Arrays: Objects that arent assigned to their own variables, iterate the array with a for..of loop 
    // it access the first item in the array, then the next, then the next until there are no more items to:
// Existing phone catalog

// Add to Existing phone catalog


// Define a new phone
const pixel = {
    id: 3,
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 750,
    weight: 1.3
}


phones.push(pixel)

for (const phone of phones) {
    console.log(phone.price)
}

for (const phone of phones){
    console.log(`The ${phone.maker} ${phone.name} costs $${phone.price} dollars.
    `)
}

// Step through the array of phones
for (const phone of phones){
    phone.weight = phone.weight + 0.4
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
}

// modify to only display product details if a condition is true. 
const phoneToFind = 2
for (const phone of phones) {
    if (phone.id === phoneToFind) {
        phone.weight = phone.weight + 0.4 
        console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
    }
}
