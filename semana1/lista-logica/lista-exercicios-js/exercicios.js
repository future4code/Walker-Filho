// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

// function calculaAreaRetangulo() {
//    // implemente sua lógica aqui
//    const alturaRetangulo = prompt ("Qual a altura do retangulo?")
//    const larguraRetangulo = prompt ("E qual a largura do retangulo?")

//    console.log(alturaRetangulo * larguraRetangulo)
// }
// calculaAreaRetangulo()

//Exercício 2

// function imprimeIdade() {
//    // implemente sua lógica aqui
//    const anoAtual = prompt ("Em que ano nos estamos?")
//    const anoNascimento = prompt ("Em que ano você nasceu?")

//    console.log(anoAtual - anoNascimento)
// }
// imprimeIdade()

//Exercício 3

// function calculaIMC(peso, altura) {
//    // implemente sua lógica aqui
//    const seuPeso = prompt ("Qual o seu peso?")
//    const suaAltura = prompt("Qual a sua altura?")
//    const imc = seuPeso / (suaAltura * suaAltura)
//    return imc
// }
// calculaIMC()

//Exercício 4

// function imprimeInformacoesUsuario() {
//    // implemente sua lógica aqui
//    const seuNome = prompt("Qual o seu nome?")
//    const suaIdade = prompt("Qual a sua idade?")
//    const seuEmail = prompt("Diga p seu e-mail.")
//    console.log(`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`)
// }
// imprimeInformacoesUsuario()

//Exercício 5

// function imprimeTresCoresFavoritas() {
//    // implemente sua lógica aqui
//    const cor1 = prompt("Qual a sua cor favorita?")
//    const cor2 = prompt("DIga mais uma cor que goste.")
//    const cor3 = prompt("E a terceira favorite é?")
//    console.log([cor1, cor2, cor3])
// }
// imprimeTresCoresFavoritas()

//Exercício 6

// function retornaStringEmMaiuscula(string) {
//    // implemente sua lógica aqui
//    const seuNome = prompt("Diga seu nome!")
//    const maiusculo = seuNome.toUpperCase() 
//    console.log(maiusculo)
//    return maiusculo
// }
// retornaStringEmMaiuscula()

//Exercício 7

// function calculaIngressosEspetaculo(custo, valorIngresso) {
//    // implemente sua lógica aqui
//    const custoEspetaculo = prompt("Qual a divida total do espetaculo?")
//    const valorDoIngresso = prompt("Qual o valor do ingresso?")
//    const totalVendas = custoEspetaculo / valorDoIngresso
//    console.log(`Precisam ser vendido ${totalVendas} ingressos para começar a ter lucro.`)
//    return totalVendas
// }
// calculaIngressosEspetaculo()

// Exercício 8

// function checaStringsMesmoTamanho(string1, string2) {
//   // implemente sua lógica aqui
//   const seuNome = prompt("Diga seu nome.")
//   const nomeAmigo = prompt("Diga o nome de um aigo.")
//   const tamanho = seuNome.length === nomeAmigo.length
//   console.log(`Os nomes tem a mesma quantidade de caracteres? ${tamanho}`)
//   return tamanho
// }
// checaStringsMesmoTamanho()

// Exercício 9

// function retornaPrimeiroElemento(array) {
//    // implemente sua lógica aqui
//    const numeros = ["32", "48", "56", "69", "77"]
//    const primeiroArray = 1
//    console.log("O primeiro item é; primeiroArray)
//    return primeiroArray
// }
// retornaPrimeiroElemento()

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
}

// Exercício 12

// function checaIgualdadeDesconsiderandoCase(string1, string2) {
//    // implemente sua lógica aqui
//    const fruta1 = prompt("Diga uma fruta.")
//    const fruta2 = prompt("Diga outra fruta.")
//    const frutasIguaes = fruta1 == fruta2
//    console.log(`São as mesmas frutas? ${frutasIguaes}`)
//    return frutasIguaes
// }
// checaIgualdadeDesconsiderandoCase()

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
   const suaIdade = prompt("Responda SIM ou NÂO; Você tem mais de 18 anos?")
   const escolaridade = prompt("Responda SIM ou NÂO; Você possue o ensino médio completo?")
   const desponibilidade = prompt("Responda SIM ou NÂO; Você possui disponibilidade exclusiva durante os horários do curso?")
   console.log(suaIdade === "sim", escolaridade === "sim", desponibilidade === "sim")
}
checaValidadeInscricaoLabenu()