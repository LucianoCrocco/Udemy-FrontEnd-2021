class Persona {
    constructor(nombre, apellido){
        this.Nombre = nombre;
        this.Apellido = apellido;
    }

    get Nombre(){return this._nombre}
    set Nombre(nombre){this._nombre = nombre};

    get Apellido(){return this._apellido}
    set Apellido(apellido){this._apellido = apellido};

    NombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get Departamento(){return this._departamento}
    set Departamento(departamento){this._departamento = departamento};
}

let persona1 = new Persona("Juan","Perez");
console.log(persona1);
console.log(persona1.NombreCompleto());

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1);
console.log(empleado1.NombreCompleto());