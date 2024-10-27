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

    if (day && month && year) {
        historyPart = `Has introducido la fecha: ${day}/${month}/${year}. Aquí es donde irían partes de la historia.`;
    } else {
        historyPart = "Por favor, completa todos los campos de fecha.";
    }

    const notes = document.getElementById("notes");
    notes.innerHTML = historyPart;
}

