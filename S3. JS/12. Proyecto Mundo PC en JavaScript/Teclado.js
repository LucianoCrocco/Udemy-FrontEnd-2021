class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString(){
        return `Teclado: [ID teclado: ${this._idTeclado}, tipo de entrada: ${this.TipoEntrada}, marca: ${this.Marca}]`;
    }
}

let teclado1 = new Teclado("USB", "HyperX");
let teclado2 = new Teclado("Bluetooth", "Duki");