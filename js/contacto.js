document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-contacto');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
    const nombreInput = document.getElementById('nombre');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío real del formulario

            const nombre = nombreInput.value.trim();

            // Ocultar el formulario
            formulario.style.display = 'none';

            // Verificar si el nombre es el del creador
            if (nombre.toLowerCase() === 'tomas gimenez') {
                mensajeConfirmacion.innerHTML = '<p>Felicidades, eres el creador del sitio.</p>';
            } else {
                mensajeConfirmacion.innerHTML = '<p>Tu mensaje fue enviado con éxito.</p>';
            }

            // Mostrar el mensaje de confirmación
            mensajeConfirmacion.style.display = 'block';

            // Opcional: resetear todo después de un tiempo
            setTimeout(() => {
                if(formulario) {
                    formulario.reset();
                    formulario.style.display = 'block';
                }
                if(mensajeConfirmacion) {
                    mensajeConfirmacion.style.display = 'none';
                    // Restaurar el mensaje original por si acaso
                    mensajeConfirmacion.innerHTML = '<p>Tu mensaje fue enviado con éxito.</p>';
                }
            }, 5000); // El mensaje desaparece y el formulario reaparece después de 5 segundos
        });
    }
});
