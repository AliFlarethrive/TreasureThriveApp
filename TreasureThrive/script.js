const grid = document.getElementById("grid");

let prizes = ["₦80,000", "₦50,000", "₦20,000", "₦10,000", "₦5,000", "₦1,000", "₦500", "₦100", "₦0"];

// Create treasure boxes dynamically
function createBoxes() {
    grid.innerHTML = "";
    prizes = prizes.sort(() => Math.random() - 0.5); // Shuffle prizes
    for (let i = 0; i < 9; i++) {
        const box = document.createElement("div");
        box.className = "box";
        box.textContent = "❓";
        box.addEventListener("click", () => revealPrize(i, box));
        grid.appendChild(box);
    }
}

// Reveal the prize in a box
function revealPrize(index, box) {
    box.textContent = prizes[index];
    box.style.pointerEvents = "none";
}

// Initialize game
createBoxes();