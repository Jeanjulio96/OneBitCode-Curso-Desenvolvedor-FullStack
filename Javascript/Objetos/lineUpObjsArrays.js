//array dentro de objeto


/*let spaceShip = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva","Ana Julia", "Thiago"]
}

spaceShip.crew.push("Ten. Fernanda")

console.log(spaceShip)*/

// objeto dentro de um array

/*let spaceShips = [
  { name: "Elemental",crewQuantity: 10 },
  { name: "Colossus", crewQuantity: 8 },
  { name: "Helmet", crewQuantity: 15}
]

console.log(spaceShips[0].name)
console.log(spaceShips[1].crewQuantity)

spaceShips.forEach(i => {
    alert(i.name + " tem " + i.crewQuantity + " tripulantes")
})*/

//objeto dentro de um objeto

let spaceShip = {
    name: "Golias",
    maxCrew: 20,
    captain:{
        name: "Hugo Trent",
        age: 37
    }
}

console.log(spaceShip.captain.name)
