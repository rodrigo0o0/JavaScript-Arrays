const notas = [10, 9.5, 8, 7, 6];

//INLINE
const notas2 = notas.map(nota => nota + 1 > 10? nota : nota + 1)

//arrow function dessa forma precisa de um retorno
const notas3 = notas.map((nota) => {
    return nota + 1 > 10? nota : nota + 1
   
})

//função anonima
const notas4 = notas.map(function (nota) {
    return nota + 1 > 10? nota : nota + 1
})




notas.forEach((nota)=>{
    console.log(nota)
    
})
console.log('INLINE')
notas2.forEach((nota)=>{
    console.log(nota)
    
})

console.log('arrow function')
notas3.forEach((nota)=>{
    console.log(nota)
    
})

console.log('função anonima')
notas4.forEach((nota)=>{
    console.log(nota)

})
