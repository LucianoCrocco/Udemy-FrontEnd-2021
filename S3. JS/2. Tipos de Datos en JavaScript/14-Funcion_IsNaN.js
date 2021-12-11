let miNumero = "18x";
let edad = Number.parseInt(miNumero);

if(isNaN(miNumero)){
    console.log("El valor no se puede convertir porque no es un numero");
} else {
    let resultado = edad >= 18 ? "Puede votar" : "No puede votar";
    console.log(resultado);
}