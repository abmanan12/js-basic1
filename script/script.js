
document.getElementById("alertName").onclick = function () {
    alert("Abdul Manan")
    document.getElementById("statement").innerHTML = 'alert("Abdul Manan")'
    document.getElementById("output").innerHTML = ''
}

document.getElementById("alertNumber").onclick = function () {
    alert("0123, ... ,n")
    document.getElementById("statement").innerHTML = 'alert("0123, ... ,   n")'
    document.getElementById("output").innerHTML = ''
}

document.getElementById("showVariablesNames").onclick = function () {
    document.getElementById("statement").innerHTML = "<ul><li>A variable name can't contain any spaces</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example, userAlert and myVar are legal.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example, userAlert and myVar are legal.</li></ul>"
    document.getElementById("output").innerHTML = ''
}

document.getElementById("showcamelCaseExample").onclick = function () {
    document.getElementById("statement").innerHTML = "<ul><li>userResponse</li><li>userResponseTime</li><li>userResponseTimeLimit</li><li>response</li></ul>"
    document.getElementById("output").innerHTML = ''
}

let num1 = 33;
let num2 = 12;
let sum = num1 + num2;



document.getElementById("sum2Numbers").onclick = function () {
    let Addition = "let num1 = " +num1+ ";<br> let num2 = " +num2+ ";<br> let sum = " +num1+ "+" +num2+ ";"
    document.getElementById("statement").innerHTML = Addition
    document.getElementById("output").innerHTML = sum

}

let sub = num1 - num2;
document.getElementById("subtract2Numbers").onclick = function () {
    let Subtriction = "let num1 = " +num1+ ";<br> let num2 = " +num2+ ";<br> let sub = " +num1+ "-" +num2+ ";"
    document.getElementById("statement").innerHTML = Subtriction
    document.getElementById("output").innerHTML = sub

}

let mul = num1 * num2;
document.getElementById("multiply2Numbers").onclick = function () {
    let Multiply = "let num1 = " +num1+ ";<br> let num2 = " +num2+ ";<br> let mul = " +num1+ "*" +num2+ ";"
    document.getElementById("statement").innerHTML = Multiply
    document.getElementById("output").innerHTML = mul
}

let div = num1 / num2;
document.getElementById("divide2Numbers").onclick = function () {
    let Division = "let num1 = " +num1+ ";<br> let num2 = " +num2+ ";<br> let div = " +num1+ "/" +num2+ ";"
    document.getElementById("statement").innerHTML = Division
    document.getElementById("output").innerHTML = div
}

let calculation = 49 / 7 + 3 ** 2 - (3 * 4) 
document.getElementById("calculateSomeNumbers").onclick = function () {
    document.getElementById("statement").innerHTML = "let calculation = 49 / 7 + 3 ** 2 - (3 * 4)"
    document.getElementById("output").innerHTML = calculation
}

document.getElementById("clearStatement").onclick = function () {
    document.getElementById("statement").innerHTML = ''
}

document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output").innerHTML = ''
}