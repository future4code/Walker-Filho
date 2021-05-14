/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//======================================//=======================================//====================================const

const somaDasCartas = (numero1, numero2) => {
   return numero1 + numero2
}

const carta1 = comprarCarta()
const carta2 = comprarCarta()
const carta3 = comprarCarta()
const carta4 = comprarCarta()

console.log("Bem vindo ao jogo blackjack. Essas são as cartas da rodada!")

if(confirm("Vamos jogar?") === true) {
   console.log(`Usuário, cartas - ${carta1.texto} ${carta2.texto} - 
   Você alcançou ${somaDasCartas(carta1.valor, carta2.valor)} pontos.`)

   console.log(`Computador, cartas - ${carta3.texto} ${carta4.texto} - 
   Crupiê alcançou ${somaDasCartas(carta3.valor, carta4.valor)} pontos.`)

   const cartasUsuario = carta1.valor + carta2.valor
   const cartasCrupie = carta3.valor + carta4.valor

      if(cartasUsuario > cartasCrupie){
         console.log("Parabens! Você venceu a partida")
            if(cartasUsuario === "21") {
               alert ("Winner, winner, chicken dinner!")
            }
      } else if (cartasUsuario < cartasCrupie){
         console.log("Crupê vençe!")
      } else {
         console.log("Total de pontos iguais, ninguém vence!")
      }
}

      