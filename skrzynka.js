document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "zdjecia/p1.jpg",
        "zdjecia/p2.jpg",
        "zdjecia/p3.jpg",
        // Dodaj więcej ścieżek do obrazków według potrzeb
    ];


    const prevButton = document.querySelector(".poprzedni");
    const nextButton = document.querySelector(".nastepny");
    const imageElement = document.querySelector(".ramka-produkt");

    let currentImageIndex = 0;

    function showImage(index) {
        imageElement.style.backgroundImage = `url(${images[index]})`;
    }

    prevButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    nextButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    // Wyświetl pierwszy obraz na starcie
    showImage(currentImageIndex);
});