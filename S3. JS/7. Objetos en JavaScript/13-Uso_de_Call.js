let persona1 = {
    nombre : "Juan",
    apellido : "Perez",
    NombreCompleto : function() {return this.nombre + ' ' + this.apellido}
}

let persona2 = {
    nombre : "Carlos",
    apellido : "Lara",
}

//Uso de Call
console.log(persona1.NombreCompleto());
console.log(persona1.NombreCompleto.call(persona2));