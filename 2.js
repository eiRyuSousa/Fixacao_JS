//Desenvolva um sistema de notas escolares onde, dado um valor de 0 a 100, retorne A, B, C, D ou F usando switch.

let Nota = parseInt(prompt('digite sua nota: '));
let Media;

switch (true){
  case 100:
    Media = 'A'
    break

  case Nota >= 80 && Nota <= 99:
    Media = 'B'
    alert('sua nota ' + Media)
    break

  case Nota >= 60 && Nota<= 79:
    Media = 'C'
    alert('sua nota ' + Media)
    break

  case Nota >= 40 && Nota<= 59:
    Media = 'D'
    alert('sua nota ' + Media)
    break

  case Nota >= 0 && Nota<= 39:
    Media = 'F'
    alert('sua nota ' + Media)
    break

  default:
    Media = 'Média invalida'
}
