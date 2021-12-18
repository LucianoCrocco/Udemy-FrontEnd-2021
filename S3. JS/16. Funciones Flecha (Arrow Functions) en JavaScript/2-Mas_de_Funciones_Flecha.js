let miFuncionFlecha = ()=>{console.log("Saludos desde mi funcion flecha");}
miFuncionFlecha();

const miFuncionFlecha2 = () => console.log("Mi funcion flecha sin los simbolos {}");
miFuncionFlecha2();

const miFuncionFlecha3 = () => "Mi funcion flecha sin return";
console.log(miFuncionFlecha3());

const regresaObjeto = () => ({nombre:"Juan", apellido :"Perez"})
console.log(regresaObjeto());

const saludar = (saludo) => console.log(saludo);
saludar("Hola");

let sumar = (a,b) => {return a+b;};
console.log(sumar(2,5));

let sumarSinParametros = (a,b) => a+b;
console.log(sumarSinParametros(2,5));