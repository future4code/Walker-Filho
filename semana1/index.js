/*
    Exercício de interpretação de código

1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

        
        let a = 10
        let b = 10

        console.log(b)

        b = 5
        console.log(a, b)
        
        R: O codigo vai concatenar "105,10" dessa forma.
    
2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

        
        let a = 10
        let b = 20
        let c
        c = a
        b = c
        a = b

        console.log(a, b, c)
        
        R: O resultado fica "10, 10, 10" já que todos estão se igualando.

3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.

    
    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)
    
        R: Substituindo "p" ficaria "horasTrabaladas", substituindo "t" ficaria "lucroDiario".


*/


const nome = prompt("Seu nome é");
let idade = Number(prompt("Sua idade é?"));

console.log("Olá ", nome, ", você tem", idade, "anos.");

console.log(typeof nome, nome);
console.log(typeof idade, idade);

/*
    No primeido caso do nome foi digitado de forma simples sem nem uma modificação, o seja qual quer caracter sairia
 como uma "string".
    Segundo caso para a idade ser identificada como numero é adcionando a converção "Number" faz com que o programa mude a inentificação
 de string para numero.   
*/


alert("Olá, responda SIM ou NÃO apenas!");

let notebook = prompt("Você usa notebook para estudar?");
let anime = prompt("Você gosta de animes?");
let agua = prompt("Você já bebeu água hoje?");

console.log("Usa notebook?", notebook,"!");
console.log("Gosta de animes?", anime,"!");
console.log("Já bebeu água?", agua,"!");


let a 
let b = 10;
let c = 25;

a = c

console.log(a, b);
