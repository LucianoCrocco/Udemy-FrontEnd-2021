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

let producto1 = new Producto("Pantalón", 200);
let producto2 = new Producto("Camisa", 100);

console.log(producto1.toString());
console.log(producto2.toString());
