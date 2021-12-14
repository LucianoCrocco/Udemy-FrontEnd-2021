class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido){
        this.Nombre = nombre;
        this.Apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){//Se deberia hacer con excepciones, lo hago como en el video.
            this._idPersona = ++Persona.contadorPersonas;
        } else {
            console.log("No se pueden cargar mas personas");
        }
    }

    get Nombre(){return this._nombre}
    set Nombre(nombre){this._nombre = nombre};

    get Apellido(){return this._apellido}
    set Apellido(apellido){this._apellido = apellido};

    NombreCompleto(){
        return "ID: " + this._idPersona + ". " +this._nombre + " " + this._apellido;
    }

    toString(){
        return this.NombreCompleto();
    }

    static saludar(){console.log("Saludos desde mi metodo estatico");}
    static saludarPersona(persona){console.log(persona.toString());}

    static get MAX_OBJ(){return 1;}

}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get Departamento(){return this._departamento}
    set Departamento(departamento){this._departamento = departamento};

    NombreCompleto(){ return super.NombreCompleto() + " " + this._departamento}
}

let persona1 = new Persona("Juan","Perez");
console.log(persona1.toString());

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1.toString());

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);
