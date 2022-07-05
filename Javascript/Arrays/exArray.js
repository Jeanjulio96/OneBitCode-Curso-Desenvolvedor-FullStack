const hitchedSpaceShips = [
["Fenix", 8,true],
["Golias",10,true],
["Helmet",5,false],
["Elemental",3,true],
["Darwin",15,false]
]

//1

let crewGreaterThan9 = hitchedSpaceShips.filter(spaceship => {
    return spaceship[1] > 9

}).map(spaceship =>{
 return spaceship[0]
})

let ongoinHitchPlatform = hitchedSpaceShips.findIndex(spaceShip => {
    return spaceShip[2] == false
})

let highLithtedSpaceShips = hitchedSpaceShips.map(spaceShip => {
    return spaceShip[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(",")
message += "\nPlataforma com processo de engate: " + (ongoinHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highLithtedSpaceShips.join(",")
alert(message)

