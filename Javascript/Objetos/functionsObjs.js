let spaceShip = { //funções dentro de objetos se chamam métodos
    name: "Demeter", //propriedades dos objetos se chamam atributos
    type: "Extração",
    maxCrew: 20,
    turnOn: function(){
        alert("Preparando propulsão")
        alert("Ligando computador de bordo")
        console.log(this.name)
    }
}


spaceShip.velocity = 0
spaceShip.speedUp = function(acceleration){ //this: refenciar o próprio objeto no caso Starship
    this.velocity += acceleration
}

console.log(spaceShip)

spaceShip.speedUp(10)

console.log(spaceShip)
