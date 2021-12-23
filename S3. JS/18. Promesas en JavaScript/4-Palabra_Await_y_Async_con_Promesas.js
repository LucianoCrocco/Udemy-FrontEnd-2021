async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

//miFuncionConPromesa().then(valor =>console.log(valor));

//async/await
async function funcionPromesaYAway(){
    let miPromesa = new Promise(resolver =>{
        resolver("Promesa con await");
    });

    console.log(await miPromesa);
}

funcionPromesaYAway();