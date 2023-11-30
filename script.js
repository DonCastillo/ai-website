document.addEventListener("DOMContentLoaded", function () {
    const quoteContainer = document.getElementById("quote-container");

    const quotes = [
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Don't watch the clock; do what it does. Keep going.",
        "Believe you can and you're halfway there.",
        "It always seems impossible until it's done.",
        "The only way to do great work is to love what you do.",
        "Your time is limited, don't waste it living someone else's life.",
        "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Strive not to be a success, but rather to be of value."
    ];

    quotes.forEach((quote, index) => {
        const quoteElement = document.createElement("div");
        quoteElement.classList.add("quote");
        quoteElement.id = `quote-${index}`;
        quoteElement.innerHTML = `<p>${quote}</p>`;
        quoteElement.addEventListener("mouseover", () => changeBackgroundColor());
        quoteContainer.appendChild(quoteElement);
    });

    function changeBackgroundColor() {
        const body = document.body;
        const gradientColors = generateRandomGradient();
        body.style.background = `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`;
    }

    function generateRandomGradient() {
        const colors = [
            "#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#e67e22",
            "#27ae60", "#f39c12", "#c0392b", "#2980b9", "#e74c3c"
        ];

        const randomIndex1 = Math.floor(Math.random() * colors.length);
        let randomIndex2 = Math.floor(Math.random() * colors.length);
        while (randomIndex2 === randomIndex1) {
            randomIndex2 = Math.floor(Math.random() * colors.length);
        }

        return [colors[randomIndex1], colors[randomIndex2]];
    }
});
