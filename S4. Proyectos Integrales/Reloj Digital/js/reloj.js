const mostrarReloj = () => {
    let fecha = new Date();
    let hour = formatoHora(fecha.getHours());
    let minutes = formatoHora(fecha.getMinutes());
    let seconds = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hour}:${minutes}:${seconds}`;

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let diaSemana = dias[fecha.getDay()];
    let diaNumerico = fecha.getDay();
    let mesNumerico = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${diaNumerico} ${mesNumerico}`;
    document.getElementById("fecha").innerHTML = fechaTexto;

    document.getElementById("contenedor").classList.toggle("animar");
}

const formatoHora = (hora) => {
    if(hora < 10){
        hora = '0'+ hora;
    }
    return hora;
}

setInterval(mostrarReloj,1000);