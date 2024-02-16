//Crie um programa que recebe uma temperatura em Celsius e a converte para Fahrenheit ou vice-versa, dependendo da escolha do usuário. Utilize a estrutura switch case para lidar com as diferentes opções de conversão

let temp = parseFloat(prompt('Qual a temperatura de hoje?: '));
let graus = prompt('Fahrenheit(F), Celcius (C)?: ');
let conversao;

switch (true){
  case graus == 'F':
    conversao = (temp - 32) * 5 / 9
    break

  case graus == 'C':
    conversao = (temp * 9/5) + 32
    break
}

console.log(conversao)
