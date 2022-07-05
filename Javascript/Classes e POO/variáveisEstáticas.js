class Spaceship {
    static get decelerationRate() {
        return 0.15
    }
    constructor (name) {
        this.name = name
        this.currentVelocity = 0
        
    }

    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate))
    }
}

let spaceship = new Spaceship("Apolo")

spaceship.speedUp(100)
console.log(spaceship)