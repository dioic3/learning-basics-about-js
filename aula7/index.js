/*
Joyce da Costa tem 20 anos, pesa 56 kg
Tem 1.8 de altura e seu Imc é de x */
const nome = 'Joyce';
const sobrenome = 'da Costa';
const idade = 22;
const peso = 56;
const altura = 1.80;
let imc;
let anoDeNascimento;

anoDeNascimento = (2024 - idade);
imc = peso / (altura * altura);

console.log(nome+ '' + sobrenome + ' tem ' + idade + ' anos.' + ' Pesa ' + peso + ' kg.')
console.log(`Tem ${altura} e seu IMC é ${imc}`)
console.log(`Seu ano de nascimento é ${anoDeNascimento}`)