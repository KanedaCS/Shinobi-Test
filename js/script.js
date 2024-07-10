document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('kanagawaCanvas');
    const ctx = canvas.getContext('2d');

    // Ajustar el tamaño del canvas
    canvas.width = window.innerWidth;
    canvas.height = 500; // Ajustar según sea necesario

    // Función para dibujar la ola con más ondas
    function drawWave() {
        ctx.fillStyle = "#00A3AF";
        ctx.beginPath();
        ctx.moveTo(0, 300);
        ctx.quadraticCurveTo(canvas.width * 0.1, 250, canvas.width * 0.2, 300);
        ctx.quadraticCurveTo(canvas.width * 0.3, 350, canvas.width * 0.4, 300);
        ctx.quadraticCurveTo(canvas.width * 0.5, 250, canvas.width * 0.6, 300);
        ctx.quadraticCurveTo(canvas.width * 0.7, 350, canvas.width * 0.8, 300);
        ctx.quadraticCurveTo(canvas.width * 0.9, 250, canvas.width, 300);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
    }

    // Dibujar el fondo inspirado en "La Gran Ola de Kanagawa" con más ondas
    function drawKanagawaBackground() {
        // Cielo
        ctx.fillStyle = "#FFD700";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Olas
        drawWave();
        ctx.save();
        ctx.translate(0, 100);
        drawWave();
        ctx.restore();
    }

    drawKanagawaBackground();
});
