function sumar(){
    let operandoA = parseInt(document.getElementById("operandoA").value);
    let operandoB = parseInt(document.getElementById("operandoB").value);
    let resultado = operandoA + operandoB;
    if(isNaN(operandoA) || isNaN(operandoB)){
        document.getElementById("resultado").innerHTML = `No se proporcionaron numeros validos`;
    } else {
        document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    }
    
}