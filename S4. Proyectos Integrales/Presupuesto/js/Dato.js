class Dato{
    constructor(descripcion, valor){
        this.Descripcion = descripcion;
        this.Valor = valor;
    }

    set Descripcion(value){this._descripcion = value;}
    get Descripcion(){return this._descripcion;}
    set Valor(value){this._valor = value;}
    get Valor(){return this._valor;}
}