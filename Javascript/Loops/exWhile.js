let nome = prompt("Digite o nome da nave: ")
let op = prompt("Deseja entrar com a dobra espacial?: 1 - Sim\n2 - Não")
let dobras = 0

while(op != 2){
    op = prompt("Deseja realizar a próxima dobra?: 1- Sim\n2- Não")
    dobras++
    
}
alert("Nome da nave: " + nome + "\n\nNúmero de bordas realizadas: " + dobras)



