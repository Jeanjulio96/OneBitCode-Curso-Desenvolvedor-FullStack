function doubleVelocity(velocity, printer){ 
    console.log("Entrei em doubleVelocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

//printer vira um callback pois está sendo chamado dentro de uma função de alta classe

/*let printVelocity = velocity => {
    console.log("Nova velocidade " + velocity + "km/s")
}

let newVelocity = doubleVelocity(60,printVelocity)
console.log(newVelocity)*/

/*let anotherVelocity = doubleVelocity(50,velocity => {
    console.log("Outra velocidade: " + velocity)
})*/

let anotherVelocity = doubleVelocity(50,function(velocity){
    console.log("Outra velocidade: " + velocity)
}) //arrow function