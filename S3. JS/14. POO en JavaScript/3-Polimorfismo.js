class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    ObtenerDetalles(){return `Empleado: ${this.nombre} - Sueldo: ${this.sueldo}`}
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    ObtenerDetalles(){return `${super.ObtenerDetalles()} - Departamento: ${this.departamento}`};
}

function Imprimir(tipo){
    console.log(tipo.ObtenerDetalles());
}

let empleado1 = new Empleado("Rodrigo", 200, "Empleado");
let gerente1 = new Gerente("Juan", 50000, "Finanzas");

Imprimir(empleado1);
Imprimir(gerente1);