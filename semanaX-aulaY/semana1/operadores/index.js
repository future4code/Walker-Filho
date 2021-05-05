/*
       # Exercícios de interpretação de código
       
1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 

    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)

    console.log("d. ", typeof resultado)

    R: a - false
       b - false
       c - true
       d -


2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
    
    R: Adcionar o "Number()" antes do prompt para transformar em numeros.

3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

    R:      let primeiroNumero = Number(prompt("Digite um numero!"))
            let segundoNumero = Number(prompt("Digite outro numero!"))

            const soma = primeiroNumero + segundoNumero

            console.log(soma)


*/   

            // #Exercícios de escrita de código

/*
    //1°

const suaIdade = Number(prompt("Qual a sua idade?"))
const idadeAmigo = Number(prompt("Qual a idade do seu amogo?"))

let resultado = suaIdade >= idadeAmigo
console.log("Minha idade é maior do que a meu amigo?", resultado)
console.log("Nossa diferença de idade é de", idadeAmigo - suaIdade,"anos!")
*/

    //2°

    let numeroPar = Number(prompt("Digite um numero par"))

    console.log("O numero é divisivel por 2?"(numeroPar / 2))


/*
    //3°

const suaIdade = Number(prompt("Diga sua idade."))

let meses = suaIdade * 12;
let dias = suaIdade * 365;
let horas = dias * 24

console.log("Sua idade em meses é de:", meses,"meses")
console.log("Sua idade em dias é de:", dias,"dias!")
console.log("Sua idade em horas é de:", horas,"horas!")

*/

/*
    //4°


const primeiroNumero = Number(prompt("Insire um numero."))
const segundoNumero = Number(prompt("Insira mais um numero."))


console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero)
console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero)
*/    
