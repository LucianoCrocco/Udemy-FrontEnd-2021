let persona = {
    nombre : "Juan",
    apellido : "Perez",
    email : "jperez@mail.com",
    edad : 28,
    nombreCompleto : function(){return this.nombre + " " + this.apellido}
}

console.log(persona.nombreCompleto());