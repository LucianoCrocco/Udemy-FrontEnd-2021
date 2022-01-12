class Persona{
    constructor(nombre, apellido){
        this.Nombre = nombre;
        this.Apellido = apellido;
    }

    get Nombre(){return this._nombre}
    set Nombre(value){this._nombre = value}
    get Apellido(){return this._apellido}
    set Apellido(value){this._apellido = value}

    toString(){
        return `${this.Nombre} ${this.Apellido}`;
    }
}