let nameSpaceShip = prompt("Digite o nome da espaçonave: ")
let newSpaceShip = ""

let c1 = prompt("Qual caracter deseja substituir?: ")
let c2 = prompt("Por qual caracter deseja substituir?: ")

for (let i = 0; i < nameSpaceShip.length; i++){
    if (nameSpaceShip[i] == c1){
        newSpaceShip += c2      
    }
    else{
        newSpaceShip += nameSpaceShip[i]
    }
}

for (let i = 0; i < nameSpaceShip.length; i++){

alert("O novo nome da nave é: " + newSpaceShip)

}