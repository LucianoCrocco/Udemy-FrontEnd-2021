let persona = {
    nombre : "Juan",
    apellido : "Perez",
    email : "jperez@mail.com",
    edad : 28,
    idioma : 'es',
    get Language(){
        return this.idioma.toUpperCase();
    },
    set Language(lang) {
        this.idioma = lang.toUpperCase();
    },
    get NombreCompleto (){return this.nombre + " " + this.apellido}
}

console.log(persona.Language);
persona.Language = "en";
console.log(persona.Language);