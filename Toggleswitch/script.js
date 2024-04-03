function animatedToggle() {
    let toggle = document.querySelector(".toggle");
    let text = document.querySelector(".text");

    toggle.classList.toggle("active");

    if (toggle.classList.contains("active")) {
        text.textContent = "ON";
    } else {
        text.textContent = "OFF";
    }
}
