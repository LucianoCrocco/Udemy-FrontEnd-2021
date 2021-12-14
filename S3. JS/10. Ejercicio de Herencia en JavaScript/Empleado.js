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