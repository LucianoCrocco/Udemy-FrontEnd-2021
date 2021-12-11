let mes = 12;
let estacion;

switch(mes) {
    case 12: case 1: case 2: case 3:
        estacion = "Verano";
        break;
    case 4: case 5: case 6:
        estacion = "Otoño";
        break;
    case 7: case 8: case 9:
        estacion = "Inverno";
        break;  
    case 10: case 11:
        estacion = "Primavera"
        break;
    default:
        estacion = "Valor incorrecto";
        break;
}

console.log(estacion);