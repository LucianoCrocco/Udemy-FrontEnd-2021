let reloj = () => {
    let flecha = new Date();
    console.log(`${flecha.getHours()}:${flecha.getMinutes()}:${flecha.getSeconds()}`);
}

setInterval(reloj,1000);