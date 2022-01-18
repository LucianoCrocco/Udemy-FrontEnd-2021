class Egreso extends Dato{
    static contadorEgresos = 0;
    
    constructor(descripcion, valor){
        super(descripcion, valor);
        this.Id = ++Egreso.contadorEgresos;
    }
    
    set Id(value){this._id = value;}
    get Id(){return this._id;}
}