let miNumero = "10";
console.log("Antes de la conversion: " + typeof(miNumero));

let edad = Number.parseInt(miNumero);
console.log("Despues de la conversion: " + typeof(edad));

if(edad >= 18){
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}
//O
let resultado = edad >= 18 ? "Puede votar" : "No puede votar";
console.log(resultado);