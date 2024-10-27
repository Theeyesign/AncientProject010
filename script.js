document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hiddenContent").classList.add("hidden");
});

document.getElementById("enterButton").addEventListener("click", function() {
    const codeInput = document.getElementById("codeInput").value.trim(); // Usar .trim() para eliminar espacios

    if (codeInput === "Theringiswatching") {
        document.getElementById("main-content").classList.add("hidden");
        const hiddenContent = document.getElementById("hiddenContent");
        hiddenContent.classList.remove("hidden");

        // Aquí puedes añadir secciones o texto adicional
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
