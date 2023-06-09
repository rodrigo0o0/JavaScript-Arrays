const notas = [10, 6.5, 8, 7.5];


var soma = 0;


for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    
}
const media = soma / notas.length

console.log(`A média das notas foi de : ${media}`)