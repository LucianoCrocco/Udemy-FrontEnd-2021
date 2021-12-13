let persona1 = {
    nombre : "Juan",
    apellido : "Perez",
    NombreCompleto : function(titulo, tel) {return titulo + ": " +this.nombre + ' ' + this.apellido + " " + tel}
}

let persona2 = {
    nombre : "Carlos",
    apellido : "Lara",
}

//Uso de Call
console.log(persona1.NombreCompleto("Licenciado", "1233345"));
console.log(persona1.NombreCompleto.call(persona2, "Ingeniero", "323322"));