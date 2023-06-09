const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAluinosEMedias = [alunos, medias]


function exibeNomeENota(nome){
    if(listaDeAluinosEMedias[0].includes(nome)){

        // const alunos = listaDeAluinosEMedias[0];
        // const medias = listaDeAluinosEMedias[1];

        const [alunos, medias] = listaDeAluinosEMedias;
        console.log(`Aluno ${nome} está cadastrado.`)
        let index = alunos.indexOf(nome)
        const mediaAluno = medias[index]
        console.log(`A média de ${nome} foi de : ${mediaAluno}.`)
        
    }else{
        console.log(`Aluno ${nome} não está cadastrado.`)
        

    }
}

exibeNomeENota('Caio')