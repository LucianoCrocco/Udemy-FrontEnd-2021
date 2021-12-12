//Declarar una variable
let autos = new Array("BWM", "Mercedes Benz", "Volvo");
console.log(autos);
const autosDos = ["Ferrari", "McLaren", "Alfa Romeo"];
console.log(autosDos);

//Acceder a los elementos
console.log(autosDos[2]);

for(let i = 0; i< autosDos.length; i++){
    console.log(i + " : " + autosDos[i]);
}

//Modificar los elementos.
autosDos[2] = "Toyota";
autosDos.push("Aston Martin");
for(let i = 0; i< autosDos.length; i++){
    console.log(i + " : " + autosDos[i]);
}

//Otras formas de agregar elementos
let indiceSiguiente = autosDos.length;
autosDos[indiceSiguiente] = "Audi";
for(let i = 0; i< autosDos.length; i++){
    console.log(i + " : " + autosDos[i]);
}

autosDos[6] = "Lamborghini";
for(let i = 0; i< autosDos.length; i++){
    console.log(i + " : " + autosDos[i]);
}

//Preguntar si es un Array
console.log(typeof(autosDos));
console.log(Array.isArray(autosDos));
console.log(autosDos instanceof Array);