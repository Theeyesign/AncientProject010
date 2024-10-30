function checkCode() {
    const input = document.getElementById('codeInput').value.trim();
    if (input === "El anillo está observando") {
        document.getElementById('intro').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    } else if (input === "El vacío") {
        document.getElementById('rift').classList.remove('hidden');
    } else {
        document.getElementById('error').classList.remove('hidden');
        document.getElementById('error').innerText = "Código incorrecto. Intenta de nuevo.";
    }
}

function openBook() {
    const bookContent = document.getElementById('bookContent');
    bookContent.classList.toggle('hidden');
}

function checkDate() {
    const dateInput = document.getElementById('dateInput').value;
    const historyContainer = document.getElementById('historyContainer');
    const historyText = document.getElementById('historyText');

    if (dateInput === "740-10-22") {
        historyText.innerText = "Este es el inicio, el viajero que nunca regresó ha regresado con malas noticias. Una guerra se aproxima.";
        historyContainer.classList.remove('hidden');
    } else {
        historyText.innerText = "No se encontraron eventos en esta fecha.";
        historyContainer.classList.remove('hidden');
    }
}

function toggleJailView() {
    const jailView = document.getElementById('jailView');
    jailView.classList.toggle('hidden');
    document.getElementById('content').classList.toggle('hidden');
}

function backToMain() {
    document.getElementById('jailView').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
}


