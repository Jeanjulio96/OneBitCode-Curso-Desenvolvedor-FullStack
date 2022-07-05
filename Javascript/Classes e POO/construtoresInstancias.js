class SpacialStation {
    constructor(name,platformsQuantity) {
       this.name = name
       this.platformsQuantity = platformsQuantity
    }
}

let observatory = new SpacialStation("Observatorio",40)

console.log(observatory)

//construtor com parametro um valor padrão

class spaceShip {
    constructor(name,type = "Descoberta"){
        this.name = name
        this.type = type
    }
}

let darwin = new spaceShip("Darwin")
let helmet = new spaceShip("Helmet","Batalha")

console.log(darwin)
console.log(helmet)