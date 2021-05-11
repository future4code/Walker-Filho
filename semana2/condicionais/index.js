
//---------- # Exercícios de interpretação de código ------------------------------------------------------------------

//1. Leia o código abaixo:

    // const respostaDoUsuario = prompt("Digite o número que você quer testar")
    // const numero = Number(respostaDoUsuario)

    // if (numero % 2 === 0) {
    //   console.log("Passou no teste.")
    // } else {
    //   console.log("Não passou no teste.")
    // }
    

    //a) Explique o que o código faz. Qual o teste que ele realiza?
            //R: Testa o número indicado se é divisivel por dois e imprime a mensagem referente: Se o número for divisivel
    //por "2" a mensagem é "Passou no teste", se não for divisivel por "2" a mensagem é "Não passou no teste".

    //b) Para que tipos de números ele imprime no console "Passou no teste"?
            //R: Para números pares que tem divisão exata por "2", tendo "0" como resto.

    //c) Para que tipos de números a mensagem é "Não passou no teste"?
            //R: Para números impares cujo a divisão por "2" não seja exata sobrando "1" como resto.

//2. O código abaixo foi feito por uma pessoa desenvolvedora, 
//contratada para automatizar algumas tarefas de um supermercado:

            
    // let fruta = prompt("Escolha uma fruta")
    // let preco

    // switch (fruta) {
    //     case "Laranja":
    //         preco = 3.5
    //         break;
    //     case "Maçã":
    //         preco = 2.25
    //         break;
    //     case "Uva":
    //         preco = 0.30
    //         break;
    //     case "Pêra":
    //         preco = 5.5
    //         break; // BREAK PARA O ITEM c.
    //     default:
    //         preco = 5
    //         break;
    // }
    // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
        
    //a) Para que serve o código acima?
            //R: Para indicar no no console qual fruta e preço da mesma escolida.
        
    //b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
            //R: Sera impresso: "O preço da fruta Maçã é R$ 2.25 
        
    //c) Considere que um usuário queira comprar uma `Pêra`, 
    //qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` 
    //(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
            //R: Sera impresso: "O preço da fruta Pêra é R$ 5.55


//3. Leia o código abaixo:

    // const numero = Number(prompt("Digite o primeiro número."))
        
    // if(numero > 0) {
    //     console.log("Esse número passou no teste")
    //     let mensagem = "Essa mensagem é secreta!!!"
    // }
        
    // console.log(mensagem)
        
    //a) O que a primeira linha está fazendo?
            //R: Transformando a resposta "string" em numero "Number".

    //b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
            //R: Tendo digitado o numero "10" imprime a mensagem "Esse número passou no teste".
            //Se digitar o número "-10" nada aparece ou da Undefined.

    //c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
            //R: Sim: A variavel "mensagem" não conseque ecessar a string por que está dentro do escopo.


//---------- # Exercícios de escrita de código ------------------------------------------------------------------------

        // 1° - a, b, c )
// const suaIdade = Number(prompt("Qual a sua idade?"))

// if(suaIdade >= 18) {
//     console.log("Você já tem idade suficiente para dirigir.")
// } else {
//     console.log("Você não tem idade suficiente para dirigir")
// }

        // 2° )
// let seuTurno = prompt("Informe qual turno você estudo: 'M' Matutino, 'V' Vespertino e 'N' Noturno") 

// if(seuTurno === "M") {
//     console.log("Bom dia! Seu turno de estudo é Matutino!")
// } else if (seuTurno === "V") {
//     console.log("Boa tarde! Seu turno de estudo é Vespertino")
// } else if (seuTurno === "N") {
//     console.log("Boa noite! Seu turno de estudo é Noturno")
// } else {
//     console.log ("Digite apenas, M, V ou N.")
// }

        // 3° )
// let seuTurno = prompt("Informe qual turno você estudo: 'M' Matutino, 'V' Vespertino e 'N' Noturno")
// let turno

// switch(seuTurno){        
//     case "M":
//          turno = "Matutino"
//          break;
//     case "V":
//          turno = "Vespertino"
//          break;
//     case "N":
//          turno = "Noturno"
//          break;
//     default:
//         console.log("Digite apenas, M, V ou N.")     

//  }
// console.log("Seu turno de estudol é", turno, "!");

    // 4° ) 
const generoDeFilme = prompt("Qual genero de filme você quer assitir?")
const precoDoIngresso = Number(prompt("Qual o valor do ingresso?"))

if(generoDeFilme.toLowerCase === "fantasia") {
    
} else if(precoDoIngresso >= 15) {
        console.log("Bom filme!")
} else {
    console.log("Escolha outro filme")
}