
let persona2 = new Persona("Juan","Perez"); //No es posible definir un objeto antes de la clase, no se aplica el concepto de Hoisting.

class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get Nombre(){return this._nombre}
    set Nombre(nombre){this._nombre = nombre};
}

let persona1 = new Persona("Juan","Perez");
console.log(persona1.Nombre);
persona1.Nombre = "Roberto";
console.log(persona1.Nombre);