// Función para mover el pato a la posición del botón
function mostrarPato(islaId) {
    const pato = document.getElementById('pato');
    const isla = document.getElementById(islaId);
    
    // Muestra la imagen del pato
    //pato.style.display = 'block';
    
    // Obtiene las coordenadas de la isla (botón)
    const rect = isla.getBoundingClientRect();

    // Ajuste para centrar el pato sobre el botón
    // Nos aseguramos de que el pato esté bien centrado
    pato.style.top = rect.top + window.scrollY - (pato.height * 2.5) + 'px'; // Ajuste vertical
    pato.style.left = rect.left + (pato.width / 2) + 'px'; // Ajuste horizontal
}

document.getElementById('isla1').onclick = function() { mostrarPato('isla1'); };
document.getElementById('isla2').onclick = function() { mostrarPato('isla2'); };
document.getElementById('isla3').onclick = function() { mostrarPato('isla3'); };
document.getElementById('isla4').onclick = function() { mostrarPato('isla4'); };
document.getElementById('isla5').onclick = function() { mostrarPato('isla5'); };
document.getElementById('isla6').onclick = function() { mostrarPato('isla6'); };
document.getElementById('isla7').onclick = function() { mostrarPato('isla7'); };
document.getElementById('isla8').onclick = function() { mostrarPato('isla8'); };
document.getElementById('isla9').onclick = function() { mostrarPato('isla9'); };
document.getElementById('isla10').onclick = function() { mostrarPato('isla10'); };
document.getElementById('isla11').onclick = function() { mostrarPato('isla11'); };
document.getElementById('isla12').onclick = function() { mostrarPato('isla12'); };
document.getElementById('isla13').onclick = function() { mostrarPato('isla13'); };
document.getElementById('tienda1').onclick = function() { mostrarPato('tienda1');
};