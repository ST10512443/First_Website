const ToggleButton = document.querySelector("#ToggleButton");

const MovingBox = document.querySelector(".MovingBox");

ToggleButton.addEventListener("click", () => {

    MovingBox.classList.toggle("Animate");

    if (MovingBox.classList.contains("Animate")) {
        ToggleButton.textContent = "Hide";
    } else {
        ToggleButton.textContent = "Show";
    }

});