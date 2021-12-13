let persona = new Object();
persona.nombre = "Juan";
persona.apellido = "Perez";
persona.email = "jperez@mail.com";
//A traves del .
console.log(persona.nombre);
//A traves de []
console.log(persona['nombre']);
//Recorrer las propiedades como si fuese una matriz
for(propiedades in persona){
    console.log(persona);
    console.log(persona[propiedades]);
}