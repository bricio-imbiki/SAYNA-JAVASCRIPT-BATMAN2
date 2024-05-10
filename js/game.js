// Récupérez l'élément de la flèche par son ID
var scrollDownButton = document.getElementById('scrollDownButton');

// La position prédéfinie vers laquelle vous souhaitez faire défiler la page (en pixels)
var scrollPosition = 900; // Par exemple, faites défiler jusqu'à 500 pixels du haut de la page

// Ajoutez un gestionnaire d'événements au clic sur la flèche
scrollDownButton.addEventListener('click', function() {
    // Faites défiler la page vers la position prédéfinie
    window.scrollTo({
        top: scrollPosition, // Défilez jusqu'à la position prédéfinie
        behavior: 'smooth' // Ajoutez un effet de défilement fluide
    });
});



//animation text h2 et batman
// Récupérez l'élément image par sa classe
var imagebat = document.querySelector('.imagebat');

// Récupérez l'élément de texte <h2> par son ID
var animatedText = document.getElementById('animated-text');

// la position à laquelle vous souhaitez déclencher l'animation manuellement
var triggerPosition = 300; // Vous pouvez ajuster cette valeur en pixels

// Fonction pour vérifier si l'élément est visible à l'écran
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour faire apparaître l'image avec l'effet de zoom et déplacer le texte <h2> en diagonale
function animateElements() {
    if (isElementInViewport(imagebat)) {
        imagebat.style.transform = 'scale(1)';
        imagebat.style.opacity = '1'; // Fait apparaître l'image avec opacité 1
        animatedText.style.top = '350px';
        animatedText.style.right = '10px';
    } else {
        // Réinitialiser la position de l'image et du texte <h2> si l'élément n'est pas visible
        imagebat.style.transform = 'scale(1.15)';
        imagebat.style.opacity = '0'; // Fait apparaître l'image avec opacité 1
        animatedText.style.top = '100px';
        animatedText.style.right = '925px';
    }
}

// Ajoutez un gestionnaire d'événements de défilement pour appeler la fonction animateElements
window.addEventListener('scroll', animateElements);
animateElements();



// script.js logo defilement naturel
window.addEventListener('scroll', function() {
    // Récupérez la position de défilement verticale
    var scrollPosition = window.scrollY;

    // Calculez la nouvelle position verticale pour les logos
    var newPosition = scrollPosition * 0.87; // Ajustez cette valeur pour contrôler la vitesse du déplacement

    // Appliquez la nouvelle position aux logos
    document.querySelectorAll('.reseau img').forEach(function(logo) {
        logo.style.transform = 'translateY(' + newPosition + 'px)';
    });
});


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

//quiz demarrage
var startQuizButton = document.getElementById('startQuizButton');
var quizContainer = document.getElementById('quizContainer');
var quizButton = document.getElementById('quizButton');
var btnbox = document.querySelector('.btn-box');
var flecheDownElement = document.querySelector('.fleche_down');
var quizresultat = document.getElementById('quizresultat');

startQuizButton.addEventListener('click', function(event) {
    var h2Element = document.querySelector('h2');
    var imagebatElement = document.querySelector('.imagebat');
    var btnboxElement = document.querySelector('.btn-box');
    var flecheDownElement = document.querySelector('.fleche_down');
    // Empêchez le comportement par défaut du lien (qui est de faire défiler vers le haut)
    event.preventDefault();

    if (h2Element) {
        h2Element.style.display = 'none';
    }
    if (imagebatElement) {
        imagebatElement.style.display = 'none';
    }
    if (btnboxElement) {
        btnboxElement.style.display = 'none';
    }
    if (flecheDownElement) {
        flecheDownElement.classList.add('hidden');
    }

    // Afficher le contenu du quiz avec animation
    quizContainer.style.display = 'block';
    startQuizButton.style.display = 'none'; //  Masquez le bouton de démarrage du quiz
});

const questions = [{
        "question": "Quel est l’autre nom de l’Homme-Mystère ?",
        "imageURL1": "../assets/Illustrations/game/Batgame_3.png",
        "response": [{
                "text": "Le Saphinx",
                "isGood": true
            },
            {
                "text": "Le Saphir",
                "isGood": false
            },
            {
                "text": "Le Joker",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quelle est l’ancienne profession de Harley Quinn ?",
        "imageURL1": "../assets/Illustrations/game/Batgame_4.png",
        "response": [{
                "text": "Infimière",
                "isGood": false
            },
            {
                "text": "Psychiatre",
                "isGood": true
            },
            {
                "text": "Dentiste",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quel est l’objet fétiche de Double Face ?",
        "imageURL1": "../assets/Illustrations/game/Batgame_5.png",
        "response": [{
                "text": "Une pièce",
                "isGood": true
            },
            {
                "text": "Un livre",
                "isGood": false
            },
            {
                "text": "Un couteau",
                "isGood": false
            }
        ]
    },
    {
        "question": "Qui a produit Batman en 1964 ?",
        "imageURL1": "../assets/Illustrations/game/Batgame_6.png",
        "response": [{
                "text": "Stanley Kubrick ",
                "isGood": true
            },
            {
                "text": "Andy Warhol",
                "isGood": false
            },
            {
                "text": "Peter Jackson",
                "isGood": false
            }
        ]
    },
    {
        "question": "Batman c’est aussi le nom d’une ville en...",
        "imageURL1": "../assets/Illustrations/game/Batgame_7.png",
        "response": [{
                "text": "Islande",
                "isGood": false
            },
            {
                "text": "Turquie",
                "isGood": true
            },
            {
                "text": "Allemagne",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
        "imageURL2": "../assets/Illustrations/game/Batgame_8.png", //question 6
        "imageURL3": "../assets/Illustrations/game/Batgame_9.png",
        "imageURL4": "../assets/Illustrations/game/Batgame_9-1.png",
        "response": [{
                "text": "Le Pingouin",
                "isGood": true
            },
            {
                "text": "Ra’s al Ghul",
                "isGood": false
            },
            {
                "text": "Poison Ivy",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quelle ville Batman défend-il ?",
        "imageURL1": "../assets/Illustrations/game/Batgame_10.png",

        "response": [{
                "text": "Gotham City",
                "isGood": true
            },
            {
                "text": "Starling City",
                "isGood": false
            },
            {
                "text": "Tananarive",
                "isGood": false
            }
        ]
    },
    {
        "question": "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
        "imageURL1": "../assets/Illustrations/game/Batgame_11.png",
        "response": [{
                "text": "Georges Clooney",
                "isGood": false
            },
            {
                "text": "Val Kilmer",
                "isGood": false
            },
            {
                "text": "Mickael Keaton",
                "isGood": false
            }
        ]
    },
    {
        "question": "Dans son premier Batman (1989) Jack Nicholson jouait :",
        "imageURL5": "../assets/Illustrations/game/Batgame_12.png", //question 9
        "imageURL6": "../assets/Illustrations/game/Batgame_13.png",
        "imageURL7": "../assets/Illustrations/game/Batgame_13-1.png",

        "response": [{
                "text": "Le Pingouin",
                "isGood": false
            },
            {
                "text": "L'Homme mystère",
                "isGood": true
            },
            {
                "text": "Le Joker",
                "isGood": false
            }
        ]
    },
    {
        "question": "Qui est Jonathan Crane ? ", //question 10
        "imageURL8": "../assets/Illustrations/game/Batgame_14.png",
        "imageURL9": "../assets/Illustrations/game/Batgame_15.png",
        "imageURL10": "../assets/Illustrations/game/Batgame_16.png",
        "response": [{
                "text": "L’Épouvantail",
                "isGood": false
            },
            {
                "text": "Le Joker",
                "isGood": true
            },
            {
                "text": "Hugo Strange",
                "isGood": false
            }
        ]
    },
    {
        "question": "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
        "imageURL1": "../assets/Illustrations/game/Batgame_17.png",
        "response": [{
                "text": "Emma Watson",
                "isGood": false
            },
            {
                "text": "Gigi Hadid",
                "isGood": true
            },
            {
                "text": "Lola Iolani Momoa",
                "isGood": false
            },
            {
                "text": "Zoë Kravitz",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quel est le prénom des parents du jeune Bruce Wayne ?",
        "imageURL1": "../assets/Illustrations/game/Batgame_18.png",
        "response": [{
                "text": "Matina et Adam",
                "isGood": false
            },
            {
                "text": "Elaine et Georges",
                "isGood": true
            },
            {
                "text": "Martha et James",
                "isGood": false
            }
        ]
    },
    {
        "question": "Qui interprète le Joker en 2008 ?",
        "imageURL1": "../assets/Illustrations/game/Batgame_19.png",
        "response": [{
                "text": "Heath Ledger",
                "isGood": false
            },
            {
                "text": "Haeth Ledger",
                "isGood": false
            },
            {
                "text": "Heath Ledger",
                "isGood": true
            }
        ]
    },
    {
        "question": "En quelle année Robin fait il sa première apparition ?",
        "imageURL1": "../assets/Illustrations/game/Batgame_20.png",
        "response": [{
                "text": "1940",
                "isGood": true
            },
            {
                "text": "1936",
                "isGood": false
            },
            {
                "text": "1941",
                "isGood": false
            }
        ]
    },
    {
        "question": "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
        "imageURL1": "../assets/Illustrations/game/Batgame_21.png",
        "response": [{
                "text": "Oracle Huntress",
                "isGood": true
            },
            {
                "text": "Black Canary",
                "isGood": false
            },
            {
                "text": "L'Epouvantail",
                "isGood": false
            }
        ]
    }
];



let compteurActuel = 0;
let compteurReponsesCorrectes = 0; // Ajout de la variable pour suivre les réponses correctes
const nombreTotal = questions.length;

const debutCompteur = document.querySelector('.debut-compteur');
const finCompteur = document.querySelector('.fin-compteur');
const questionElement = document.querySelector('.sujet');
const choixLabels = [document.querySelector('.choix1'), document.querySelector('.choix2'), document.querySelector('.choix3'), document.querySelector('.choix4')];
const checkboxes = [document.querySelector('#case1'), document.querySelector('#case2'), document.querySelector('#case3'), document.querySelector('#case4')];
const casecont4 = document.querySelector('.case-cont4');
const case4 = document.querySelector('#case4');
const choix4 = document.querySelector('.choix4');
const boutonDemarrer = document.querySelector('#startQuizButton');
const boutonSuivant = document.querySelector('#quizButton');
const boutonVoirResultat = document.querySelector('#quizresultat');
const boutonRecommencer = document.querySelector('#retour');
const Resultat = document.querySelector('#affiche-resultat');
const resultatTitle = document.getElementById('resultat');
const resultatMessage = document.getElementById('message');

boutonDemarrer.addEventListener('click', (event) => {
    boutonDemarrer.style.display = 'none';
    boutonSuivant.style.display = 'block';
    boutonSuivant.classList.add('slide-in'); // Afficher le bouton Suivant
    afficherQuestionSuivante();
    event.preventDefault();
    questionElement.style.display = 'block';
    questionElement.classList.add('slide-in');
    document.querySelector('.compteur h1').style.display = 'block';
    document.querySelector('.compteur h1').classList.add('slide-in');
    quizContainer.style.display = 'block';
    quizContainer.classList.add('slide-in');
});

// ...

boutonSuivant.addEventListener('click', (event) => {
    event.preventDefault();
    if (compteurActuel < nombreTotal) {
        // Vérifier quelles cases ont été cochées
        const reponsesSelectionnees = [];
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                reponsesSelectionnees.push(i);
            }
        }
        const question = questions[compteurActuel - 1];
        const reponsesCorrectes = question.response.filter(reponse => reponse.isGood);

        const toutesLesReponsesCorrectes = reponsesCorrectes.every(reponseCorrecte => {
            return reponsesSelectionnees.includes(question.response.indexOf(reponseCorrecte));
        });

        if (toutesLesReponsesCorrectes) {
            compteurReponsesCorrectes++; // Incrémenter le compteur de réponses correctes
        }
        afficherQuestionSuivante();
    } else {
        boutonSuivant.style.display = 'none';
        boutonVoirResultat.style.display = 'block';


    }

    if (compteurActuel === nombreTotal) {
        quizButton.style.display = 'none';
        quizresultat.style.display = 'block';
        return;
    }
});

// Fonction pour vérifier si deux tableaux sont égaux
function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// Gestionnaire d'événements pour le bouton "Voir mon résultat"
boutonVoirResultat.addEventListener('click', (event) => {
    event.preventDefault();

    if (compteurActuel === nombreTotal) {
        // Vérifier quelles cases ont été cochées à la dernière question
        const reponsesSelectionnees = [];
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                reponsesSelectionnees.push(i);
            }
        }

        const question = questions[compteurActuel - 1];
        const reponsesCorrectes = question.response.filter(reponse => reponse.isGood);

        const toutesLesReponsesCorrectes = reponsesCorrectes.every(reponseCorrecte => {
            return reponsesSelectionnees.includes(question.response.indexOf(reponseCorrecte));
        });

        if (toutesLesReponsesCorrectes) {
            compteurReponsesCorrectes++; // Incrémenter le compteur de réponses correctes
        }
        // Réinitialiser les cases à cocher
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }


    }
    // Afficher le score dans une fenêtre pop-up
    const scoreTotal = [compteurReponsesCorrectes - 1];
    boutonVoirResultat.style.display = 'none';
    quizContainer.style.display = 'none';


    if (scoreTotal < 7) {
        // Mettre à jour le contenu de la carte avec le score et le message
        resultatTitle.textContent = ` ${scoreTotal }/${nombreTotal} C\'EST PAS TOUT À FAIT CA...`;
        resultatMessage.textContent = 'Oula! Heureusement que le Riddler est sous les verrous... Il faut que vous vous repassiez les films, cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! Aller, rien n\'est perdu!';

    } else if (scoreTotal < 15) {
        resultatTitle.textContent = ` ${scoreTotal }/${nombreTotal} PAS MAL!`;
        resultatMessage.textContent = 'Encore un peu d\'entraînement avec le chevalier Noir vous serait bénéfique, mais vous pouvez marcher la tête haute, vos connaissances sont là. À vous de les consolider, foncez, Gotham est votre terrain de chasse !';
    } else {
        resultatTitle.textContent = ` ${scoreTotal }/${nombreTotal} Bravo!`;
        resultatMessage.textContent = 'Vous êtes véritablement un super fan de l\'univers de Batman ! Comics, films, rien ne vous échappe. Bruce Wayne a de quoi être fier, Gotham est en paix et Batman peut prendre sa retraite, vous veillez aux grains !';
    }
    // Afficher la carte 
    boutonRecommencer.style.display = 'block';
    Resultat.style.display = 'block';
    boutonVoirResultat.style.display = 'none';
});

// ...


function afficherQuestionSuivante() {
    compteurActuel++;
    debutCompteur.textContent = compteurActuel;
    finCompteur.textContent = nombreTotal;

    const question = questions[compteurActuel - 1];
    questionElement.textContent = question.question;
    const imageElement1 = document.querySelector('#perso1');
    imageElement1.src = question.imageURL1;
    imageElement1.style.display = 'block';
    const imageElement2 = document.querySelector('#perso2');
    const imageElement3 = document.querySelector('#perso3');
    const imageElement4 = document.querySelector('#perso4');

    const imageElement5 = document.querySelector('#perso5');
    const imageElement6 = document.querySelector('#perso6');
    const imageElement7 = document.querySelector('#perso7');

    const imageElement8 = document.querySelector('#perso8');
    const imageElement9 = document.querySelector('#perso9');
    const imageElement10 = document.querySelector('#perso10');


    if (compteurActuel === 6) {
        imageElement1.style.display = 'none'; // Masquez l'image 1
        imageElement2.style.display = 'block';
        imageElement2.src = question.imageURL2;
        imageElement3.style.display = 'block';
        imageElement3.src = question.imageURL3;
        imageElement4.style.display = 'block';
        imageElement4.src = question.imageURL4;
    } else if (compteurActuel === 9) {
        imageElement1.style.display = 'none';
        imageElement5.style.display = 'block';
        imageElement5.src = question.imageURL5;
        imageElement6.style.display = 'block';
        imageElement6.src = question.imageURL6;
        imageElement7.style.display = 'block';
        imageElement7.src = question.imageURL7;
    } else if (compteurActuel === 10) {
        imageElement5.style.display = 'none'; // Masquez l'image 5
        imageElement6.style.display = 'none'; // Masquez l'image 6
        imageElement7.style.display = 'none'; // Masquez l'image 7
        imageElement1.style.display = 'none';
        imageElement8.style.display = 'block';
        imageElement8.src = question.imageURL8;
        imageElement9.style.display = 'block';
        imageElement9.src = question.imageURL9;
        imageElement10.style.display = 'block';
        imageElement10.src = question.imageURL10;
    } else {
        imageElement2.style.display = 'none'; // Masquez l'image 2
        imageElement3.style.display = 'none'; // Masquez l'image 3
        imageElement4.style.display = 'none'; // Masquez l'image 4
        imageElement5.style.display = 'none'; // Masquez l'image 5
        imageElement6.style.display = 'none'; // Masquez l'image 6
        imageElement7.style.display = 'none'; // Masquez l'image 7
        imageElement8.style.display = 'none'; // Masquez l'image 8
        imageElement9.style.display = 'none'; // Masquez l'image 9
        imageElement10.style.display = 'none'; // Masquez l'image 10
        imageElement1.style.display = 'block';
    }

    if (compteurActuel === 11) {
        casecont4.style.display = 'block';
        case4.style.display = 'block';
        choix4.style.display = 'block';
    } else {
        case4.style.display = 'none';
        choix4.style.display = 'none';
        casecont4.style.display = 'none';
    }

    // Réinitialisez les cases à cocher
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
    // les reponse sur label du check box
    for (let i = 0; i < choixLabels.length; i++) {
        if (i < question.response.length) {
            const reponse = question.response[i];
            choixLabels[i].textContent = reponse.text;
        } else {
            choixLabels[i].textContent = '';
        }
    }
}

boutonRecommencer.addEventListener('click', (event) => {
    event.preventDefault();
    boutonRecommencer.style.display = 'none';
    // Réinitialisez les compteurs et cachez la section de résultat
    compteurActuel = 0;
    compteurReponsesCorrectes = 0;

    // Réinitialisez l'affichage du score et du message
    document.getElementById('resultat').innerHTML = '';
    document.getElementById('message').innerHTML = '';

    // Réaffichez la section de quiz et cachez la section de résultat
    quizContainer.style.display = 'block';
    boutonSuivant.style.display = 'block';
    boutonSuivant.classList.add('slide-in'); // Afficher le bouton Suivant
    afficherQuestionSuivante();
    event.preventDefault();
    questionElement.style.display = 'block';
    questionElement.classList.add('slide-in');
    document.getElementById('affiche-resultat').style.display = 'none';

});