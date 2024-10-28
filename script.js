function checkInitialCode() {
    const initialCode = document.getElementById("initialCode").value;
    if (initialCode === "TheRingIsWatching") {
        document.getElementById("initial-code-section").classList.add("hidden");
        document.getElementById("code-section").classList.remove("hidden");
        document.getElementById("book-icon").classList.remove("hidden");
    } else {
        alert("Código incorrecto.");
    }
}

function toggleBook() {
    const storyBook = document.getElementById("storyBook");
    const codeSection = document.getElementById("code-section");

    // Alterna entre mostrar el libro y las fechas/letras
    if (storyBook.classList.contains("hidden")) {
        storyBook.classList.remove("hidden");
        codeSection.classList.add("hidden");
    } else {
        storyBook.classList.add("hidden");
        codeSection.classList.remove("hidden");
    }
}

function checkCode() {
    const letterCode = document.getElementById("letterCode").value;
    const dateCode = document.getElementById("dateCode").value;

    if (letterCode === "XXXXXXX" && dateCode === "22/10/740") {  // Reemplaza "XXXXXXX" y la fecha según prefieras
        alert("Este es el inicio, el viajero que nunca regresó ha regresado con malas noticias. Una guerra se aproxima.");
    } else {
        alert("Código o fecha incorrectos.");
    }
}


