class Monitor {

    static contadorMonitores = 0;

    constructor(marca, tamanio){
        this.IdMonitor = ++Monitor.contadorMonitores;
        this.Tamanio = tamanio;
        this.Marca = marca;
    }

    get IdMonitor(){return this._idMonitor;}
    set IdMonitor(value){this._idMonitor = value;}

    get Marca(){return this._marca;}
    set Marca(value){this._marca = value;}

    get Tamanio(){return this._tamanio;}
    set Tamanio(value){this._tamanio = value;}

    toString(){
        return `Monitor: [ID Monitor: ${this.IdMonitor}, tamaño: ${this.Tamanio}, marca: ${this.Marca}]`;
    }
}

let monitor1 = new Monitor("LG", 30);
let monitor2 = new Monitor("Zowie", 24);