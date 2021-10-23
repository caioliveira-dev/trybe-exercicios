// Programas dos exercicios

// 1.1 - Adição

function plus(a,b) {
    return a + b;
}

// 1.2 - Subtração

function minus(a,b) {
    return a - b;
}

// 1.3 Multiplicação

function multiply(a,b) {
    return a * b;
}

// 1.4 - Divisão

function divide(a,b) {
    return a / b;
}

// 2 - Modulo Restore

function modres(a,b) {
    return a % b;
}

// 3 - Comparação de maior numero

function compMaior(a, b) {
    if (a < b) {
        return b;
    } else {
        return a;
    }
}

// 4 - Compara 3 numeros e retorna o maior

function compLexa(a, b, c) {
    let v;
    if(a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

// 5 - Comparação de anglos de um triangulo

function isTriAngle(a, b, c) {
    tf = false;
    if((a > 0) && (b > 0) && (c > 0)) {
        let vd = (a + b + c)
        if (vd === 180) {
            tf = true;
        } 
    } else {
        return 'Esse Não é Kinder'
    }
    return tf;
}

// 6 - Programa para saber a movimentação da peça de xadrez

function chessMove(a) {
    var pecas = {
        rei : 'Se movimenta uma casa para qualquer lado',
        dama : 'Se movimenta quantas casas quiser para qualquer lado',
        bispo : 'Se movimenta quantas casas quiser mas somente em diagonal',
        cavalo: 'Se movimenta em L, ex eixo x 1 && eixo y 3',
        torre : 'Se movimenta quantas casas quiser mas somente em linha reta',
        peao : 'Se movimenta duas casas em linha reta'
    }
    let r = a.toLowerCase();
    return pecas[r]; 
}

// 7 - Conversão de nota numeral para alfabetica
function numAF(a) {
    if (a < 50 && a >=0){ return 'F'}
    if (a >= 50 && a < 60){ return 'E'}
    if (a >= 60 && a < 70){ return 'D'}
    if (a >=70 && a < 80){ return 'C'}
    if (a >= 80 && a < 90){ return 'B'}
    if (a >= 90 && a <= 100){ return 'A'}
    return 'fora da media'
}

// 8 - Verifica entre 3 numeros se temos par

function verPar (a, b, c) {
    if ((a % 2 == 0) || (b % 2 == 0) || (c % 2 == 0)){ return true}else{ return false}
}

// 9 - Verifica entre 3 numeros se temos impar

function verImpar (a, b, c) {
    if ((a % 3 == 0) || (b % 3 == 0) || (c % 3 == 0)){ return true}else{ return false}
}

// 10 - checar o lucro a partir de um custo com imposto de 20 %

function lucrolique (a, b, t) {
    var l;
    if(a > 0 && b > 0){ 
        a = a + (a * 0.2);
        l = b - a;
    } else {
        return 'valor inadequado'
    }
    l = l * t;
    return l;
}

// 11 - Calcule Salario liquido dado um Bruto Bruto - INSS - IR

function INSS(a){
    if (a <= 1556.94){ return a -(a * 0.08)}
    if (a <= 2594.92){ return a -(a * 0.09)}
    if (a <= 5189.82){ return a -(a * 0.11)}
    if (a > 5189.82){ return a - 570,88}
}

function IR(a){
    a = INSS(a);
    if (a > 1903.98 && a <= 2826.65){ return (a * 0.075) - 142.80;}
    if (a <= 3751.05) { return (a * 0.15) - 354.80}
    if (a <= 4664.68) { return (a * 0.225) - 636.13}
    if (a > 4664.80) {return (a * 0.275) - 869.36}
    return 0;
}
function salLiq(a){
    return INSS(a) - IR(a);
}

a = 3000;
console.log(salLiq(a));