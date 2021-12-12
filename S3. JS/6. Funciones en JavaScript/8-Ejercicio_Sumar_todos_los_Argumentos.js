function SumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
       suma += arguments[i]; 
    }
    return suma;
}

let resultado = SumarTodo(5,4,13,10,9);

console.log(resultado);