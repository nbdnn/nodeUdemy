// // A comment
// console.log("Hello World!");
// console.log("Este trecho será exibido no console no navegador");

// let nome = "João"; // String

// console.log(`${nome} nasceu em 1984.`);
// console.log(`Em 2000 ${nome} conheceu Maria.`);
// console.log(`${nome} casou-se com Maria em 2012.`);
// console.log(`Maria teve 1 filho com ${nome} em 2015.`);
// console.log(`O filho de ${nome} se chama Eduardo.`);

// // Não podemos criar variáveis com palavras reservadas
// // Variáveis precisam ter nomes significativos

// // Não podemos começar o nome de uma variável com um número

// // Não podemos conter espaços ou traços no nome da variável
// // Utilizamos camelCase para objetos e variáveis

// // Variáveis são case sensitive

// // NÃO UTILIZE VAR, UTILIZE LET

// // ---------------------------------------------------------

// const primeiroNumero = 5;
// const segundoNumero = 10;
// const resultado = primeiroNumero * segundoNumero;
// const resultadoDuplicado = resultado * 2;

// // ----------------------------------------------------------
// // Exercicios
// /**
//  * Luiz Otávio Miranda tem 30 anos, pesa 84 kg
//  * tem 1.8 de altura e seu IMC é de 25.925925925925
//  * Luiz otávio nasceu em 1980
//  */

// const nomeLuiz = "Luiz Otávio";
// const sobrenome = "Miranda";
// const idade = 30;
// const peso = 84;
// const altura = 1.8;
// let imc; // peso/(altura^2)
// let anoNascimento;

// imc = peso / (altura * altura);
// anoNascimento = 2019 - idade;

// console.log(`${nomeLuiz} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
// console.log(`tem ${altura} de altura e seu IMC é ${imc}`);
// console.log(`${nomeLuiz} nasceu em ${anoNascimento}.`);

// // Tipos primitivos
// // String, number, undefined, null, boolean, symbol
// const nomeStr1 = "Luiz"; // string
// const nomeStr2 = "Luiz"; // string
// const nomeStr3 = `Luiz`; // string
// const num1 = 10; // number
// const num2 = 10.52; // number
// let nomeAluno; // undefined -> não aponta para local nenhum na memória
// const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
// const aprovado = false; // Boolean: true, false (lógico)

// // Mais sobre strings - Aula 13
// let umaString = "O rato roeu a roupa do rei de roma.";

// console.log(umaString.toUpperCase());

// // Um pouco mais sobre numbers em JavaScript

// // IEEE 754-2008
// let num1 = 0.7; // number
// let num2 = 0.1; // number

// num1 = (num1 * 100 + num2 * 100) / 100; // 0.8
// num1 = (num1 * 100 + num2 * 100) / 100; // 0.9
// num1 = (num1 * 100 + num2 * 100) / 100; // 1.0

// console.log(num1);
// console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(num1.toString(2));
// console.log(num1.toFixed(4));
// console.log(Number.isInteger(num1));
// let temp = num1 * "5";
// console.log(Number.isNaN(temp));

// // Objeto Math

// let num1 = 9.56542;

// console.log(Math.floor(num1));
// console.log(Math.ceil(num1));
// console.log(Math.round(num1));
// console.log(Math.min(1, 2, 3, 4, 5, 8, 6, 9, 2, 5, 1, 1, 1, 4, 1, 1, 4));
// const aleatorio = Math.random();

// console.log(aleatorio * (10 - 5) + 5);

// console.log(Math.PI);

// console.log(16 ** 0.5);
// console.log(!!(100 / 0));

// // Arrays - Básico
// const alunos = ["Maria", "Joao", "Joseph"];

// alunos.push("Luiza"); // Adiciona no fim
// alunos.push("Fabio");

// console.log(typeof alunos);
// console.log(alunos instanceof Array);

// console.log(alunos.slice(-1));

// delete alunos[1];

// const removido = alunos.pop(); // Removendo o elemento do final do array
// const removidoDoComeco = alunos.shift(); // Removendo o elemento do começo

// alunos.unshift("Luiza"); // Adiciona no começo
// alunos.unshift("Marcos");

// alunos[alunos.length] = "Luiza"; // Adiciona no fim
// alunos[alunos.length] = "Fabio";
// alunos[alunos.length] = "Caio";

// console.log(removido);
// console.log(removidoDoComeco);

// // Funções
// function sayHi(name) {
//   console.log(`Hi, ${name}!`);
// }

// function soma(x, y) {
//   const resultado = x + y;
//   return resultado;
// }

// console.log(soma(3, 8));

// const raiz = function (n) {
//   return n ** 0.5;
// };

// console.log(raiz(9));

// const raiz = (n) => n ** 0.5;

// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// // Objetos

// const pessoa1 = {
//   nome: "Guilherme",
//   sobrenome: "Neves",
//   idade: 26,
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// function criaPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade };
// }

// const pessoa2 = criaPessoa("Luiz", "Otavio", 25);

// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);
// console.log(pessoa2.idade);

// const pessoa3 = {
//   nome: "Luiz",
//   sobrenome: "Miranda",
//   idade: 25,

//   fala() {
//     console.log(`A minha idade atual é ${this.idade}`);
//   },

//   incrementaIdade() {
//     ++this.idade;
//   },
// };

// pessoa3.fala();
// pessoa3.incrementaIdade();
// pessoa3.fala();
// pessoa3.incrementaIdade();
// pessoa3.fala();
// pessoa3.incrementaIdade();
// pessoa3.fala();

// /**
//  * Primitivos (imutáveis) - string, number, boolean, undefined,
//  * null (bigint, symbol) - valor
//  *
//  * Referência (mutável) - array, object, function
//  */

// // let nome = "Luiz";
// // console.log(nome);
// // nome[0] = "A"; // Essa linha não faz nada
// // console.log(nome[0], nome);

// // let a = "A";
// // let b = a; // cópia
// // console.log(a, b);

// // a = "G";
// // console.log(a, b);

// let a = [1, 2, 3];
// let b = [...a]; // Passado por cópia
// let c = b; // Passado por referência
// console.log(a, b, c);

// a.push(4);
// console.log(a, b, c);

// b.pop();
// console.log(a, b, c);

// const objectA = {
//   nome: "Luiz",
//   sobrenome: "Otávio",
// };

// const objectB = objectA; // Passado por referência
// const objectC = { ...objectB }; // Passado por cópia

// objectB.nome = "João";
// console.log(objectA, objectB, objectC);

// /**
//  * Operadores de comparação
//  *
//  * > maior que
//  * >= maior que ou igual a
//  * < menor que
//  * <= menor que ou igual a
//  * == igualdade (valor) ***********
//  * === igualdade estrita (valor e tipo)
//  * != diferente (valor) ***********
//  * !== diferente estrito (valor e tipo)
//  */

// /**
//  * Operadores Lógicos
//  * && -> AND -> E
//  * || -> OR -> OU
//  * ! -> NOT -> NÃO
//  */

// /**
//  * FALSY
//  * -----
//  * false
//  * 0
//  * '' "" ``
//  * null / undefined
//  * NaN
//  */

// function falaOi() {
//   return "Executou.";
// }

// const vaiExecutar = "Oi";
// console.log(vaiExecutar && falaOi());

// // || é o contrário de &&
// // Exemplo
// const corUsuario = "vermelho";
// const cor = corUsuario || "preto";
// console.log(cor);

// // IF, ELSE IF e ELSE

// for (hora = 0; hora < 50; hora++) {
//   console.log(hora);
//   if (hora < 12 && hora > 4) {
//     console.log("Bom dia");
//   } else if (hora < 18 && hora >= 12) {
//     console.log("Boa tarde");
//   } else if (hora < 24) {
//     console.log("Boa noite");
//   } else {
//     console.log("Olá");
//   }
//   console.log("");
// }

// Operador ternário
// ? :
// (condição) ? "Valor para verdadeiro" : "Valor para falso";

// const pontuacaoUsuario = 1000;

// console.log(pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário nomal");

// const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário nomal";
// console.log(nivelUsuario);

// const corUsuario = null;
// const corPadrao = corUsuario || "Preta";
// console.log(corPadrao);

// Object Date

// const umDia = 3600 * 24 * 1000;
// const data = new Date(0 + umDia);
// console.log(data.toUTCString());
//                    ano  mes dia hr  min sec milSec
// const data = new Date(2019, 3, 20, 15, 14, 27, 500);
// console.log(data.toString());

// const data = new Date("2019-04-20 20:20:59");
// console.log(data.getDay()); // Dom - 0; Sab - 6
// console.log(data.getMonth()); // Jan - 0; Dez - 11

// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function formataData(data) {
//   const dia = zeroAEsquerda(data.getDate());
//   const mes = zeroAEsquerda(data.getMonth() + 1);
//   const ano = zeroAEsquerda(data.getFullYear());
//   const hora = zeroAEsquerda(data.getHours());
//   const min = zeroAEsquerda(data.getMinutes());
//   const seg = zeroAEsquerda(data.getSeconds());

//   return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
// }

// console.log(formataData(new Date()));

// function getDayOfWeek(weekDay) {
//   let diaSemana;

//   switch (weekDay) {
//     case 0:
//       diaSemana = "Doming";
//       return diaSemana;

//     case 1:
//       diaSemana = "Segunda-feira";
//       return diaSemana;

//     case 2:
//       diaSemana = "Terça-feira";
//       return diaSemana;

//     case 3:
//       diaSemana = "Quarta-feira";
//       return diaSemana;

//     case 4:
//       diaSemana = "Quinta-feira";
//       return diaSemana;

//     case 5:
//       diaSemana = "Sexta-feira";
//       return diaSemana;

//     case 6:
//       diaSemana = "Sábado";
//       return diaSemana;

//     default:
//       diaSemana = "Inválido";
//       return diaSemana;
//   }
// }

// const data = new Date();
// console.log(getDayOfWeek(data.getDay()));

// Diferença de escopo entre var e let

// const verdadeira = true;

// // Let tem escopo de bloco { ... bloco }
// // Var só tem escopo de função

// let nome = "Luiz"; // criando
// var nome2 = "Luiz"; // criando

// if (verdadeira) {
//   let nome = "Otávio"; // criando
//   var nome2 = "Rogério"; // redeclarando

//   if (verdadeira) {
//     let nome = "Outra coisa"; // criando
//     var nome2 = "Ronaldo"; //redeclarando
//   }
// }

// console.log(nome, nome2);

// function falaOi() {
//   var sobrenome = "Miranda"; // Escopo da função
//   if (verdadeira) {
//     let sobrenome = "Luiz"; // Escopo do bloco
//     console.log(sobrenome);
//   }
//   console.log(sobrenome);
// }

// falaOi();

// console.log(nome);
// var nome = "Luiz"; // Com Var e Function o js eleva a declaração (Hoisting)

// Atribuição via desestruturação - array
// let a = "A"; // B
// let b = "B"; // C
// let c = "C"; // A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// // ... rest, ... spread
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco);

// const numeros = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const [, [, , seis]] = numeros;
// console.log(seis);

// const [lista1, lista2, lista3] = numeros;
// console.log(lista2[2]);

// // Atribuição via desestruturação - objeto

// const pessoa = {
//   nome: "Luiz",
//   sobrenome: "Miranda",
//   idade: 30,
//   endereco: {
//     rua: "Av Brasil",
//     numero: 320,
//   },
// };

// // Atribuição via desestruturação
// // Usa muito
// const { nome: n = "Não existe", sobrenome, idade } = pessoa;
// console.log(n, sobrenome);

// const {
//   endereco: { rua: r, numero: n },
//   endereco,
// } = pessoa;
// console.log(r, n, endereco);

// const { nome, sobrenome, ...resto } = pessoa;
// console.log(nome, sobrenome, resto);

// // for clássico
// const frutas = ["Maçã", "Pêra", "Uva"];
// for (let i = 0; i < frutas.length; i++) {
//   console.log(`Índice ${i}`, frutas[i]);
// }

// // For in
// const frutas = ["Pera", "Maçã", "Uva", "Banana", "Caju", "Laranja"];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// for (let i in frutas) {
//   console.log(frutas[i]);
// }

// const pessoa = {
//   nome: "Guilherme",
//   sobrenome: "Neves",
//   idade: 26,
// };

// for (let i in pessoa) {
//   console.log(pessoa[i]);
// }

// // For of
// const nomes = ["Guilherme Neves", "Luis Fellipe", "Antonio Augusto"];

// for (let i of nome) {
//   console.log(i);
// }

// nomes.forEach(function (el, i) {
//   console.log(el, i);
// });

// // While e Do While
// const nome = "Guilherme";
// let i = 0;
// while (i < nome.length) {
//   console.log(nome[i]);
//   i++;
// }

// function random(min, max) {
//   const r = Math.random() * (max - min) + min;
//   return Math.floor(r);
// }

// const min = 1;
// const max = 50;
// let rand;

// while (rand !== 10) {
//   rand = random(min, max);
//   console.log(rand);
// }

// do {
//   rand = random(min, max);
//   console.log(rand);
// } while (rand !== 10);

// // Break e Continue
// const numeros = [];
// for (let i = 0; i < 10; i++) {
//   numeros[i] = i + 1;
// }

// for (let n of numeros) {
//   if (n === 2) {
//     console.log("Pulei o numero 2");
//     continue;
//   }
//   console.log(n);
//   if (n === 7) {
//     console.log("7 encontrado, saindo...");
//     break;
//   }
// }

// console.log("-------------------");

// let i = 0;
// while (i < numeros.length) {
//   let n = numeros[i];
//   if (n === 2) {
//     console.log("Pulei o numero 2");
//     i++;
//     continue;
//   }

//   console.log(n);

//   if (n === 7) {
//     console.log("7 encontrado, saindo...");
//     break;
//   }

//   i++;
// }

// // Exercícios - lógica de programação

// // 1- Escreva uma função que recebe dois números e retorne o maior deles
// // function retornaMax(n1, n2) {
// //   return n1 > n2 ? n1 : n2;
// // }

// const retornaMax = (n1, n2) => (n1 > n2 ? n1 : n2);

// console.log(retornaMax(7, 2));

// // 2- Escreva uma função chamada ePaisagem que recebe dois
// // argumentos, largura e altura de uma imagem (number).
// // Retorne true se a imagem estiver no modo paisagem

// const ePaisagem = (larg, alt) => larg > alt;
// console.log(ePaisagem(1024, 720));

// // Escreva uma função que recebe um número e
// // retorne o seguinte:
// // Número é divisível por 3 = Fizz
// // Número é divisível por 5 = Buzz
// // Número é diviśivel por 3 e 5 = FizzBuzz
// // Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// // Checar se o número é realmente um número = Retorna o próprio número
// // Use a função com números de 0 a 100

// const fizzBuzz = (n) => {
//   if (typeof n !== "number") return n;
//   if (n % 15 === 0) return "FizzBuzz";
//   if (n % 3 === 0) return "Fizz";
//   if (n % 5 === 0) return "Buzz";
//   return n;
// };

// for (let i = 0; i <= 100; i++) {
//   console.log(`${i} -> ${fizzBuzz(i)}`);
// }

// // Try Catch Throw Finally
// try {
//   console.log(naoExisto);
// } catch (err) {
//   console.log("naoExisto não existe");
//   console.log(err);
// }

// function soma(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw new Error("x e y precisam ser números");
//   }
//   return x + y;
// }

// try {
//   console.log(soma(1, "OI"));
// } catch (error) {
//   //   console.log(error);
//   console.log("Alguma coisa mais amigável para o usuário");
// }

// try {
//   console.log("try");
//   console.log(a);
// } catch (e) {
//   console.log("tratando o erro");
// } finally {
//   console.log("finally");
// }

// function retornaHora(data) {
//   if (data && !(data instanceof Date)) {
//     throw new TypeError("Esperando instância de Date.");
//   }

//   if (!data) {
//     data = new Date();
//   }

//   return data.toLocaleTimeString("pt-BR", {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: false,
//   });
// }

// try {
//   const data = new Date("01-01-1970 12:58:12");
//   const hora = retornaHora(11);
//   console.log(hora);
// } catch (e) {
//   //   console.log(e);
// } finally {
//   console.log("Tenha um bom dia");
// }

// // setInterval e setTimeout

// function mostrarHora() {
//   let data = new Date();

//   return data.toLocaleTimeString("pt-BR", {
//     hour12: false,
//   });
// }

// // setInterval(function () {
// //   console.log(mostrarHora());
// // }, 1000);

// const timer = setInterval(() => {
//   console.log(mostrarHora());
// }, 1000);

// setTimeout(() => {
//   clearInterval(timer);
// }, 3000);

// setTimeout(() => {
//   console.log("Olá mundo!");
// }, 5000);

// // ##########################################
// // Functions
// // Declaração de função (Function hoisting)
// function falaOi() {
//   console.log("Oi");
// }

// // First-class objects
// // Function expression
// const souUmDado = function () {
//   console.log("Sou um dado.");
// };

// function executaFuncao(funcao) {
//   funcao();
// }
// // executaFuncao(souUmDado);

// const arrowFunction = () => {
//   console.log("Sou uma arrow function");
// };
// arrowFunction();

// // Dentro de um objeto
// // const obj = {
// //   falar: function () {
// //     console.log("Estou falando...");
// //   },
// // };
// const obj = {
//   falar() {
//     console.log("Estou falando...");
//   },
// };
// obj.falar();

// Parâmetros de função
// toda função declarada com a palvra function possui uma variável
// arguments que sustenta todos os argumentos recebidos

// function funcao(a, b, c) {
//   let total = 0;
//   for (let argument of arguments) {
//     total += argument;
//   }
//   console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao(a, b, c, d, e, f) {
//   console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);

// function funcao(a, b = 2, c = 4) {
//   //   b = b || 0;
//   console.log(a + b + c);
// }
// funcao(2, undefined, 20); // Para que ele assuma o valor padrão

// function funcao({ nome, sobrenome, idade }) {
//   console.log(nome, sobrenome, idade);
// }
// funcao({ nome: "Guilherme", sobrenome: "Neves", idade: 26 });

// function funcao([valor1, valor2, valor3]) {
//   console.log(valor1, valor2, valor3);
// }
// funcao(["Guilherme", "Marcos Neves", 26]);

//                                   rest operator
// function conta(operador, acumulador, ...numeros) {
//   for (let n of numeros) {
//     if (operador === "+") acumulador += n;
//     if (operador === "-") acumulador -= n;
//     if (operador === "*") acumulador *= n;
//     if (operador === "/") acumulador /= n;
//   }

//   console.log(acumulador);
// }
// conta("+", 0, 20, 30, 40, 50);

// const conta = function (operador, acumulador, ...numeros) {
//   for (let n of numeros) {
//     if (operador === "+") acumulador += n;
//     if (operador === "-") acumulador -= n;
//     if (operador === "*") acumulador *= n;
//     if (operador === "/") acumulador /= n;
//   }

//   console.log(acumulador);
// };
// conta("+", 0, 20, 30, 40, 50);

// const conta = (...args) => {
//   console.log(args);
// };

// conta("+", 0, 20, 30, 40, 50);

// // return
// // Retorna um valor
// // Termina a função

// function soma(a, b) {
//   return a + b;
// }

// function criaPessoa(nome, sobrenome) {
//   return { nome, sobrenome };
// }
// const p1 = criaPessoa("Guilherme", "Neves");

// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return comeco + " " + resto;
//   }
//   return falaResto;
// }

// const fala = falaFrase("Olá");
// const fraseInteira = fala("mundo!");
// console.log(fraseInteira);

// function criaMultiplicador(multiplicador) {
//   return function (n) {
//     return n * multiplicador;
//   };
// }

// const duplica = criaMultiplicador(2);
// const triplica = criaMultiplicador(3);
// const quadriplica = criaMultiplicador(4);

// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadriplica(2));

// // Escopo léxico
// const nome = "Luiz";

// function falaNome() {
//   console.log(nome);
// }

// function usaFalaNome() {
//   const nome = "Otávio";
//   falaNome();
// }

// usaFalaNome();

// // Closures
// function retornFuncao(nome) {
//   //   const nome = "Luiz";
//   return function () {
//     return nome;
//   };
// }

// const funcao = retornFuncao("Luiz");
// const funcao2 = retornFuncao("Joao");
// console.dir(funcao);
// console.dir(funcao2);

// console.log(funcao(), funcao2());

// // Funções de callback

// function rand(min = 200, max = 1500) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function f1(callback) {
//   setTimeout(function () {
//     console.log("f1");
//     if (callback) callback();
//   }, rand());
// }

// function f2(callback) {
//   setTimeout(function () {
//     console.log("f2");
//     if (callback) callback();
//   }, rand());
// }
// function f3(callback) {
//   setTimeout(function () {
//     console.log("f3");
//     if (callback) callback();
//   }, rand());
// }

// f1(f1Callback);

// function f1Callback() {
//   f2(f2Callback);
// }

// function f2Callback() {
//   f3(f3Callback);
// }

// function f3Callback() {
//   console.log("Olá mundo!");
// }

// // Funções imediatas (IIFE) ou funções auto envocadas
// // IIFE -> Immediately invoked function expression

// (function (idade, peso, altura) {
//   const sobrenome = "Neves";

//   function criaNome(nome) {
//     return nome + " " + sobrenome;
//   }

//   function falaNome() {
//     console.log(criaNome("Guilherme"));
//   }

//   falaNome();
//   console.log(idade, peso, altura);
// })(30, 80, 1.8);

// // Factory function
// function criaPessoa(nome, sobrenome, alt, peso) {
//   return {
//     nome,
//     sobrenome,

//     // Getter
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     },

//     // Setter
//     set nomeCompleto(valor) {
//       valor = valor.split(" ");
//       this.nome = valor.shift();
//       this.sobrenome = valor.join(" ");
//     },

//     fala: function (assunto = "calado") {
//       return `${this.nome} está ${assunto}`;
//     },

//     altura: alt,
//     peso,

//     // Getter
//     get imc() {
//       const indice = this.peso / this.altura ** 2;
//       return indice.toFixed(2);
//     },
//   };
// }

// const p1 = criaPessoa("Luiz", "Miranda", 1.72, 86);
// p1.nomeCompleto = "Guilherme Marcos Neves";
// console.log(p1.nomeCompleto);
// // p1.imc = 30;
// console.log(p1.imc);
// console.log(p1.fala("falando sobre JS"));
// // console.log(p1.fala());

// // Função construtora -> objetos
// // Função fábrica -> objetos
// // Construtora -> Pessoa (new)

// function Pessoa(nome, sobrenome) {
//   // Privados
//   const ID = 123456;

//   const metodoInterno = () => {
//     console.log(`Método interno, ID: ${ID}`);
//   };

//   // Públicos
//   this.nome = nome;
//   this.sobrenome = sobrenome;

//   this.metodo = () => {
//     console.log(`${this.nome}: Sou um médoto`);
//   };
// }

// const p1 = new Pessoa("Luiz", "Otávio");
// const p2 = new Pessoa("Guilherme", "Neves");

// p2.metodo();

// // Função recursiva
// function recursiva(max) {
//   if (max > 100) return;
//   console.log(max);
//   max++;
//   recursiva(max);
// }

// recursiva(0);

// // Funções geradoras (Generator function)
// function* geradora1() {
//   // Código qualquer ...
//   yield "Valor 1";
//   // Código qualquer ...
//   yield "Valor 2";
//   // Código qualquer ...
//   yield "Valor 3";
// }

// const g1 = geradora1();

// for (let valor of g1) {
//   console.log(valor);
// }

// function* geradora2() {
//   let i = 0;
//   while (true) {
//     yield i;
//     i++;
//   }
// }

// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

// function* geradora3() {
//   yield 0;
//   yield 1;
//   yield 2;
// }

// function* geradora4() {
//   yield* geradora3();
//   yield 3;
//   yield 4;
//   yield 5;
// }

// const g4 = geradora4();
// for (let valor of g4) {
//   console.log(valor);
// }

// function* geradora5() {
//   yield function () {
//     console.log("Vim do y1");
//   };

//   // O return encerra a função geradora
//   //   return function () {
//   //     console.log("Vim do return");
//   //   };

//   yield function () {
//     console.log("Vim do y2");
//   };
// }

// const g5 = geradora5();
// const func1 = g5.next().value;
// const func2 = g5.next().value;
// const func3 = g5.next().value;

// func1();
// func2();
// console.log(func3);

// // Revisão de array
// const nomes = ["Eduardo", "Maria", "Joana"];
// // const nomes = new Array("Eduardo", "Maria", "Joana");
// // const novo = [...nomes];
// // novo.pop();
// nomes[2] = "João";
// // delete nomes[2];
// console.log(nomes);

// console.log(nomes.length);

// nomes.push("Marcos");
// console.log(nomes);
// nomes.unshift("Pedro");
// console.log(nomes);

// // const novo = nomes.slice(1, 3);
// const novo = nomes.slice(1, -1);
// console.log(novo);

// const nome = "Guilherme Marcos Neves";
// const nomes = nome.split(" ");
// const nomes = ["Guilherme", "Marcos", "Neves"];
// const nome = nomes.join(" ");
// console.log(nome);

// // Função Splice
// const nomes = ["Pedro", "Eduardo", "Maria", "João", "Marcos"];

// // nomes.splice(índice, deleteQtd, elem1, elem2, elem3);

// // pop
// const removidos = nomes.splice(-1, 1);

// // Add elements
// const removidos = nomes.splice(-2, 2, "Luiz", "Otávio");

// // shift
// const removidos = nomes.splice(0, 1);

// // push
// const removidos = nomes.splice(nomes.length, 0, "Luiz");

// // unshift
// const removidos = nomes.splice(0, 0, "Luiz");

// console.log(nomes, removidos);

// // Concatenando arrays
// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];

// // const a3 = a1.concat(a2, [7, 8, 9], "Guilherme");
// // ... rest or spread operator

// const a3 = [...a1, ...[7, 8, 9], "Guilherme", ...a2];
// console.log(a3);

// // --> Filter -> retorna sempre um array, com a mesma qtd de el ou menos
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, array) {
//   return valor > 10;
// }

// const numerosFiltrados = numeros.filter((e) => e > 10);

// maioresQueDez = [];
// for (let e of numeros) {
//   if (e > 10) maioresQueDez.push(e);
// }

// console.log(maioresQueDez);
// console.log(numerosFiltrados);

// // Retorne as pessoas que tem o nome com 5 letras ou mais
// // Retorne as pessoas com mais de 50 anos
// // Retorne as pessoas cujo nome termina com a
// const pessoas = [
//   { nome: "Luiz", idade: 62 },
//   { nome: "Maria", idade: 23 },
//   { nome: "Eduardo", idade: 55 },
//   { nome: "Letícia", idade: 19 },
//   { nome: "Rosana", idade: 32 },
//   { nome: "Wallace", idade: 47 },
// ];

// pessoasLetras = pessoas.filter((e) => e.nome.length >= 5);
// pessoasFelizes = pessoas.filter((e) => e.idade > 50);
// pessoasComA = pessoas.filter((e) => e.nome.toLowerCase().endsWith("a"));

// console.log(pessoasLetras);
// console.log(pessoasFelizes);
// console.log(pessoasComA);

// // --> Map -> retorna sempre um array, com a mesma qtd de el (altera o array)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// // function callbackFilter(valor, indice, array) {
// //   return valor > 10;
// // }

// const numerosAlterados = numeros.map((e) => e * 2);

// // maioresQueDez = [];
// // for (let e of numeros) {
// //   if (e > 10) maioresQueDez.push(e);
// // }

// // console.log(maioresQueDez);
// console.log(numerosAlterados);

// // Para cada elemento
// // Retorne apenas uma string com o nome da pessoa
// // Remova apenas a chave "nome" do objeto
// // Adicione uma chave id em cada objeto
// const pessoas = [
//   { nome: "Luiz", idade: 62 },
//   { nome: "Maria", idade: 23 },
//   { nome: "Eduardo", idade: 55 },
//   { nome: "Letícia", idade: 19 },
//   { nome: "Rosana", idade: 32 },
//   { nome: "Wallace", idade: 47 },
// ];

// pessoasStrNome = pessoas.map((e) => e.nome);
// pessoasSemNome = pessoas.map((e) => ({ idade: e.idade }));
// pessoasComID = pessoas.map((e, i) => {
//   const newObj = { ...e };
//   newObj.id = (i + 1) * 1000;
//   return newObj;
// });

// console.log(pessoasStrNome);
// console.log(pessoasSemNome);
// console.log(pessoasComID);

// // Reduce -> reduz um array a um número menor de elementos
// // É muito versátil

// // Some todos os números
// // Retorne um array com os pares (Filter)
// // Retorne um array com o dobro dos valores (Map)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const soma = numeros.reduce((acumulator, el) => acumulator + el, 0);

// const pares = numeros.reduce((acumulator, el) => {
//   if (el % 2 === 0) acumulator.push(el);
//   return acumulator;
// }, []);

// const dobro = numeros.reduce((acumulator, el) => {
//   acumulator.push(el * 2);
//   return acumulator;
// }, []);

// console.log(soma);
// console.log(pares);
// console.log(dobro);

// // Retorne a pessoa mais velha
// const pessoas = [
//   { nome: "Luiz", idade: 62 },
//   { nome: "Maria", idade: 23 },
//   { nome: "Eduardo", idade: 55 },
//   { nome: "Letícia", idade: 10 },
//   { nome: "Rosana", idade: 64 },
//   { nome: "Wallace", idade: 63 },
// ];

// const maisVelha = pessoas.reduce((res, obj) =>
//   res.idade < obj.idade ? obj : res
// );

// console.log(maisVelha);

// // Filter + Map + Reduce

// // Retorne a soma do dobro de todos os pares
// // -> Filtar pares
// // -> Dobrar os valores
// // -> Reduzir (somar tudo)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const soma = numeros
//   .filter((e) => e % 2 === 0)
//   .map((e) => e * 2)
//   .reduce((ac, e) => ac + e, 0);

// console.log(soma);

// // forEach -> disponível em arrays

// const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let res = 0;
// a1.forEach((e) => (res += e));
// console.log(res);

// // Revisando objetos
// const pessoa = {
//   nome: "Guilherme",
//   sobrenome: "Otávio",
// };

// const chave = "nome";
// console.log(pessoa[chave]);
// console.log(pessoa.sobrenome);

// const pessoa1 = new Object();
// pessoa1.nome = "Guilherme";
// pessoa1.sobrenome = "Neves";
// pessoa1.idade = 27;

// // pessoa1.falarNome = () => `${this.nome} está falando seu nome.`; // 'this' erro
// pessoa1.falarNome = function () {
//   return `${this.nome} está falando seu nome.`;
// };
// pessoa1.getDataNascimento = function () {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };

// console.log(pessoa1);

// delete pessoa1.nome;
// console.log(pessoa1);
// console.log(pessoa1.falarNome());
// console.log(pessoa1.getDataNascimento());

// for (let i in pessoa1) {
//   console.log(pessoa1[i]);
// }

// Factory functions / Constructor functions / Classes
// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,

//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     },
//   };
// }

// const p1 = criaPessoa("Guilherme Marcos", "Neves");
// console.log(p1.nomeCompleto);

// function Pessoa(nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   Object.freeze(this);

//   // get nomeCompleto() {
//   //   return `${this.nome} ${this.sobrenome}`;
//   // },
// }

// // p1 = (ENDERECO MEMORIA) -> 'Valor'
// const p1 = new Pessoa("Guilherme Marcos", "Neves");
// // Object.freeze(p1);
// p1.nome = "Outra coisa";
// console.log(p1);
