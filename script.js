function checkCode() {
    const codeInput = document.getElementById("codeInput").value;
    if (codeInput.toLowerCase() === "theringiswatching") {
        document.getElementById("main-section").classList.add("hidden");
        document.getElementById("secret-section").classList.remove("hidden");
    }
}

function showHistory() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    
    let historyPart = "";

    if (day === "22" && month === "10" && year === "740") {
        historyPart = "Este es el inicio, el viajero que nunca regresó ha regresado con malas noticias. Una guerra se aproxima.";
    } else {
        historyPart = `Has introducido la fecha: ${day}/${month}/${year}. Aquí es donde irían partes de la historia.`;
    }

    const notes = document.getElementById("notes");
    notes.innerHTML = historyPart;
}


