let starShip = {
    name: prompt("Nome da nave:"),
    type: prompt("Tipo da nave"),
    velocityMax: parseInt (prompt("Velocidade máxima da nave:")) 
}

console.log(starShip.velocityMax)
let velocityInitial = 0
let sumVelocity = 0

    while(sumVelocity < starShip.velocityMax){
    let choise = prompt("Voce quer acelerar ou parar?\n1 - Acelerar\n2 - Parar")
    if (choise == "1"){
    velocityInitial = parseInt (prompt("Digite o quanto quer acelerar:"))
    sumVelocity =  velocityInitial + sumVelocity
    console.log(sumVelocity)
    }
    if (sumVelocity > starShip.velocityMax){
        console.log("Velocidade máxima ultrapassada!")
        console.log("Velocidade da nave atual: " + sumVelocity + " Velocidade máxima permitida da nave: " + starShip.velocityMax)
        break
    }
    else if (choise == "2"){
        console.log("Nome da nave: " + starShip.name + "\nTipo: " + starShip.type + "\nEstava na velocidade de " + sumVelocity + " kms/s")
        break
}
else if (choise != "1" && choise != "2"){
    alert("Opção inválida!")
    }

 }