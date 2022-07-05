/*let doubleSpeed = function(velocity){
    return velocity * 2
}

let newVelocity = doubleSpeed(40)

console.log(newVelocity)*/


//Funções tradicionais podem ser chamadas antes mesmo de serem declaradas 


console.log(speedUp(60,10))
console.log(doubleSpeed(50))

let doubleSpeed = function(velocity){
    return velocity * 2
}
    function speedUp(velocity, aceleration){ 
        return velocity + aceleration
 }

