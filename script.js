function checkCode() {
    const codeInput = document.getElementById("codeInput").value;
    if (codeInput === "TheRingIsWatching") {
        document.getElementById("intro").classList.add("hidden");
        document.getElementById("content").classList.remove("hidden");
        document.getElementById("error").classList.add("hidden");
    } else {
        document.getElementById("error").classList.remove("hidden");
    }
}

function toggleStories() {
    const stories = document.getElementById("stories");
    stories.classList.toggle("hidden");
}

function checkDate() {
    const dateInput = document.getElementById("dateInput").value;
    const historyText = document.getElementById("historyText");

    if (dateInput === "740-10-22") {
        historyText.innerText = "Este es el inicio, el viajero que nunca regresó ha regresado con malas noticias. Una guerra se aproxima.";
    } else {
        historyText.innerText = "No hay historia para esta fecha.";
    }

    document.getElementById("historyContainer").classList.remove("hidden");
}




