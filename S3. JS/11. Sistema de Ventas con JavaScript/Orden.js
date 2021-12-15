class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){return 5;}

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = new Array();
        this._contadorProductosAgregados = 0;
    }

    get IdOrden(){return this._idOrden;}

    AgregarProducto(producto){
        if(this._contadorProductosAgregados < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
           //this._productos[this._contadorProductosAgregados++] = producto; Otra manera, como en C
           this._contadorProductosAgregados++;
        } else {
            console.log("No se pueden agregar más productos");
        }
    }

    CalcularTotal(){
        let totalVenta = 0;
        for(let item of this._productos){
            totalVenta += item.Precio;
        }
        return totalVenta;
    }

    MostrarOrden(){
        let productoOrden = new String();
        for(let item of this._productos){
            productoOrden += item.toString() + " ";
        }
        console.log(`Orden ${this._idOrden}, Total: ${this.CalcularTotal}, Productos: ${productoOrden.toString()}`);
    }
}