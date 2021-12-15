class Persona{

    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this.IdPersona = ++Persona.contadorPersonas;
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.Edad = edad;
    }

    get IdPersona(){return this._idPersona;}
    set IdPersona(value){this._idPersona = value;}

    get Nombre(){return this._nombre;}
    set Nombre(value){this._nombre = value;}

    get Apellido(){return this._apellido;}
    set Apellido(value){this._apellido = value;}

    get Edad(){return this._edad;}
    set Edad(value){this._edad = value;}

    toString(){
        return `${this.IdPersona} ${this.Nombre} ${this.Apellido} ${this.Edad}`;
    }
}

class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this.Sueldo = sueldo;
    }

    get IdEmpleado(){return this._idEmpleado;}
    get Sueldo(){return this._sueldo;}
    set Sueldo(value){this._sueldo = value;}

    toString(){
        return super.toString() + " " + this.IdEmpleado + " " + this.Sueldo; 
    }
}

class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorClientes;
        this.FechaRegistro = fechaRegistro;
    }

    get IdCliente(){return this._idCliente;}
    get FechaRegistro(){return this._fechaRegistro;}
    set FechaRegistro(value){this._fechaRegistro = value;}

    toString(){
        return super.toString() + " " + this.IdCliente + " " + this.FechaRegistro; 
    }
}

let p1 = new Persona("Jorge", "Perez", 31);
let e1 = new Empleado("Riboerto", "Gonzalez", 18, 5000);
let c1 = new Cliente("Max", "Rodrigazo", 99, new Date());

console.log(p1.toString());
console.log(e1.toString());
console.log(c1.toString());