let amigos = [];

/**
 * Función para agregar un amigo a la lista.
 */
function agregarAmigos() {
    const inputAmigo = document.getElementById('amigo'); // Obtener el input
    const nombreAmigo = inputAmigo.value.trim(); // Obtener el valor del input y eliminar espacios en blanco

    if (nombreAmigo === "") {
        alert("Es necesario ingresar un nombre.");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya está en la lista.`);
        return;
    }

    amigos.push(nombreAmigo); // Agregar el nombre a la lista
    inputAmigo.value = ""; // Limpiar el input
    actualizarLista(); // Actualizar la lista visible en el DOM
}

/**
 * Función para actualizar la lista de amigos en el DOM.
 */
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtener la lista de amigos del DOM
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    for (let i = 0; i < amigos.length; i++) { // Iterar sobre la lista de amigos
        const li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo al elemento <li>
        listaAmigos.appendChild(li); // Agregar el elemento <li> a la lista
    }
}

/**
 * Función para sortear un amigo aleatorio.
 */
function sortearAmigo() {
    if (amigos.length === 0) { // Verificar si hay amigos disponibles
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; // Mostrar el resultado en el DOM
}