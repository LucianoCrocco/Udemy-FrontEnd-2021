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

//funcionPromesaYAway();

async function funcionPromesaAwayTimeout(){
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver("Promesa con Away y Timeout"),1000)
    });

    console.log(await miPromesa);
    console.log("Fin función");
}

funcionPromesaAwayTimeout();
