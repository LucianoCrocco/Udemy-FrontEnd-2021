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