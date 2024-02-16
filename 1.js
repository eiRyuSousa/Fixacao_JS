//Crie um programa que receba um número do mês e retorne o nome do mês usando switch case.

let numMes = parseInt(prompt('em que mês estamos?: '));
let nomeMes;

switch (numMes){
  case 1:
    nomeMes = 'janeiro'
    break

  case 2:
    nomeMes = 'fevereiro'
    break

  case 3:
    nomeMes = 'março'
    break

  case 4:
    nomeMes = 'abril'
    break

  case 5:
    nomeMes = 'maio'
    break

  case 6:
    nomeMes = 'junho'
    break

  case 7:
    nomeMes = 'julho'
    break

  case 8:
    nomeMes = 'agosto'
    break

  case 9:
    nomeMes = 'setembro'
    break

  case 10:
    nomeMes = 'outubro'
    break

  case 11:
    nomeMes = 'novembro'
    break

  case 12:
    nomeMes = 'dezembro'
    break

  default:
    nomeMes = 'invalido'
}

console.log('o mês é ' , nomeMes)
