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

