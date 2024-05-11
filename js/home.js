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
    var flecheDownElement = document.getElementById('scrollDownButton');
    var isMouseDownDown = false; // Variable pour suivre l'état du clic pour le défilement vers le bas
    var isMouseDownUp = false; // Variable pour suivre l'état du clic pour le défilement vers le haut

    // Fonction pour effectuer le défilement vers le bas
    function flecheDown() {
        window.scrollBy({
            top: 500, // Augmentez la valeur pour un défilement vers le bas plus rapide
            behavior: 'smooth'
        });
    }

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
    flecheDownElement.addEventListener('mousedown', function(e) {
        // Empêchez le défilement par défaut au clic
        e.preventDefault();

        // Démarrez le défilement vers le bas
        flecheDown();

        // Définissez l'état du clic vers le bas comme enfoncé
        isMouseDownDown = true;
    });

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
//const titre = [document.getElementById('titre1'), document.getElementById('titre2'), document.getElementById('titre3'), document.getElementById('titre4')];
//const description = [document.getElementById('desc1'), document.getElementById('desc2'), document.getElementById('desc3'), document.getElementById('desc4')];

var titre1 = document.querySelector('.titre1');
var titre2 = document.querySelector('.titre2');
var titre3 = document.querySelector('.titre3');
var titre4 = document.querySelector('.titre4');
var titre5 = document.querySelector('.titre5');

var desc1 = document.querySelector('.desc1');
var desc2 = document.querySelector('.desc2');
var desc3 = document.querySelector('.desc3');
var desc4 = document.querySelector('.desc4');
var hero = document.querySelector('.hero');

var trailerImg = document.getElementById("trailer-img");
var justiceimg = document.getElementById("justice-league-img");
var slidecontent = document.querySelector('.slide-container');
var contact = document.getElementById("contact");
var citation = document.getElementById("citation");
var persoImage = document.querySelector(".perso");
var persoInfo = document.querySelector(".perso-info");
window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;

    // Ajuster les valeurs top et right en fonction de la position de défilement
    if (scrollPosition >= 0 && scrollPosition < 270) {
        hero.style.top = "-10px";
        hero.style.right = "0px";
        hero.style.opacity = '1';
        hero.style.opacity = '1';
    } else if (scrollPosition > 300 && scrollPosition < 1070) {
        titre1.style.top = "-10px";
        titre1.style.right = "0px";
        desc1.style.top = "-10px";
        desc1.style.right = "0px";
        titre1.style.opacity = '1';
        desc1.style.opacity = '1';

    } else if (scrollPosition > 1200 && scrollPosition < 1950) {
        titre2.style.top = "-10px";
        titre2.style.right = "0px";
        desc2.style.top = "-10px";
        desc2.style.right = "0px";
        titre2.style.opacity = '1';
        desc2.style.opacity = '1';
    } else if (scrollPosition > 2200 && scrollPosition < 2900) {
        titre3.style.top = "-10px";
        titre3.style.right = "0px";
        desc3.style.top = "-10px";
        desc3.style.right = "0px";
        titre3.style.opacity = '1';
        desc3.style.opacity = '1';
    } else if (scrollPosition > 3000 && scrollPosition < 3500) {
        titre4.style.opacity = '1';
        desc4.style.opacity = '1';
        titre4.style.top = "-10px";
        titre4.style.right = "0px";
        desc4.style.top = "-10px";
        desc4.style.right = "0px";
    } else if (scrollPosition > 3500 && scrollPosition < 4000) {
        titre4.style.opacity = '1';
        desc4.style.opacity = '1';
        titre4.style.top = "-10px";
        titre4.style.right = "0px";
        desc4.style.top = "-10px";
        desc4.style.right = "0px";
        justiceimg.style.opacity = '1';
        justiceimg.style.transform = 'scale(1)';
    } else if (scrollPosition > 4050 && scrollPosition < 4500) {
        titre5.style.opacity = '1';
        titre5.style.top = "-10px";
        titre5.style.right = "0px";
        slidecontent.style.opacity = '1';
        slidecontent.style.transform = "translateX(0)";

    } else {
        justiceimg.style.opacity = '0';
        justiceimg.style.transform = 'scale(0)';
        slidecontent.style.opacity = '0';
        slidecontent.style.transform = "translateX(-100%)";
        hero.style.opacity = '0';
        hero.style.top = "0px";
        hero.style.right = "925px";
        titre1.style.opacity = '0';
        titre1.style.top = "-300px";
        titre1.style.right = "925px";
        desc1.style.opacity = '0';
        desc1.style.top = "-200px";
        desc1.style.right = "925px";

        titre2.style.opacity = '0';
        titre2.style.top = "-300px";
        titre2.style.right = "925px";
        desc2.style.top = "-200px";
        desc2.style.right = "925px";
        desc2.style.opacity = '0';

        titre3.style.opacity = '0';
        titre3.style.top = "-300px";
        titre3.style.right = "925px";
        desc3.style.top = "-200px";
        desc3.style.right = "925px";
        desc3.style.opacity = '0';

        titre4.style.opacity = '0';
        titre4.style.top = "-300px";
        titre4.style.right = "925px";
        desc4.style.top = "-200px";
        desc4.style.right = "925px";
        desc4.style.opacity = '0';

        titre5.style.opacity = '0';
        titre5.style.top = "-300px";
        titre5.style.right = "925px";
    }
});
// } else if (scrollPosition > 4600 && scrollPosition < 5200) {
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;

        // Si le scroll atteint ou dépasse la position souhaitée
        if (scrollPosition > 4600 && scrollPosition < 5200) {
            trailerImg.style.opacity = '1';
            trailerImg.style.transform = 'scale(1)';
        } else if (scrollPosition > 5300 && scrollPosition < 5800) {
            contact.style.opacity = '1';
            contact.style.transform = "translateX(0)";
        } else {
            contact.style.opacity = '0';

            contact.style.transform = "translateX(-100%)";
            trailerImg.style.opacity = '0';
            trailerImg.style.transform = 'scale(0)';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {

    var scrollPositionToShow = 5800;
    var scrollPositionToHide = 6500;

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;

        if (scrollPosition > scrollPositionToShow && scrollPosition < scrollPositionToHide) {
            citation.style.transform = "translateX(0)";
        } else {
            citation.style.transform = "translateX(-100%)";

        }
    });
});