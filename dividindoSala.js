

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme',
'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius',
 'Renan', 'Renata', 'Daisy', 'Camilo','joão'];
const metadeAlunos = (Math.round(alunos.length /2)) - 1
// console.log(alunos.length);
// console.log(metadeAlunos);
const primeiraMetade = alunos.slice(0, metadeAlunos);
const segundaMetade = alunos.slice(metadeAlunos);

console.log(primeiraMetade)
console.log('!----------------------------------------------------------------------------------------------!')
console.log(segundaMetade)
