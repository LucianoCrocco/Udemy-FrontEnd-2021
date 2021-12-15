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