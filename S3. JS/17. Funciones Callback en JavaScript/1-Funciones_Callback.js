//Funcion normal
function miFuncion1(){
    console.log("Función 1");
}
function miFuncion2(){
    console.log("Función 2");
}

miFuncion2();
miFuncion1();

//Una forma
function Imprimir(mensaje){
    console.log(mensaje);
}
//Otra forma
let imp = function Imprimir(mensaje){
    console.log(mensaje);
}
//Funcion de tipo callback
function Sumar(op1, op2, funcionCallBack) {
    funcionCallBack("Resultado: " + (op1 + op2));
}

Sumar(5,5,Imprimir);
Sumar(5,5,imp);