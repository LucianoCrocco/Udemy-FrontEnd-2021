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
let empleado1 = new Empleado("Rodrigo", 200, "Empleado");
console.log(empleado1.ObtenerDetalles());
let gerente1 = new Gerente("Juan", 50000, "Finanzas");
console.log(gerente1.ObtenerDetalles());