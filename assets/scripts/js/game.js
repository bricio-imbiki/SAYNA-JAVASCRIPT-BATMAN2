//ACCEDER AUX DIFFERENTS ELEMENTS DU QUIZZ

//le bouton
let commencer = document.getElementById('commencer');
//La presentation
let o1 = document.getElementById('o1');
//Le corps du quizz
let quizzTemplate = document.getElementById ('quizzTemplate');
//Afficheur des étapes du quizz
let compteur = document.getElementById ('compteur');
//contient la question du quizz
let question = document.getElementById ('question');
//liste des choix possibles
let liste = document.getElementById ('liste').querySelectorAll ('input');
let listeLabel = document.getElementById ('liste').querySelectorAll ('label');
let listeDiv = document.getElementById ('liste').querySelectorAll ('div');
//l'image qui accompagne le quizz
let image = document.getElementById ('image');

//Les elements affichant le resultat
let resultat = document.getElementById ('resultat')
let content = document.getElementById ('gameContent');
let scoreFinal = document.getElementById ('scoreFinal');
let commentaire = document.getElementById ('commentaire');
let recommencer = document.getElementById ('recommencer');



//contient les questions et les réponses du quizz (un tableau d'objet)
let api = [
    {
        "question": "Quel est l’autre nom de l’Homme-Mystère ?",
        "response": [
            {
                "text": "Le Saphinx",
                "isGood": true
            },
            {
                "text": "Le Saphir",
                "isGood": true
            },
            {
                "text": "Le Joker",
                "isGood": true
            }
        ]
    },
    {
        "question": "Quelle est l’ancienne profession de Harley Quinn ?",
        "response": [
            {
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
        "response": [
            {
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
        "response": [
            {
                "text": "Stanley Kubrick ",
                "isGood": false
            },
            {
                "text": "Andy Warhol",
                "isGood": false
            },
            {
                "text": "Peter Jackson",
                "isGood": true
            }
        ]
    },
    {
        "question": "Batman c’est aussi le nom d’une ville en...",
        "response": [
            {
                "text": "Turquie",
                "isGood": true
            },
            {
                "text": "Islande",
                "isGood": false
            },
            {
                "text": "Allemagne",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
        "response": [
            {
                "text": "Le Pingouin",
                "isGood": false
            },
            {
                "text": "Ra’s al Ghul",
                "isGood": true
            },
            {
                "text": "Poison Ivy",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quelle ville Batman défend-il ?",
        "response": [
            {
                "text": "Gotham City",
                "isGood": true
            },
            {
                "text": "Starling City",
                "isGood": false
            },
            {
                "text": "Hell’s Kitchen",
                "isGood": false
            }
        ]
    },
    {
        "question": "Tim Burton a réalisé deux Batman, qui jouait Batman ?",
        "response": [
            {
                "text": "Georges Clooney",
                "isGood": false
            },
            {
                "text": "Val Kilmer",
                "isGood": false
            },
            {
                "text": "Mickael Keaton",
                "isGood": true
            }
        ]
    },
    {
        "question": "Dans son premier Batman (1989) Jack Nicholson jouait :",
        "response": [
            {
                "text": "Le Pingouin",
                "isGood": false
            },
            {
                "text": "L’Homme Mystère",
                "isGood": false
            },
            {
                "text": "Le Joker",
                "isGood": true
            }
        ]
    },
    {
        "question": "Qui est Jonathan Crane ? ",
        "response": [
            {
                "text": "L’Épouvantail",
                "isGood": true
            },
            {
                "text": "Le Joker",
                "isGood": false
            },
            {
                "text": "Hugo Strange",
                "isGood": false
            }
        ]
    },
    {
        "question": "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
        "response": [
            {
                "text": "Emma Watson",
                "isGood": false
            },
            {
                "text": "Gigi Hadid",
                "isGood": false
            },
            {
                "text": "Lola Iolani Momoa",
                "isGood": false
            },
            {
                "text": "Zoë Kravitz",
                "isGood": true
            }
        ]
    },
    {
        "question": "Quel est le prénom des parents du jeune Bruce Wayne ?",
        "response": [
            {
                "text": "Thomas et Martha",
                "isGood": true
            },
            {
                "text": "Elaine et Georges",
                "isGood": false
            },
            {
                "text": "Martha et James",
                "isGood": false
            }
        ]
    },
    {
        "question": "Qui interprète le Joker en 2008 ?",
        "response": [
            {
                "text": "Heath Legder",
                "isGood": true
            },
            {
                "text": "Haeth Ledger",
                "isGood": false
            },
            {
                "text": "Heath Ladger",
                "isGood": false
            }
        ]
    },
    {
        "question": "En quelle année Robin fait il sa première apparition ?",
        "response": [
            {
                "text": "1940",
                "isGood": true
            },
            {
                "text": "1939",
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
        "response": [
            {
                "text": "Oracle",
                "isGood": false
            },
            {
                "text": "Huntress",
                "isGood": true
            },
            {
                "text": "Black Canary",
                "isGood": false
            }
        ]
    },
    
    
]

//Fonction qui fait attendre le programme
function wait (ms){
    return new Promise (resolve => setTimeout (resolve, ms));
}

//Gere les evenements de click sur le bouton principale 
commencer.addEventListener ("click", quizz);

let i = 0;
let score = 0;


//La fonction qui réalise le quizz
async function quizz (){
    commencer.style.pointerEvents = "none";
    o1.style.display = "none";
    //fonction qui calcule le score
    scoreQuizz();

    await wait (1000);
    //fonction qui affiche le defilement du quizz
    afficheQuizz();

    quizzTemplate.style.display = "flex";
    if (i > 14) {
        resultat.style.display = "flex";
        content.style.display = "none";
        quizzTemplate.style.display = "none";
        scoreFinal.textContent = score + "/15"
        if (score < 5) {
            scoreFinal.textContent += " C'EST PAS OUF"
            commentaire.textContent = "Oula! Heureusement que le Riddler est sous les verrours... il faut que vous vous repassiez les films, cette fois en enlevant peut-être le masque qui vous a bloqué la vue! Allez, rien n'est perdu!"
        }
        else if (score >= 5 && score < 15){
            scoreFinal.textContent += " C'EST PAS MAL DU TOUT"
            commentaire.textContent = "Encore un peu d'entraînements avec le chevalier Noir vous serait benefique, Mais vous pouvez marcher la tête haute vos connaissances sont là. A vous de les consolider."
        }
        else {
            scoreFinal.textContent += "MES FELICITATIONS!!!"
            commentaire.textContent = "Vous êtes veritablement un super fan de l'univers Batman! Comics, films, rien ne vous échappe. Bruce Wayne a de quoi être fier, Gotham et en paix et Batman peut prendre sa retraite. Vous veillez aux grains"
        }
        recommencer.addEventListener ("click", ressayer)
    }
    i ++;
}




//fonction qui recommence le quizz
function ressayer (){
    resultat.style.display = "none";
    content.style.display = "flex";
    o1.style.display = "flex";

    i = 0; score = 0;

    commencer.textContent = "DEMARRER LE QUIZZ"

}

 //fonction qui affiche le defilement du quizz
function afficheQuizz (){
    if (i >= 0 && i <= 14) {
        for (let j = 0; j < 4; j++){
            listeDiv[j].style.backgroundColor = "grey";
        }
        compteur.textContent = (i + 1) + "/15";
        question.textContent = api[i].question;
        image.style.backgroundImage = 'url("Media/Batgame_' + (3 + i) + '.png")';
        commencer.textContent = "QUESTION SUIVANTE"
        if (i == 10) {
            document.getElementById('liste').querySelectorAll('div').forEach(function (div){
                div.style.display = "block";
            })
            for (let index = 0; index < 4 ; index++) {
                listeLabel[index].textContent = api[i].response[index].text;
            }
        }
        else{
            document.getElementById('liste').querySelectorAll('div').forEach(function (div, index){
                div.style.display = "block";
                if (index == 3) {
                    div.style.display = "none";
                }
            })
            for (let index = 0; index < 3 ; index++) {
                listeLabel[index].textContent = api[i].response[index].text;
            }    
        }
        liste.forEach (function (input){
            input.checked = false
        })
        if (i == 14) {
            commencer.textContent = "VOIR MON RESULTAT"
        }
    }
    commencer.style.pointerEvents = "all"
}

//fonction qui calcule le score
function scoreQuizz (){
    if (i > 0 && i <= 14) {
        if (i != 11) {
            for (let j = 0; j < 3; j++) {
                if (api[i-1].response[j].isGood == true) {
                    listeDiv[j].style.backgroundColor = "green";
                }

                else if (liste[j].checked == true && api[i-1].response[j].isGood == false) {
                    listeDiv[j].style.backgroundColor = "red";
                }
                
            }
            for (let j = 0; j < 3; j++) {
                if (liste[j].checked == true && api[i-1].response[j].isGood == false) {
                    score --;
                    break;
                }
                else if  (liste[j].checked == false && api[i-1].response[j].isGood == true){
                    score --;
                    break;
                }
                
            }
        }
        else{
            for (let j = 0; j < 4; j++) {
                if (api[i-1].response[j].isGood == true) {
                    listeDiv[j].style.backgroundColor = "green";
                }
                else if (liste[j].checked == true && api[i-1].response[j].isGood == false) {
                    listeDiv[j].style.backgroundColor = "red";
                    score --;
                    break
                }
                 if (api[i-1].response[j].isGood == true && liste[j].checked == false ) {
                    score --;
                    break
                }
                
            }
        }
        
       score ++; 
    }
   
}




//Créer une chauve-souris qui suit le curseur

let canvas = document.getElementById('canvas');
let c = canvas.getContext ('2d');
let img = new Image();
let clones = []
img.src = 'Media/logohome.png'

let bat = {
    positions: [],
    draw(){
        c.drawImage (img, 0, 0, 50, 20)
    }
}

window.addEventListener ("mousemove", deplacement);
function deplacement (event){
    canvas.style.top = event.clientY+ window.scrollY + 20 + "px" ;
    canvas.style.left = event.clientX + window.scrollX + 20 + "px";
}

img.onload = bat.draw ();



//Fonction qui créer l'animation de dezoom

function reveal (){
    const reveals = document.querySelectorAll (".reveal");
    for (let i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;  
        
        if (elementTop < windowHeight - elementVisible ) {
            reveals[i].classList.add ("active");
        } else {
            reveals [i].classList.remove ("active")
        }
    }
    
}

window.addEventListener ("scroll", reveal);

reveal ();

//fonction qui créer l'animation de transition de gauche a droite
function slide (){
    const slides = document.querySelectorAll (".slide");
    for (let i = 0; i < slides.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = slides[i].getBoundingClientRect().top;
        var elementVisible = 150;  
        
        if (elementTop < windowHeight - elementVisible ) {
            slides[i].classList.add ("active1");
        } else {
            slides [i].classList.remove ("active1")
        }
    }
    
}

window.addEventListener ("scroll", slide);

slide ();