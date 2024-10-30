function checkCode() {
    const codeInput = document.getElementById("codeInput").value.trim().toLowerCase();
    const intro = document.getElementById("intro");
    const content = document.getElementById("content");
    const error = document.getElementById("error");
    const hole = document.getElementById("hole");

    if (codeInput === "el anillo está observando") {
        intro.classList.add("hidden");
        content.classList.remove("hidden");
    } else if (codeInput === "el vacío") {
        hole.classList.remove("hidden");
    } else {
        error.classList.remove("hidden");
    }
}

function toggleStories() {
    const stories = document.getElementById("stories");
    stories.classList.toggle("hidden");
}

function checkDate() {
    const dateInput = document.getElementById("dateInput").value;
    const historyContainer = document.getElementById("historyContainer");
    const historyText = document.getElementById("historyText");

    if (dateInput === "2023-10-22") {
        historyText.textContent = "Este es el inicio, el viajero que nunca regresó ha regresado con malas noticias. Una guerra se aproxima.";
        historyContainer.classList.remove("hidden");
    } else {
        historyText.textContent = "No hay historia para esta fecha.";
        historyContainer.classList.remove("hidden");
    }
}

function toggleCages() {
    const cages = document.getElementById("cages");
    cages.classList.toggle("hidden");
}



