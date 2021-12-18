//Funcion trabajadas hasta ahora
function miFuncionClasica(){console.log("Saludos desde mi funcion Clasica");}
let miFuncionExpresion = function(mensaje){console.log(mensaje);};

miFuncionClasica();
let saludar = miFuncionExpresion("Saludos desde mi funcion Expresion");
(function () { console.log("Saludos desde mi funcion Self Invoking");})();

//Funcion Flecha
let miFuncionFlecha = ()=>{console.log("Saludos desde mi funcion flecha");}
miFuncionFlecha();