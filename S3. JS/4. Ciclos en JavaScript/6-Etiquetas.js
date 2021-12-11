Inicio:
for(let contador = 0; contador <= 10; contador ++){
    if(contador % 2 !== 0){
        continue Inicio;
    }
    console.log(`${contador} es numero par`);
}