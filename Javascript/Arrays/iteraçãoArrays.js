let hitchedSpaceShips = ["Demeter","Darwin","Supernova","Fenix","Puller"]

//forEach -percorre os elementos e para cada elemento chama o callback declarado

/*hitchedSpaceships.forEach(function (currentSpaceShip,index){
    console.log("Nave " + currentSpaceShip + "\nIndice: " + index)
})*/

//map - modifica os elementos do array um a  um sem modificar o array original

/*let upcasedSpaceShips = hitchedSpaceShips.map(function (currentSpaceShip,index){
    let upcased = currentSpaceShip.toUpperCase()
    return upcased
})

console.log(upcasedSpaceShips)*/

//filter - filtra os elementos do array

/*let with7Chars = hitchedSpaceShips.filter(element => {return element.length >= 7})

console.log(with7Chars)*/

//find - retorna o primeiro elemento de uma determinada condição lógica

/*let find7Chars = hitchedSpaceShips.find(element => {return element.length >= 7})

console.log(find7Chars)*/
