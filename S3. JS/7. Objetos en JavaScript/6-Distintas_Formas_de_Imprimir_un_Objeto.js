let persona = {
    nombre : "Juan",
    apellido : "Perez",
    email : "jperez@mail.com",
    edad : 28,
    nombreCompleto : function(){return this.nombre + " " + this.apellido}
}

//Concatenar cada valor de cada propiedad.
console.log(persona.nombre + " " + persona.apellido);
//Con for in
for(propiedad in persona){
    console.log(persona[propiedad]);
}
//Con metodos de object
let string = Object.values(persona);
console.log(string);
//Con JSON
string = JSON.stringify(persona);
console.log(string);