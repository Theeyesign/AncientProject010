function checkCode() {
    const codeInput = document.getElementById("codeInput").value;
    const errorText = document.getElementById("error");
    if (codeInput === "TheRingIsWatching") {
        document.getElementById("intro").classList.add("hidden");
        document.getElementById("content").classList.remove("hidden");
        errorText.classList.add("hidden");
    } else {
        errorText.classList.remove("hidden");
    }
}

function toggleStories() {
    const stories = document.getElementById("stories");
    stories.classList.toggle("hidden");
}

function checkDate() {
    const dateInput = document.getElementById("dateInput").value;
    const historyText = document.getElementById("historyText");
    
    if (dateInput === "2023-10-22") { // Cambia esta fecha según tus necesidades
        historyText.innerText = "Este es el inicio, el viajero que nunca regresó ha regresado con malas noticias. Una guerra se aproxima.";
        document.getElementById("historyContainer").classList.remove("hidden");
    } else {
        historyText.innerText = "No hay historia para esta fecha.";
    }
}



