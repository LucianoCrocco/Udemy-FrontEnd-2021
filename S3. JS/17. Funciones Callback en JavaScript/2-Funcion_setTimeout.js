//Lamadas asíncronas con el uso de la función setTimeout
function miFuncion(){
    console.log("Función 1");
}

function miFuncionCallback(){
    console.log("Saludo asincrono después de 3 segundos");
}

setTimeout(miFuncionCallback,3000);
miFuncion();
setTimeout(function(){console.log("Saludo asincrona 2")},1000);