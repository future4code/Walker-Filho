// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}
console.log(retornaTamanhoArray)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}
console.log(retornaArrayInvertido)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let ordenado = function(a, b) {
        return a - b
    }
    return array.sort(ordenado)
}
console.log(retornaArrayOrdenado)

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numeroPar = function(par) {
        return !(par % 2);
    }
    return array.filter(numeroPar)
}
console.log(retornaNumerosPares)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numeroPar = array.filter(x => (x % 2) == 0)
    let numerosElavadoADois = numeroPar.map(x => x**2)
    return numerosElavadoADois;
}
console.log(retornaNumerosParesElevadosADois)

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}