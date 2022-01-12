const personas = new Array(new Persona("Juan","Perez"), new Persona("Karla", "Lara"), new Persona("Maria", "Juarez"));

function mostrarPersonas(){
    let texto = "";
    for(let item of personas){
        texto += `<li>${item.toString()}</li>`
    }
    document.getElementById("personas").innerHTML = texto;
}

function agregarPersona(){

    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];

    if(nombre.value.length > 0 && apellido.value.length > 0){
        let persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    } else{
        alert("Ingrese correctamente los campos.");
    }
}