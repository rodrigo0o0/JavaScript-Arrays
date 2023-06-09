const nomes = ["Evaldo", "Mari", "Camis"];

//arrow functions
console.log('--------------------------ARROW FUNCTION--------------------------')
nomes.forEach( (nome) => {
    console.log(nome)
})

//anonyms functions
console.log('--------------------------FUNÇÃO ANÔNIMA--------------------------')
nomes.forEach( function (nome) {
    console.log(nome)
})

console.log('--------------------------FUNCAO COMO PARÂMETRO--------------------------')
function imprimeNomes(nome,indice){
    console.log(`${indice} : ${nome}`)
}

nomes.forEach(imprimeNomes)

