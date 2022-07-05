let nameSpaceShip = prompt("Digite o nome da espaçonave: ")
let invertedName = ""

for (let i = nameSpaceShip.length - 1; i>=0; i--){
if (nameSpaceShip[i] == "e"){
    break
}
invertedName += nameSpaceShip[i]
}

alert("Nome original da nave: " + nameSpaceShip + "\nNome após ocultação: " + invertedName)
