const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];


const alunosReprovados = alunos.filter((aluno,indice) =>{
    return medias[indice] < 7 ? true : false;

})

const alunosReprovados2 = alunos.filter((aluno,indice) =>{
    return medias[indice] >= 7;

})
alunosReprovados.forEach((aluno)=>{
    console.log(aluno)
})


alunosReprovados2.forEach((aluno)=>{
    console.log(aluno)
})