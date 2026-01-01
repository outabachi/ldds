document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#fleur .fleur");
    let index = 0;

    function changeActiveImage() {
        images[index].classList.remove("active"); // Retire la classe active de l'image actuelle
        index = (index + 1) % images.length; // Passe à l'image suivante (revient au début après la dernière)
        images[index].classList.add("active"); // Ajoute la classe active à la nouvelle image
    }

    setInterval(changeActiveImage, 500); // Change d'image toutes les 2 secondes
});