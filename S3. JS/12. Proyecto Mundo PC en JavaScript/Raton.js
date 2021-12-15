class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return `Raton: [ID raton: ${this._idRaton}, tipo de entrada: ${this.TipoEntrada}, marca: ${this.Marca}]`;
    }
}

let raton1 = new Raton("USB", "HP");
let raton2 = new Raton("Bluetooth", "Razer");