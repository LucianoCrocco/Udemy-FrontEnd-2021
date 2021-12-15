class Producto{

    static contadorProductos = 1;

    constructor(nombre, precio){
        this.Nombre = nombre;
        this.Precio = precio;
        this._idProducto = Producto.contadorProductos++;
    }

    get IdProducto(){return this._idProducto;}

    get Nombre(){return this._nombre;}
    set Nombre(value){this._nombre = value;}

    get Precio(){return this._precio;}
    set Precio(value){this._precio = value;}

    toString(){
        return `Id producto: ${this.IdProducto}, nombre: ${this.Nombre}, precio: ${this.Precio}`;
    }
}

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

let producto1 = new Producto("Pantalón", 200);
let producto2 = new Producto("Camisa", 100);

console.log(producto1.toString());
console.log(producto2.toString());

let orden = new Orden();

orden.AgregarProducto(producto1);
orden.AgregarProducto(producto2);

console.log("Total precio: " + orden.CalcularTotal());
orden.MostrarOrden();