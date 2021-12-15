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

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._raton = raton;
        this._monitor = monitor;
        this._teclado = teclado;
    }
    toString(){
        return  `Computadora: ${this._nombre}, ID: ${this._idComputadora} \n${this._monitor.toString()} \n${this._raton.toString()} \n${this._teclado.toString()}`
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._computadoras = new Array();
        this._idOrden = ++ Orden.contadorOrdenes;
    }

    AgregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    MostrarOrden(){
        let computadoras = new String();
        for(let item of this._computadoras){
            computadoras += "\n" + item.toString() + " ";
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadoras}`);
    }


}




let monitor1 = new Monitor("LG", 30);
let monitor2 = new Monitor("Zowie", 24);

let teclado1 = new Teclado("USB", "HyperX");
let teclado2 = new Teclado("Bluetooth", "Duki");

let raton1 = new Raton("USB", "HP");
let raton2 = new Raton("Bluetooth", "Razer");

/*
console.log(monitor1.toString());
console.log(monitor2.toString());
console.log(teclado1.toString());
console.log(teclado2.toString());
console.log(raton1.toString());
console.log(raton2.toString());*/

let computadora1 = new Computadora("Steam Deck",monitor1,teclado1, raton1);
let computadora2 = new Computadora("Nintendo for",monitor2,teclado2, raton2);
console.log(computadora1.toString());
console.log("-----------");
console.log(computadora2.toString());
console.log("***********");
let orden = new Orden();
orden.AgregarComputadora(computadora1);
orden.AgregarComputadora(computadora2);
orden.MostrarOrden();