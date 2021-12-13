function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.NombreCompleto = function(){return this.nombre + " " + this.apellido};
}

Persona.prototype.tel;

let padre = new Persona("Juan", "Perez", "jperez@mail.com");
console.log(padre.NombreCompleto() + " " + padre.tel);
padre.tel = "443322";
console.log(padre.NombreCompleto() + " " + padre.tel);