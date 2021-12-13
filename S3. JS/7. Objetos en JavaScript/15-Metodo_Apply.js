let persona1 = {
    nombre : "Juan",
    apellido : "Perez",
    NombreCompleto : function(titulo, tel) {
        return titulo + ": " + this.nombre + ' ' + this.apellido + " " + tel;
    }
}

let persona2 = {
    nombre : "Carlos",
    apellido : "Lara",
}

//Uso de Apply

console.log(persona1.NombreCompleto("Licenciado", "1233345"));
let array = ["Ingeniero", "323322"];
console.log(persona1.NombreCompleto.apply(persona2, array));