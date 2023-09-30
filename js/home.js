// Sélectionnez les éléments d'images
var images = document.querySelectorAll('.reseau img');

// Fonction pour mettre à jour la position des images en fonction du scroll
function updateImagePosition() {
    var scrollY = window.scrollY || window.pageYOffset;
    images.forEach(function(image) {
        var scrollSpeed = parseInt(image.getAttribute('data-scroll-speed')) || 1;
        var translateY = scrollY * scrollSpeed * 0.95 + 'px';
        image.style.transform = 'translateY(' + translateY + ')';
    });
}

// Écoutez l'événement de scroll pour mettre à jour la position des images
window.addEventListener('scroll', updateImagePosition);

// Appelez la fonction initiale pour positionner les images au chargement de la page
updateImagePosition();



// script.js bat_fleche down and up
document.addEventListener('DOMContentLoaded', function() {
    // Récupérez les éléments images par leur ID
    var scrollTriggerDown = document.getElementById('scrollTriggerDown');
    var scrollTriggerUp = document.getElementById('scrollTriggerUp');
    var isMouseDownDown = false; // Variable pour suivre l'état du clic pour le défilement vers le bas
    var isMouseDownUp = false; // Variable pour suivre l'état du clic pour le défilement vers le haut

    // Fonction pour effectuer le défilement vers le bas
    function scrollDown() {
        window.scrollBy({
            top: 9000, // Augmentez la valeur pour un défilement vers le bas plus rapide
            behavior: 'smooth'
        });
    }

    // Fonction pour effectuer le défilement vers le haut
    function scrollUp() {
        window.scrollBy({
            top: -9000, // Augmentez la valeur pour un défilement vers le haut plus rapide
            behavior: 'smooth'
        });
    }

    // Ajoutez un gestionnaire d'événements au clic sur l'image pour le défilement vers le bas
    scrollTriggerDown.addEventListener('mousedown', function(e) {
        // Empêchez le défilement par défaut au clic
        e.preventDefault();

        // Démarrez le défilement vers le bas
        scrollDown();

        // Définissez l'état du clic vers le bas comme enfoncé
        isMouseDownDown = true;
    });

    // Ajoutez un gestionnaire d'événements au clic sur l'image pour le défilement vers le haut
    scrollTriggerUp.addEventListener('mousedown', function(e) {
        // Empêchez le défilement par défaut au clic
        e.preventDefault();

        // Démarrez le défilement vers le haut
        scrollUp();

        // Définissez l'état du clic vers le haut comme enfoncé
        isMouseDownUp = true;
    });

    // Ajoutez des gestionnaires d'événements au relâchement du clic pour les deux images
    scrollTriggerDown.addEventListener('mouseup', function() {
        // Arrêtez le défilement vers le bas lorsque le clic est relâché
        isMouseDownDown = false;
    });

    scrollTriggerUp.addEventListener('mouseup', function() {
        // Arrêtez le défilement vers le haut lorsque le clic est relâché
        isMouseDownUp = false;
    });

    // Ajoutez des gestionnaires d'événements au survol pour éviter les problèmes si la souris quitte l'image tout en maintenant le clic enfoncé
    scrollTriggerDown.addEventListener('mouseout', function() {
        if (isMouseDownDown) {
            isMouseDownDown = false;
        }
    });

    scrollTriggerUp.addEventListener('mouseout', function() {
        if (isMouseDownUp) {
            isMouseDownUp = false;
        }
    });

    // Fonction pour continuer le défilement vers le bas lorsqu'on reste appuyé sur le clic vers le bas
    function continueScrollingDown() {
        if (isMouseDownDown) {
            scrollDown();
            requestAnimationFrame(continueScrollingDown);
        }
    }

    // Fonction pour continuer le défilement vers le haut lorsqu'on reste appuyé sur le clic vers le haut
    function continueScrollingUp() {
        if (isMouseDownUp) {
            scrollUp();
            requestAnimationFrame(continueScrollingUp);
        }
    }

    // Lancez le défilement continu lorsque le clic est maintenu enfoncé
    scrollTriggerDown.addEventListener('mousedown', continueScrollingDown);
    scrollTriggerUp.addEventListener('mousedown', continueScrollingUp);
});