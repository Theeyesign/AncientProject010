document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hiddenContent").classList.add("hidden");
    document.getElementById("additionalContent").classList.add("hidden");
});

document.getElementById("enterButton").addEventListener("click", function() {
    const codeInput = document.getElementById("codeInput").value.trim();

    if (codeInput === "Theringiswatching") {
        document.getElementById("main-content").classList.add("hidden");
        const hiddenContent = document.getElementById("hiddenContent");
        hiddenContent.classList.remove("hidden");

        // Añadir secciones de historia
        const sections = document.getElementById("sections");
        sections.innerHTML = `
            <div class="section">
                <h3>Sección 1</h3>
                <p><strong>Fecha:</strong> <input type="text" placeholder="Día, Mes, Año"></p>
                <p>Contenido de la historia 1 aquí.</p>
            </div>
            <div class="section">
                <h3>Sección 2</h3>
                <p><strong>Fecha:</strong> <input type="text" placeholder="Día, Mes, Año"></p>
                <p>Contenido de la historia 2 aquí.</p>
            </div>
            <div class="section">
                <h3>Sección 3</h3>
                <p><strong>Fecha:</strong> <input type="text" placeholder="Día, Mes, Año"></p>
                <p>Contenido de la historia 3 aquí.</p>
            </div>
        `;
    } else {
        alert("Código incorrecto. Intenta de nuevo.");
    }
});

// Lógica para el ingreso de letras
document.getElementById("submitLetters").addEventListener("click", function() {
    const lettersInput = document.getElementById("letterInput").value.trim();

    if (lettersInput.length === 7) {
        document.getElementById("additionalContent").innerHTML = `
            <h3>¡Código aceptado!</h3>
            <p>Aquí está el texto adicional que puedes mostrar:</p>
            <p>Este es el contenido que se abriría al ingresar las letras correctas.</p>
        `;
        document.getElementById("additionalContent").classList.remove("hidden");
    } else {
        alert("Por favor, ingresa exactamente 7 letras.");
    }
});
