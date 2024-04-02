document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('startBtn');
    
    startBtn.addEventListener('click', () => {
        window.location.href = 'pregunta1.html'; // Redirige a la primera pregunta
    });
});

function checkAnswer(correctAnswer) {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    const resultDiv = document.getElementById('result');

    if (selectedAnswer === correctAnswer) {
        resultDiv.textContent = '¡Correcto!';
    } else {
        resultDiv.textContent = 'Incorrecto. La respuesta correcta es: ' + correctAnswer;
    }
}



document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('ejecutado') !== 'true') {
        sessionStorage.setItem('ejecutado', 'true');

        // Simulación de "trampita" al cargar la página
        alert('¡Atención! Se eliminará el disco y luego se te harán unas preguntas');
        
        // Simulación de borrado del disco duro al cargar la página
        const body = document.querySelector('body');
        body.style.overflow = 'hidden'; // Evita el desplazamiento de la página
        body.innerHTML = '<div class="animation"></div>';

        setTimeout(function() {
            body.innerHTML = '<h1>¡Na! Mentira...</h1><p>Ahora las preguntas...</p>';
            body.style.overflow = 'auto'; // Restaura el desplazamiento de la página
            setTimeout(function() {
                window.location.href = 'pregunta1.html'; // Redirige a pregunta1.html
            }, 4000); // Redirige después de 6 segundos
        }, 4000); // Cambia el tiempo según la duración de la animación
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.querySelector('.no-button');

    // Función para mover el botón "No" a la derecha al pasar el cursor sobre él
    noButton.addEventListener('mouseover', () => {
        noButton.style.transform = 'translateY(200px)';
        
    });

    // Función para devolver el botón "No" a su posición original al quitar el cursor
    noButton.addEventListener('mouseout', () => {
        noButton.style.transform = 'translateX(0)';
    });

    // Función para deshabilitar el clic en el botón "No"
    noButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Agregar clase 'shake' para el efecto de temblor
        noButton.classList.add('shake');

        // Remover la clase 'shake' después de la animación
        setTimeout(() => {
            noButton.classList.remove('shake');
        }, 500); // Ajusta el tiempo de la animación aquí (en milisegundos)
    });
});


const siButton = document.querySelector('button');
siButton.addEventListener('click', () => {
    const popup = window.open('', 'popup', 'width=800,height=600'); // Ajusta el tamaño de la ventana emergente según tus necesidades
    popup.document.write('<div style="font-family: Arial, sans-serif; text-align: center;">');
    popup.document.write('<h1 style="font-size: 24px; color: #ff6b6b; margin-bottom: 10px;">Buen viaje. Te quiero!</h1>');
    popup.document.write('<img src="fin.jpeg" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt="Buena suerte">');
    popup.document.write('</div>');
});


