//Implemente um programa que, dado o dia da semana como número, retorne o nome do dia usando switch.

let diaSemana = parseInt(prompt('Que dia da semana é?: '));
let nomeDia;

switch (diaSemana){
  case 1:
    nomeDia = 'domingo'
    break

  case 2:
    nomeDia = 'segunda'
    break

  case 3:
    nomeDia = 'terça'
    break

  case 4:
    nomeDia = 'quarta'
    break

  case 5:
    nomeDia = 'quinta'
    break

  case 6:
    nomeDia = 'sexta'
    break

  case 7:
    nomeDia = 'sabado'
    break
  default:
    nomeDia = 'invalido'
}

console.log('o dia da semana é ' , diaSemana)
