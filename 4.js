//Faça um script que recebe um comando ('start', 'stop', 'pause') e executa uma ação correspondente usando switch.

let comando = prompt('start, stop, pause: ');
let acao;

switch (comando){
  case 'start':
    acao = 'Continuando...'
    break

  case 'stop':
    acao = 'Parado.'
    break

  case 'pause':
    acao = 'Pausado...'
    break

  default:
    acao = 'Invalido'
}

console.log(acao)
