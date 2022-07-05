//forEach


/*for 
const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

for(let i = 0; i < nomes.length; i = i + 1 ) {
    console.log('[for]', nomes[i]);
}*/

//utilizando forEach

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

for(let i = 0; i < nomes.length; i = i + 1 ) {
    console.log('[for]', nomes[i]);
}

//map

/*const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

nomes.map(function(nome, i) {
    console.log('[forEach]', nome, i);
})*/

//forma mais elegante para trabalhar com o for usamos o .forEach e caso queiramos transformar/alterar valores ou mesmo concatenar operações em cima de arrays o .map é o mais indicado.