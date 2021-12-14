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