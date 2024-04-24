// 1. Escreva um condicional que verifica se idade é menor que 18. Se for verdadeiro, 
//exiba "Menor de idade", caso contrário, exiba "Maior de idade".
let idade;
idade = 17;
if(idade >= 18){
    console.log ("Maior de Idade");
}else{
    console.log("Menor de Idade")
}
console.log("\n")


//2. Escreva um condicional que verifica se saldoConta é negativo. Se for verdadeiro, 
//exiba "Saldo negativo", caso contrário, exiba "Saldo positivo".

let saldoConta;
saldoConta = 1;
//saldoConta = -1;     //negativo
//saldoConta < 0;      //negativo
//saldoConta > 0;      //positivo   

if (saldoConta < 0){
    console.log("Saldo negativo")
}else{
    console.log("Saldo positivo");
}
console.log("\n")

//3. Use um loop for para exibir os números de 1 a 10 no console.
let numero;
numero = 1;

while(numero <= 10){
    //console.log(numero++ + ", ")
    process.stdout.write(numero++ + ",")
}
console.log("\n")


//4. Use um loop for para exibir os números ímpares de 1 a 10 no console.
let numImpar;
numImpar = 1;

for(i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        console.log(i++)
    }
}
console.log("\n")


//5. Use um loop for para exibir a tabuada do 7 no console (de 1 a 10).
let tabuada;
tabuada = 1;

while(tabuada <= 10){
    console.log("7 x " + tabuada + " = " + 7 * tabuada);
    tabuada++
}
console.log("\n")


//6. Crie uma função chamada ehNegativo que recebe um número como parâmetro e retorna true se for negativo 
//e false se for positivo.
function ehNegativo(numero){
    if(numero > 0){
        return true;
    }else{
        return false;
    }
}
console.log(ehNegativo(5));
console.log(ehNegativo(-4));
console.log("\n")


//7. Crie uma função que receba dois números como parâmetros e retorne a soma deles.
function soma(a = 0, b = 0){ // caso não seja passado o valor de um dos dois, e consta como 0
    return a + b; 
}

const resultado = soma(10, 35);
console.log(resultado);


//8. Crie uma função chamada menorNumero que recebe três números como parâmetros e retorna o menor deles.
function menorNumero(a = 0, b = 0, c = 0){
    return Math.min(a, b, c);
}

const menorzinho = menorNumero(87, 692, 15);
console.log(menorzinho)
console.log("\n");


//9. Escreva uma função que receba um número como parâmetro e retorne verdadeiro se for par e 
//falso caso contrário.
function num(a = 0){
    if(a % 2 == 0){
        return true;
    }else{
        return false;
    }
}

const par = num(49);
console.log(par);
console.log("\n");


//10. Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.
function numFatorial(a) {
    if (a == 0 || a == 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 1; i <= a; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

console.log(numFatorial(5));
console.log(numFatorial(10));
console.log("\n");

//11. Faça um programa que calcule a soma dos números pares de 1 a 100.
function somaPares(){
    let soma = 0;
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            soma +=i;
        }
    }
    return soma;
}

const numbers = somaPares();
console.log(numbers);
console.log("\n");


//12. Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se o primeiro 
//for múltiplo do segundo e falso caso contrário.
function numMultiplos(a = 0, b = 0){
    return a % b === 0;
}

console.log(numMultiplos(15, 5));
console.log(numMultiplos(15, 9));
console.log("\n");


//13. Faça um programa que verifique se um número é negativo, positivo ou zero.
function negativoPositivo0(a){
    if(a < 0){
        return "negativo";
    }else if(a > 0){
        return "Positivo";
    }else{
        return 0;
    }
}

const numeroTals = negativoPositivo0(85);
console.log(numeroTals);

//14. Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se a soma deles for 
//divisível por 5 e falso caso contrário.
function somaVerdadeira(a = 0, b = 0){
    return (a + b) % 5 === 0;
}

console.log(somaVerdadeira(15, 5));


//15. Faça um programa que converta uma temperatura de Celsius para Fahrenheit.
function celsiusFahrenheit(a = 0){
    return(a * 9/5) + 32;
}

console.log(celsiusFahrenheit(18) + " Graus Fahrenheit");



















