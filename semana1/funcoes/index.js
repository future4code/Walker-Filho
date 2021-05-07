
        // # Exercícios de interpretação de código

/*

1. Leia o código abaixo

        
        function minhaFuncao(variavel) {
            return variavel * 5
        }
    
        console.log(minhaFuncao(2))
        console.log(minhaFuncao(10))
        
    
        a) O que vai ser impresso no console?
    
        b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função
         `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
         
         R: a - 10
                50

            b - Undefined, a função "minhaFuncao(variavel)" não seria ativa.

2. Leia o código abaixo

    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    

    a. Explique o que essa função faz e qual é sua utilidade

    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura`
         ii.  `CENOURA é bom pra vista`
         iii. `Cenouras crescem na terra`

         R: a - 

*/         

        // # Exercícios de escrita de código

    //Exercício 1
    // a

// function imprimeTextoDoUsuario () {
//     const textoInserido = ("Olá sou o Walker, tenho 31 anos, moro em Lauro de Freitas e sou estudante.")
//     console.log(`Olá ${textoInserido}`)
// }

// imprimeTextoDoUsuario()

    // b

// function informacaoPessoal() {
//     const digaSeuNome = prompt("Informe seu nome.")
//     const digaSuaIdade = prompt("Quantos anos você tem?")
//     const digaSuaCidade = prompt("Agora informe a cidade onde mora")
//     const digaProfissao = prompt("E qual sua profissão?")
//     const dadosCompleto = `Olá, me chamo ${digaSeuNome}, tenho ${digaSuaIdade} anos, moro na cidade de ${digaSuaCidade}
//     e atualmente sou ${digaProfissao}.`
//     console.log(dadosCompleto)
//     return dadosCompleto
// }
// informacaoPessoal()


        // Exercício 2
        // a

// function doisNumeros (numero1, numero2) {
//     const somaDois = numero1 + numero2
//         return somaDois
// }        
// const soma = doisNumeros(10, 20)
// console.log(soma)



        // b
        
// function diferenca (numero1, numero2) {
//     const comparacao = numero1 >= numero2
//     return comparacao
// }        
// const diferencaNumero = diferenca(50, 20)
// console.log(diferencaNumero)



        // c
        
// function divisivel(numero) {
//     const testeDeNumero = prompt("Digite um numero.")
//     const resultado = (`O numero é divisivel por 2? ${(testeDeNumero % 2) ===0}`)
//     return resultado
// }       
// const resultadoDivsao = divisivel()
// console.log(resultadoDivsao)


        // d

        
        