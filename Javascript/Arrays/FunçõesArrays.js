let hitchedSpaceshipes = ["Colossus","Elemental","Helmet"]

//push - adiciona novo elemento dentro do array no final

console.log(hitchedSpaceshipes)
hitchedSpaceshipes.push("Supernova")
console.log(hitchedSpaceshipes)

//pop - remove elemento no array

/*hitchedSpaceshipes.push()
console.log(hitchedSpaceshipes)

let removeSpaceship = hitchedSpaceshipes.pop()*/

//shift - remove o primeiro elemento do array

let removeSpaceship = hitchedSpaceshipes.shift()
console.log(hitchedSpaceshipes)

//unshift - adiciona elemento no começo do array

hitchedSpaceshipes.unshift("Fenix")
console.log(hitchedSpaceshipes)

//length - retorna o tamanho do array

console.log(hitchedSpaceshipes.length)

//indexOf - retorna o índice da localizacão de determinado elemento no array

let elementalPos = hitchedSpaceshipes.indexOf("Elemental")
console.log(elementalPos)