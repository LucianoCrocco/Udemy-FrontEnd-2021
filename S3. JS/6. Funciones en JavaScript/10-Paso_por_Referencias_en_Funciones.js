const persona = {
    nombre : "Juan",
    apellido : "Perez"
}

function cambiarValorObjeto (p1){
    p1.nombre = "Roberto";
    p1.apellido = "Genichiro";
}

console.log(persona.nombre + " " + persona.apellido);
cambiarValorObjeto(persona);
console.log(persona.nombre + " " + persona.apellido);