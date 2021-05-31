```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let contador = 0
    for(let i = 0; i < arrayDeNumeros.lenght; i++) {
      if(numeroEscolido === arrayDeNumeros[0]) {
        contador += 0
    }else{
      console.log("Número não encontrado.")
    }
    return `O número ${numeroEscolido} aparece ${contador}x.`
}
contaOcorrencias([1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5])
```