"use strict";

try{
    //x = 10;
    throw "Variable no declarada";
} catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}finally{
    console.log("El programa continua");
}