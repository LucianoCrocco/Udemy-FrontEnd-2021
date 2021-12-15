class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this.TipoEntrada = tipoEntrada;
        this.Marca = marca;
    }

    get TipoEntrada(){return this._tipoEntrada;}
    set TipoEntrada(value){this._tipoEntrada = value;}

    get Marca(){return this._marca;}
    set Marca(value){this._marca = value;}
}