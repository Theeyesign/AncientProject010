function checkCode() {
    const codeInput = document.getElementById("codeInput").value;
    if (codeInput.toLowerCase() === "theringiswatching") {
        document.getElementById("main-section").classList.add("hidden");
        document.getElementById("secret-section").classList.remove("hidden");
    }
}

document.getElementById("lettersInput").addEventListener("input", function() {
    const dateDisplay = document.getElementById("date-display");
    const date = new Date();
    dateDisplay.textContent = `Día ${date.getDate()}, del mes ${date.getMonth() + 1}, del año ${date.getFullYear()}`;
});
