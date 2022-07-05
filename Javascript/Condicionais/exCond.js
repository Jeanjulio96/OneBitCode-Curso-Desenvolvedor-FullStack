let nome = prompt("Digite seu nome de piloto: ")
let velInit = 0;
let vel = prompt("Qual velocidade voce gostaria de aceletar a nave?:")
velInit = vel
let conf = confirm("Velocidade escolhida: " + vel + ". Deseja confirmar?")
if (conf == false){
    vel = prompt("Digite a nova velocidade para atualizar: ")
}

if (vel < 0){
    alert("Nave está parada.Considere partir e aumentar a velocidade")
}
else if (vel < 40){
    alert("Voce está devagar, podemos aumentar mais")
}
else if (vel >= 40 && vel < 80){
    alert("Parece uma boa velocidade para manter")
}
else if (vel >=80 && vel < 100){
 alert("Velocidade alta. Considere diminuir")
}
else if (vel >= 100){
    alert("Velocidade perigosa. Controle automático forçado")
}

alert("Nome do piloto: " + nome)
alert("Velocidade atual: " + vel)
