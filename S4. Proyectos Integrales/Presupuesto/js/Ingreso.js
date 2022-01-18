class Ingreso extends Dato{
    static contadorIngresos = 0;
    
    constructor(descripcion, valor){
        super(descripcion, valor);
        this.Id = ++Ingreso.contadorIngresos;
    }
    
    set Id(value){this._id = value;}
    get Id(){return this._id;}
}