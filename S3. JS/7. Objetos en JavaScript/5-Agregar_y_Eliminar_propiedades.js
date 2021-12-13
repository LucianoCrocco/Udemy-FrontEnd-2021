let persona = {
    nombre : "Juan",
    apellido : "Perez",
    email : "jperez@mail.com",
    edad : 28,
    nombreCompleto : function(){return this.nombre + " " + this.apellido}
}

persona.telefono = "55443322";
delete persona.telefono