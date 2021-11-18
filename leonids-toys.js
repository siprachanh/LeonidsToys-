const toys = [
    {
        id: 1,
        name: "TeddyBear",
        maker: "ToysRUs",
        color: "brown",
        size: 1.5,
        weight: 2,
        price: 3
},
{
         id: 2,
        name: "SoccerBall",
        maker: "ToysRUs",
        color:  "green",
        size: 2.5,
        weight: 2,
        price: 4
},
{
        id: 3,
        name: "Truck",
        maker: "Hasbro",
        color: "red",
        size: 3,
        weight: 2,
        price: 5
    }
]

console.log(toys)

for (const toy of toys) {
    console.log(toys)
}

 for (const toy of toys) {
   console.log(toy.size)
 }
      //'The size of toys are ${toy.size}') 
 for (const toy of toys) {
    console.log(`Size is ${toy.size}`)
}
// Add new toys
const airplane = {
    id: 4,
        name: "Airplane",
        maker: "Hasbro",
        color: "blue",
        size: 3.5,
        weight: 2.5,
        price: 6
}
const bike = {
    id: 5,
        name: "MyBike",
        maker: "Speedo",
        color: "purple",
        size: 8,
        weight: 15,
        price: 7
}
    

toys.push(airplane)

toys.push(bike)

for (const toy of toys) {
    console.log(`Size is ${toy.size}`)
    console.log(`Toy weight is ${toy.weight}`)
    toy.price = toy.price * 5/100 + toy.price
    console.log(`The ${toy.name} made by ${toy.maker} is ${toy.color} in color.`)
    console.log(`The price of ${toy.name} costs $${toy.price} dollars. The price increased by 5% from the original price.`)
}


