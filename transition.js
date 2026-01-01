window.addEventListener("load", function() {
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    // Afficher la page 2 dès le début
    setTimeout(function() {
        page2.classList.add("active"); // Rendre page 2 visible
    }, 0); // Afficher immédiatement au début de la transition

    // Ajoute la classe de transition pour faire disparaître la page 1
    setTimeout(function() {
        page1.classList.add("transition-out");

        // Attendre la fin de l'animation de page1 (1 seconde)
        setTimeout(function() {
            // Redirige vers la page 2 après la transition
            window.location.href = "index2.html"; // Modifie l'URL pour charger page2.html
        }, 3000); // 3000ms correspond à la durée de la transition
    }, 5000); // La transition commence après 5 secondes (5000ms)
});
