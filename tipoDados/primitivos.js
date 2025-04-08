// String: representa textos e pode ser definidade com aspas simples, duplas ou crase
let nome = 'Gustavo';
let linguagem = "JavaScript";
let frase = `Olá, me chamo ${nome} e estou aprendendo ${linguagem}!`; // template string
console.log(frase);

// Number: representa números, tanto inteiros quanto de ponto flutuante, não existe distinção entre 'int' e 'float' no JavaScript
let idade = 26;
let preco = 7.99;

// Boolean: representa valores lógicos, TRUE ou FALSE
let ativo = true;
let concluido = false;

// Undefined: significa que uma variável foi declarada, mas ainda não foi atríbuido nenhum valor
let teste;
console.log(teste); // Undefined

// Null: usado para indicar que uma variável está vazia intencionalmente
let usuario = null;

// Symbol: representa um identificador único e imutável, útil para evitar conflitos de nomes em objetos
let id = Symbol('id');
let cpf = Symbol('cpf');

/* BigInt: representa números inteiros muito grandes, maiores do que o limite do tipo Number 
- o 'n' no final é obrigatório para declarar um BigInt;
*/
let numeroGrande = 1234567890123456789012345678901234567890n;
