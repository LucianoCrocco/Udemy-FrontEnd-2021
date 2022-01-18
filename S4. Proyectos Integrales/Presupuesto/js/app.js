/*Datos Hardcodeados*/
const ingresos = [new Ingreso("TESTING", 20000)];
const egresos = [new Egreso("TESTING", 2000)];

/*Metodos carga de APP, calculo TOTAL de ingresos y egresos*/
let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};

let totalIngresos = () => {
    let totalIngresos = 0;
    for(let item of ingresos){
        totalIngresos += item.Valor;
    }
    return totalIngresos;
}


let totalEgresos = () => {
    let totalEgresos = 0;
    for(let item of egresos){
        totalEgresos += item.Valor;
    }
    return totalEgresos;
}

let cargarCabecero = () => {
    document.getElementById("presupuesto").innerHTML = formatoMoneda(totalIngresos() - totalEgresos());
    if(egresos.length == 0){
        document.getElementById("porcentaje").innerHTML = formatoPorcentaje(0);
    } else{
        document.getElementById("porcentaje").innerHTML = formatoPorcentaje(totalEgresos() / totalIngresos());
    }
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}

/*Dar formato al valores HTML*/
const formatoMoneda = (valor) => {
    return valor.toLocaleString("es-AR",{style:"currency", currency:"ARS", minimumFractionDigits:2});
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString("es-AR",{style:"percent", minimumFractionDigits:2});
}


/*Carga de datos de la lista JS al HTML*/
const cargarIngresos = () => {
    let ingresosHTML = "";
    for(let item of ingresos){
        ingresosHTML += crearIngresoHTML(item);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.Descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.Valor)}</div>
        <div class="elemento_porcentaje positivo">${formatoPorcentaje(ingreso.Valor / totalIngresos())}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.Id})"></ion-icon>
            </button>
        </div>
    </div>
    </div>
    `;
    return ingresoHTML;
}

const cargarEgresos = () => {
    let egresosHTML = "";
    for(let item of egresos){
        egresosHTML += crearEgresoHTML(item);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.Descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso.Valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.Valor / totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.Id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
}

/*Modificacion dinamica de los elementso dentro de la lista de ingresos y egresos*/
const eliminarIngreso = (id) => {
    let indexEliminar = ingresos.findIndex(ingreso => ingreso.Id === id);
    ingresos.splice(indexEliminar, 1);
    cargarApp();
}

const eliminarEgreso = (id) => {
    let indexEliminar = egresos.findIndex(egreso => egreso.Id === id);
    egresos.splice(indexEliminar, 1);
    cargarApp();
}

/*Formulario carga de Ingreso y Egreso.*/
let agregarDato = () => {
    let formulario = document.forms["formulario_ingreso-egreso"];
    let tipo = formulario["tipo"];
    let descripcion = formulario["form_descripcion"]
    let valor = formulario["form_valor"]

    if(descripcion.value !== '' && valor.value !== '' && Number(valor.value) > 0){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, Number(valor.value)));
        } else if (tipo.value === "egreso"){
            egresos.push(new Egreso(descripcion.value, +valor.value));
        }
    }

    cargarApp();
}
