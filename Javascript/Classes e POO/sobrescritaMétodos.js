class Spaceship{
    constructor (name,maxCrew,maxRecommendedvelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedvelocity = maxRecommendedvelocity
        this.currentVelocity = 0
    }
    speedUp(acceleration){
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendedvelocity){
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!\nDiminua ou poderá causar danos á nave.")
        }
    }
}

class TransportSpaceship extends Spaceship {
    speedUp() {
        alert("Naves de transporte só aumentam a velocidade em 1km/s")
        this.currentVelocity += 1
    }

}

let transportSpaceship = new TransportSpaceship("Transportadora",4,100)
transportSpaceship.speedUp()

console.log(transportSpaceship)

