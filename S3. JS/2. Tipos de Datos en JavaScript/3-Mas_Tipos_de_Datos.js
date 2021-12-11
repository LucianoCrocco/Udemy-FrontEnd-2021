//Bool
var bandera = true;
console.log("\tBooleanos");
console.log(bandera);
console.log(typeof(bandera));

//Function
console.log("\n\tFunciones");
function miFuncion(string){
    console.log(string);
}
miFuncion("Hola");
console.log(typeof(miFuncion));

//Symbol
console.log("\n\tSimbolos");
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof(simbolo));

//Clases
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
var p1 = new Persona("Luciano","Crocco");
console.log("\n\tClases");
console.log(p1.nombre, p1.apellido);
console.log(typeof(p1));
console.log(typeof(Persona));

//undefined
console.log("\n\tUndefined");
var x;
console.log(typeof(x));