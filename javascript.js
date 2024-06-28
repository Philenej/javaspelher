console.log("Hey");

// let const checken
// -------------- let variabelen ---------------
let Pizzabegin = document.querySelector('.Pizzadeeg');
let PizzabeginContainer = document.querySelector('#PizzabeginContainer');
let Tomatensaus = document.querySelector('.Tomatensaus');
let Kaas = document.querySelector('.Kaas');
let Champignon = document.querySelector('.Champignon');
let Olijf = document.querySelector('.Olijf');
let Tomaat = document.querySelector('.Tomaat');
let Spek = document.querySelector('.Spek');
let Salami = document.querySelector('.Salami');
let Peper = document.querySelector('.Peper');
let Paprika = document.querySelector('.Paprika');
//maakt nieuw audio object aan
let timerAudio = new Audio('90s-game-ui-6-185099.mp3');
let timerElement = document.querySelector('#timer');
let messageButton = document.querySelector('#berichtButton');
// De start tijd in seconden
let tijd = 15;

// -------------- const variabel ----------------
// selecteerd de button met id kleurverandern en slaat op
    const KleurveranderenButton = document.querySelector('#Kleurveranderen');



// wisselIngredient "wissel de laag", wat inhoudt dat de functie de specifieke laag toevoegt als deze niet bestaat, 
// of verwijdert als deze wel bestaat. Het is een naam die duidelijk maakt wat de functie doet: 
// het wisselt de aanwezigheid van een bepaalde laag op de pizza.

// De fucntie wisselIngredient heeft 2 parameters (src, classname)
function wisselIngredient(src, classNaam) {
    // alle img elementen (ingredienten) in het document geselcteerd, en $classname is de waarde van een class van de ingredienten
    // dus ('img.Kaaslaag) bijv.
    let bestaandeLaag = document.querySelector(`img.${classNaam}`); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    //als het ingredient dus al op de (pizza)laag ligt wordt dit ingredient verwijderd 
    if (bestaandeLaag) {
        bestaandeLaag.remove();
        // als het ingredient niet bestaat wordt de functie voeg laag toe aangesproken, nieuw ingredient dus
    } else {
        voegLaagToe(src, classNaam);
    }
}

//https://attacomsian.com/blog/javascript-dom-append-to-an-element
function voegLaagToe(src, classNaam) {
    let nieuweLaag = document.createElement('img');
    nieuweLaag.src = src;
    nieuweLaag.classList.add(classNaam);
    //toevoegen nieuwe laag aan container
    PizzabeginContainer.appendChild(nieuweLaag);
    console.log('YO')
}

// met hulp van sara klasgenoot
// zorgt ervoot dat de code pas wordt uitgevoerd nadat de dom is geladen
document.addEventListener('DOMContentLoaded', function() {
    // Definieert de functie die achtergondkleur van de ingredientenlijst veranderd
    function kleurenVeranderen() {
        const kleuren = ['#FFFACD', '#FFB6C1', '#E0FFFF', '#7FFFD4', '#FFA500', '#EE82EE']; // Deze array bevat de kleuren
        //slecteerd en slaat de id ingredientenlijst op
        const ingredientenlijst = document.querySelector('#ingredientenlijst');
    
        const gekozenkleur = Math.floor(Math.random() * kleuren.length);
        //haalt de kleur op uit de array
        const willekeurigKleur = kleuren[gekozenkleur];
        // verandert de achtergond naar willeukerige kleur
        ingredientenlijst.style.backgroundColor = willekeurigKleur;
        console.log('kleur check');
    }

    
    
    // de if controleert of de kleurenveranderbutton bestaat als dat zo is dan zal de eventlistener worden uitgevoerd
    // anders foutmelding 
    if (KleurveranderenButton) {
        KleurveranderenButton.addEventListener('click', kleurenVeranderen);
    } else {
        console.error('Button niet gevonden'); 
    }
});
      
        // Update de timer elke seconde
        // setInterval is een functie die de functie 
        let countdown = setInterval(() => {
            // de waarde wordt elke seconde met 1 vermindert dus aftelt
            tijd--;
            //zorgt ervoor dat de timer werkt en af gaat tellen
            timerElement.textContent = tijd;


// als de waarde minder of gelijk aan 0 is dan is de timer klaar
            if (tijd <= 0) {
                //voorkomt dat de timer gaat lopen na de tijd
                clearInterval(countdown);
                timerElement.textContent = "Tijd is op! Je pizza is klaar";
                messageButton.textContent = "Opnieuw";
                // knop verschijnt pas als de timer op 0 is
                messageButton.style.display = 'block';
                // het geluid speelt dus af als de tijd 0 is
                timerAudio.play();
                
            }
          // de code wordt elke seconde uitgevoerd
        }, 1000);


// Selecteer de ingredienten en voeg event listeners toe
// creeërt bijv de variabele Tomatensaus
// De variabel zal verwijzen naar het eerste element in het document dat de class Tomatensaus heeft

// de addEventlistener functie luistert naar de klikgebeurtenis op dit element (Tomatensaus), 
// binnen de () => wisselingredient wordt binnen deze pijlfunctie de wisselingredient functie aangesproken en 
//deze functie veranderd de afbeelding in een andere afb
Tomatensaus.addEventListener('click', () => wisselIngredient('images/Pizzasaus.png', 'Pizzasaus'));
Kaas.addEventListener('click', () => wisselIngredient('images/Kaaslaagg.png', 'Kaaslaag'));
Champignon.addEventListener('click', () => wisselIngredient('images/Champignon1.png', 'Champignon1'));
Olijf.addEventListener('click', () => wisselIngredient('images/Olijf1.png', 'Olijf1'));
Tomaat.addEventListener('click', () => wisselIngredient('images/Tomaat1.png', 'Tomaat1'));
Spek.addEventListener('click', () => wisselIngredient('images/Spek1.png', 'Spek1'));
Salami.addEventListener('click', () => wisselIngredient('images/Salami1.png', 'Salami1'));
Peper.addEventListener('click', () => wisselIngredient('images/Peper1.png', 'Peper1'));
Paprika.addEventListener('click', () => wisselIngredient('images/Paprika1.png', 'Paprika1'));


//Ingredienten op de pizza bronnen:
//Tomatensaus Afbeelding van <a href="https://pixabay.com/nl/users/clker-free-vector-images-3736/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=311136">Clker-Free-Vector-Images</a> via <a href="https://pixabay.com/nl//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=311136">Pixabay</a>
//Kaas Afbeelding van <a href="https://pixabay.com/nl/users/mostafaelturkey36-13328910/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4946581">Mostafa Elturkey</a> via <a href="https://pixabay.com/nl//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4946581">Pixabay</a>
//Champignon Afbeelding van <a href="https://pixabay.com/nl/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=576462">OpenClipart-Vectors</a> via <a href="https://pixabay.com/nl//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=576462">Pixabay</a>
// Olijf Afbeelding van <a href="https://pixabay.com/nl/users/clker-free-vector-images-3736/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=28976">Clker-Free-Vector-Images</a> via <a href="https://pixabay.com/nl//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=28976">Pixabay</a>
//Spek1 <a href="https://www.freepik.com/free-vector/grill-bacon-icon-isolated-design_74221190.htm#fromView=search&page=1&position=3&uuid=17530a5e-b7b5-40bb-8efe-d1225cca5743">Image by djvstock on Freepik</a>
// Spek Afbeelding van <a href="https://pixabay.com/nl/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=575334">OpenClipart-Vectors</a> via <a href="https://pixabay.com/nl//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=575334">Pixabay</a>
//Tomaat1 <a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=spek&query=spek">Image by standret on Freepik</a>
//Tomaat Afbeelding van <a href="https://pixabay.com/nl/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2027563">OpenClipart-Vectors</a> via <a href="https://pixabay.com/nl//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2027563">Pixabay</a>
// Paprika1 <a href="https://www.freepik.com/free-photo/three-slices-red-bell-pepper-corner-white-background_4130630.htm#fromView=search&page=1&position=15&uuid=389d9b66-efdf-40e0-a1e2-2e278a118d53">Image by freepik</a>
// Paprika Afbeelding van <a href="https://pixabay.com/nl/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1298732">OpenClipart-Vectors</a> via <a href="https://pixabay.com/nl//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1298732">Pixabay</a>
// Salami Afbeelding van <a href="https://pixabay.com/nl/users/astraja-11750810/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5517398">ASTRAJA</a> via <a href="https://pixabay.com/nl//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5517398">Pixabay</a>
//Peper Afbeelding van <a href="https://pixabay.com/nl/users/deeznutz1-3086161/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8184580">Dee</a> via <a href="https://pixabay.com/nl//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8184580">Pixabay</a>
//Peper1 <a href="https://www.freepik.com/free-photo/red-chili-pepper_10323444.htm#fromView=search&page=4&position=12&uuid=d10b3a4a-b221-41eb-a01b-9645dd52075b">Image by Racool_studio on Freepik</a>

