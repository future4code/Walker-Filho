

       // # Exercícios de interpretação de código

/*       

1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

        let array
        console.log('a. ', array)
   
        array = null
        console.log('b. ', array)
        
        array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        console.log('c. ', array.length)
        
        let i = 0
        console.log('d. ', array[i])
        
        array[i+1] = 19
        console.log('e. ', array)
        
        const valor = array[i+6]
        console.log('f. ', valor)

        R:a. undefined
          b. null  
          c. 11 
          d.   
          e. 
          f. 

*/

/*

2. Leia o código abaixo com atenção 

    const frase = prompt("Digite uma frase")

    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

    R: A frase digitada ficara toda em maiuscula "frase.toUpperCase" 
    todas as letras "A" serão trocas por "I" "raplaceAll("A", "I")"
    e no final indica quanutos caracteres tem a frase escrita com o "frase.langth".

*/    


        // # Exercícios de escrita de código
/*
    //1° Exercício    

const nomeUsuario = prompt("Diga o seu nome?")
const emailUsuario = prompt("E diga seu e-mail?")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso.
Seja bem-vindo(a). ${nomeUsuario}`);

*/
/*
    //2° Exercício
      
const comidaFavorita = [
    "Cachorro-quente", 
    "Churrasco", 
    "Lasanha", 
    "Pastel", 
    "Pizza"
];

console.log(`Essas são as minhas comidas favoritas: ${comidaFavorita}`)
console.log(comidaFavorita)

const comidaDoConvidado = prompt("Diga a sua comida favorita.")

comidaFavorita[1] = comidaDoConvidado
console.log(comidaFavorita)

*/

    //3° Exercício

const listaDeTarefas = []

listaDeTarefas[0] = prompt("Diga a primeira tarefas que você fez hoje.")
listaDeTarefas[1] = prompt("Diga a segunda tarefa de hoje.")
listaDeTarefas[2] = prompt("E diga a terceira tarefa que fez hoje.")

const tarefaRemovida = prompt("Indiqe uma de suas tarefas de 1 a 3.") 

console.log(listaDeTarefas)
