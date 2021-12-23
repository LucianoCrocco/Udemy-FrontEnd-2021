let promesa = new Promise((resolver) => {
    setTimeout(() => resolver("Saludos con promesa y timeout"), 1000);
});

promesa.then(valor => console.log(valor));