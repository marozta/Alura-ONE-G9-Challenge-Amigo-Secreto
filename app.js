// declaración del array listaAmigos que contendrá los nombres de los amigos
const listaAmigos = [];

function agregarAmigo() {
    //capturar el valor del campo de entrada del elemento
    const inputAmigo = document.getElementById("amigo");
    //validar que se haya ingresado un nombre y el campo no esté vacio.
    if (!inputAmigo.value) {
        alert("Por favor, ingrese un nombre.");
        return;
    }
    //validar que el nombre sea único y no este duplicado.
    if (listaAmigos.includes(inputAmigo.value.trim())) {
        alert("Este nombre ya fue agregado, ingresa otro distinto.");
        // Limpiar el campo de ingreso de nombres
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }
    //Agregar a la lista de amigos
    listaAmigos.push(inputAmigo.value);
    //Limpiar campo de entrada, reestableciendo el campo a vacio
    inputAmigo.value = "";
    inputAmigo.focus();
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    //seleccionar la lista donde se mostrarán los amigos
    const mostrarAmigos = document.getElementById("listaAmigos");
    // Limpiar la lista existente
    mostrarAmigos.innerHTML = "";
    // Recorrer el arreglo amigos y crear elementos de lista (<li>) para cada nombre.
    for (let i = 0; i < listaAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.textContent = listaAmigos[i];
        //Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
        mostrarAmigos.appendChild(itemLista);
    }
}

function sortearAmigo() {
    // seleccionar el campo de sálida
    const sorteoAmigo = document.getElementById("resultado");
    // validar que la lista de amigos no esté vacia y que haya por lo menos 2 para sortear
    if (listaAmigos.length < 2) {
        alert("Debe haber por lo menos 2 amigos para realizar el sorteo.");
        return;
    }
    // generar un índice aleatorio para el arreglo de amigos
    const numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
    // obtener el nombre del amigo correspondiente al índice.
    const amigoSecreto = listaAmigos[numeroAleatorio];
    // mostrar el nombre del amigo sorteado 
    sorteoAmigo.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    //Limpiar lista de amigos
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = "";
}





