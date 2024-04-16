let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))

let soma = num1 + num2
let sub = num1 - num2
let multi = num1 * num2
let div = num1 / num2
let mod = num1 % num2

alert("A soma dos dois números é: " + soma)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + multi)
alert("A divisão dos dois números é: " + div)
alert("O resto da divisão dos dois números é: " + mod)

if((num1 + num2) % 2 == 0) {
    alert("A soma dos dois números é par: " + soma)
}
else {
    alert("A soma dos dois números é ímpar: " + soma) 
}

if(num1 == num2) {
    alert("Os números são iguais")
}
else {
    alert("Os números são diferentes")
}
