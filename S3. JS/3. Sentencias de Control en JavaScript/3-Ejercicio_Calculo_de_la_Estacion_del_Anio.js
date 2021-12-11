let mes = 12;
let estacion;

if(mes == 12 || (mes >= 1 && mes <= 3)){
    estacion = "Verano"
} else if(mes >= 4 && mes <= 6){
    estacion = "Otoño"
} else if( mes >= 7 && mes <= 9){
    estacion = "Invierno"; 
} else if (mes >= 10 && mes <= 11){
    estacion = "Primavera";
} else {
    console.log("Valor incorrecto");
}

console.log(estacion);