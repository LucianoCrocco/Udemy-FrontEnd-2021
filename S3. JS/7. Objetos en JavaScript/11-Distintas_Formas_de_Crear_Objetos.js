function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.NombreCompleto = function(){return this.nombre + " " + this.apellido};
}

let miObjeto = new Object();
let miObjeto2 = {};
let miCadena = new String("Hola");
let miCadena2 = "Hola";
let miNumero = new Number(10);
let miNumero2 = 10;
let miBoolean = new Boolean(false);
let miBoolean2 = false;
let miArray = new Array();
let miArray2 = [];
let miFuncion = new Function();
let miFuncion2 = function(){};