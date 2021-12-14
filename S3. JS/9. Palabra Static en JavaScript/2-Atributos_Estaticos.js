class Persona {
    constructor(nombre, apellido){
        this.Nombre = nombre;
        this.Apellido = apellido;
        Persona.contadorObjetosPersona++;
    }

    get Nombre(){return this._nombre}
    set Nombre(nombre){this._nombre = nombre};

    get Apellido(){return this._apellido}
    set Apellido(apellido){this._apellido = apellido};

    NombreCompleto(){
        return this._nombre + " " + this._apellido;
    }

    toString(){
        return this.NombreCompleto();
    }

    static saludar(){console.log("Saludos desde mi metodo estatico");}
    static saludarPersona(persona){console.log(persona.toString());}

    static contadorObjetosPersona = 0;
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

Persona.saludar();
Persona.saludarPersona(persona1);

Empleado.saludar();
Empleado.saludarPersona(empleado1);

console.log(Persona.contadorObjetosPersona);