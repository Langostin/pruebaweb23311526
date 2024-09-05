let contador = 0;

document.getElementById('contadorBtn').addEventListener('click', function() {
    // Incrementar el contador
    contador++;

    // Mostrar el número de clics en la página
    document.getElementById('contadorClics').textContent = "Clics: " + contador;

    // Cambiar el color de fondo a uno aleatorio
    const colores = ['#FFB6C1', '#ADD8E6', '#FFD700', '#98FB98', '#FFA500'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;

    // Comprobar si el contador llega a 50
    if (contador === 50) {
        // Cambiar el estilo de la página
        document.body.classList.add('especial');
        document.querySelector('h1').textContent = "¡Lo lograste, 50 clics!";
        document.querySelector('h1').classList.add('especial');
        document.querySelector('button').classList.add('especial');
        document.getElementById('contadorClics').textContent = "¡Increíble! Llegaste a 50 clics!";
    }
});
