document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hiddenContent").classList.add("hidden");
    document.getElementById("additionalContent").classList.add("hidden"); // Oculta el contenido adicional
});

document.getElementById("enterButton").addEventListener("click", function() {
    const codeInput = document.getElementById("codeInput").value.trim();

    if (codeInput === "Theringiswatching") {
        document.getElementById("main-content").classList.add("hidden");
        const hiddenContent = document.getElementById("hiddenContent");
        hiddenContent.classList.remove("hidden");

        // Añadir secciones o texto adicional
        const sections = document.getElementById("sections");
        sections.innerHTML = `
            <div class="section">Sección 1: Contenido de la historia 1</div>
            <div class="section">Sección 2: Contenido de la historia 2</div>
            <div class="section">Sección 3: Contenido de la historia 3</div>
        `;
    } else {
        alert("Código incorrecto. Intenta de nuevo.");
    }
});

// Lógica para el ingreso de letras
document.getElementById("submitLetters").addEventListener("click", function() {
    const lettersInput = document.getElementById("letterInput").value.trim();

    // Aquí puedes comprobar el código de letras y mostrar contenido adicional
    if (lettersInput.length === 7) {
        document.getElementById("additionalContent").innerHTML = `
            <h3>¡Código aceptado!</h3>
            <p>Aquí está el texto adicional que puedes mostrar:</p>
            <p>Este es el contenido que se abriría al ingresar las letras correctas.</p>
        `;
        document.getElementById("additionalContent").classList.remove("hidden"); // Muestra el contenido adicional
    } else {
        alert("Por favor, ingresa exactamente 7 letras.");
    }
});
