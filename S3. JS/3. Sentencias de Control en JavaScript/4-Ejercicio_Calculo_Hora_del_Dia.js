
let hora = 24;

if(hora < 0 || hora > 24){
    console.log("Horario incorrecto");
} else {
    if(hora >= 0 && hora <= 6){
        console.log("Durmiendo");
    } else if(hora > 6 && hora <= 12){
        console.log("Buenos Dias");
    } else if(hora > 12 && hora <= 18){
        console.log("Buenas Tardes");
    } else {
        console.log("Buenas Noches");
    }
}