let distanceInLY = prompt("Digite a distancia em Anos luz")

let choseOption = prompt("Para qual unidade deseja converter?\n1. Parse(pc)\n2. Unidade astronomica (AU)\n3. Quilometros (km)\n4\n(Digite o numero da opcap desejada)")

let choseUnity
let converterDistance

switch(choseOption){
case "1":
        choseUnity = "Parsec"
        converterDistance = distanceInLY * 0.306601
        break
case "2":
        choseUnity = "Unidade Astronomica"
        converterDistance = distanceInLY * 63241.1
        break
case "3":
        choseUnity = "Quilometros"
        converterDistance = distanceInLY * 9.5 * Math.pow(10, 12)
        break
        default:
            choseUnity = "Unidade não identificada"
            converterDistance = "Conversão fora do escopo"
    }

    alert ("Distancia em Anos-luz " + distanceInLY + "\n" + choseUnity + ": " + converterDistance) 