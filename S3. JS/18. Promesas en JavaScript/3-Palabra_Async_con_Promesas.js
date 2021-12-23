//Async indiica que una funcion regresa una promesa.    

async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

miFuncionConPromesa().then(valor =>console.log(valor));