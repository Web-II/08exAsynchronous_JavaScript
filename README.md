# 08exAsynchronous_JavaScript

## Oefening 1: Nieuwsberichten Stad Gent

Surf naar [https://data.stad.gent/](https://data.stad.gent/) en zoek daar de url op om de vijf laatste nieuwsberichten van de
stad Gent op te vragen in JSON-formaat.

Bij het openen van de webpagina index.html moeten de publicatiedatum en de titel afgebeeld worden van deze 5 nieuwsberichten. Maak van elke titel een hyperlink die verwijst naar de webpagina met het volledige nieuwsbericht.

![nieuwsbericht](docs/nieuwsberichten.png)

De start-bestanden bevatten reeds een klasse Bericht en BerichtenComponent. Importeer BerichtenComponent in index.js en zorg ervoor dat de applicatie wordt gestart. Zorg ervoor dat in de constructor van BerichtenComponent de correcte url wordt toegekend om de data op te halen zorg ervoor dat deze worden opgehaald, maak hiervoor gebruik van de method #getData(). Maak voor het weergeven van de nieuwsberichten op de webpagina tevens gebruik van de instance method Bericht.toHTMLString()

Werk met de Fetch API maar zonder gebruik te maken van async/await.

## Oefening 2: cookieStore

De Cookie Store API is een asynchrone en promise-based API. Controleer [de browser compabiliteit](https://developer.mozilla.org/en-US/docs/Web/API/CookieStore#browser_compatibility).

De start-bestanden bevatten reeds de code (functie init) om één cookie te creëren, die binnen één dag vervalt. Nadat de cookie gecreëerd is wordt er ook een boodschap getoond met addMessage().

Pas de code aan zodat er parallel twee cookies gecreëerd worden.

Nadat de twee cookies gecreëerd zijn toon je de boodschap 'cookie1 en cookie2 created' (met behulp van addMessage()) en stel je de event handlers voor de knoppen in.

De code voor de event handlers van de knoppen 'Haal de waarde op van cookie2' =>`cookieStore.get('cookie2')` en 'Toon alle Cookies' =>`cookieStore.getAll()` zal opnieuw promise-based zijn. Ook hier is het de bedoeling dat je geen gebruikmaakt van async/await.

De code voor de knop 'Wis de berichten' is simpel. Hier gebruik je de helpers module.

## Oefening 3: Countries

Bij het openen van de webpagina moeten alle 250 landen weergegeven worden (/data/countries.json).

![countries](docs/C1.png)

Via het tekstvak moet de gebruiker kunnen filteren:

![countries filtered](docs/C2.png)

Het aantal landen plaats je op de webpagina in het div-element `#number` de landen zelf in `#countries`.

Je werkt met vier modules: index.js (entry point van de applicatie), country.js (klasse Country), countriesRepository.js (klasse CountriesRepository) en countriesComponent.js (klasse CountriesComponent)

- Zorg ervoor dat index.js de applicatie start.

- Implementeer in de file country.js de klasse Country.
  Een Country-object bevat countryName, capital, region en flag.
  Exporteer de klasse en importeer ze in de file countriesRepository.js.

- Implementeer in CountriesRepository de methodes:
  addCountry() die een nieuw Country-object creëert en toevoegt aan de array #countries.

- Exporteer de klasse CountriesRepository en importeer ze in countriesComponent.js.

- Implementeer de CountriesComponent module:

  - Zorg ervoor dat de constructor de url de juiste string krijgt om de data op te halen: /data/countries.json.
  - Implementeer in CountriesComponent de methodes #initialiseHTML() en #getData():

    - De methode #getData() moet op basis van de url de repository opvullen. Maak bij deze methode gebruik van async/await.
      Hierbij moet 'countryName' zowel de 'name' als de 'nativeName' uit de objecten van de API bevatten. Zo moet de 'countryName' voor Duitsland de string 'Germany - Deutschland' zijn.
    - De methode #initialiseHTML() moet voorlopig enkel de methode #getData() oproepen (eventueel kan je als test met console.log het repository-object afbeelden).
      Uiteindelijk zal deze methode ook de landen moeten weergeven op de webpagina, zie hieronder.
    - Implementeer de methode #countriesToHTML die een countries-array afbeeldt op de webpagina. Gebruik vervolgens deze methode in #initialiseHTML() om bij het opstarten alle landen te tonen op de webpagina.

  Start je applicatie en controleer of alle landen worden weergegeven op de webpagina.

- Implementeer in de CountriesRepository klasse de methode filteredCountries(searchstring) die een gefilterde landen-array teruggeeft op basis van een zoekString.

  Een searchstring='be' betekent dat de gefilterde landen-array alle landen moet bevatten die beginnen met 'be'. Je werkt case-insensitive.

- Maak gebruik van de methode #setupSearchBox() die de event handler voor de search box instelt.
  Roep de methode op in #initialiseHTML() en controleer of alles correct werkt.

## Oefening 4: Trivia quiz.

Dit is een oefening op Fetch, promises en de DOM API.

Deze oefening stelt 10 Trivia (trivial pursuit) vragen met enkele mogelijke antwoorden na elkaar.

Nadat de 10 vragen gesteld zijn en een antwoord op elke vraag gegeven is, eindigt de quiz.

De vragen worden één per één op het scherm getoond met de mogelijke antwoorden. Nadat één antwoord gekozen is, bevestig je je antwoord door op de knop 'submit answer' te klikken. Vervolgens wordt het juiste antwoord getoond en het aantal reeds gestelde vragen en juiste antwoorden boven de vraag weergegeven.
Vervolgens kan men op de knop 'next question' klikken en verschijnt de volgende vraag.
Nadat de tien vragen gesteld en beantwoord zijn wordt de knop disabled en is de quiz gedaan.

De vragen voor deze quiz worden random opgevraagd via de volgende api: [Open Trivia Database ](https://opentdb.com/). Bekijk de api en tracht de juiste url te bepalen die nodig is om 10 random vragen uit de database op te vragen.

Voorbeeld van het verloop van de quiz:
Vraag 5 wordt getoond met de mogelijke antwoorden.
![T1.png](/docs/T1.png 'Resultaat')

Vraag 5 is beantwoord en er is op de 'submit answer' knop geklikt.
![T2.png](/docs/T2.png 'Resultaat')

Na het klikken op de knop 'next question' wordt vraag 6 met mogelijke antwoorden weergegeven.
![T3.png](/docs/T3.png 'Resultaat')

Nadat de tiende vraag is beantwoord, blijft de laatste vraag met antwoord zichtbaar, maar is de knop disabled.
![T4.png](/docs/T4.png 'Resultaat')

Voor de opmaak en layout wordt gebruik gemaakt van [Materializecss](https://materializecss.com/), het moet niet altijd bootstrap zijn!!

Bekijk heel grondig de HTML (hoeft niet gewijzigd te worden).

Implementeer de index.js zodat de applicatie opstart.

Bekijk de Class Trivia. Deze bevat reeds de gepaste getters. Implementeer de methode 'isCorrectAnswer(answer)', deze retourneert een boolean.

De code heeft ook een klasse TriviaRepository. Deze zal de 10 random trivia bijhouden en de nodige methodes voorzien om de TriviaComponent te kunnen uitvoeren (zie verder), maw om de quiz te kunnen spelen.
De TriviaRepository:

- de 10 trivia vragen worden bijgehouden in de property '#trivias'.
- van de antwoorden houden we in de property '#answers' bij of het antwoord al dan niet correct was (true of false).
  Vervolgens zijn volgende getters voorzien:
- numberOfTrivias: geeft het aantal trivia terug
- numberOfAnswers: geeft het aantal reeds gegeven antwoorden terug
- trivia: geeft de volgende trivia terug (maak gebruik van het aantal reeds gegeven antwoorden om de volgende trivia te bepalen)
- correctAnswers: geeft het aantal reeds gegeven correcte antwoorden terug

De methodes van deze klasse zijn:

- addTrivias(dataObjecten) mapt de dataObjecten (bekomen met de Fetch API) naar Trivia objects en voegt ze toe aan de array van 'trivias'. Bekijk een mogelijke response van de api in het bestand 'exampleResponseApi.json': hier zie je dat het juiste antwoord (correct_answer) en de foute antwoorden (incorrect_answers) twee verschillende properties zijn. In een Trivia object moet 'answers' alle mogelijke antwoorden bevatten, dus het correcte antwoord en de foute antwoorden.
- checkAnswer(answer): retourneert true of false naargelang het antwoord al dan niet correct is en voegt dit toe (true of false) aan de collection van answers.
- checkEndGame(): retourneert true or false naargelang de quiz al dan niet ten einde is. De quiz is ten einde als het aantal Trivia gelijk is aan het aantal gegeven antwoorden.

Vervolgens is er nog de klasse TriviaComponent.

- Deze bevat alle members om Trivia te spelen.
- Het heeft uiteraard een TriviaRepository object nodig en moet de data ophalen: #getData(), daarvoor heeft het de url nodig om de data op te halen. Vervolgens worden de data opgehaald en de eerste vraag weergegeven, dit gebeurt in de methode #initialiseHTML(). Deze methode haalt de data op met #getData().
- de methode #getData() moet met behulp van de Fetch API, de 10 Trivia ophalen bij de Web api.
  - indien dit succesvol gebeurt worden de Objecten van de api toegevoegd als Trivia Objecten aan de array van het TriviaRepository object, gebruik hiervoor de method 'addTrivias(dataObjecten)' van het triviaRepository object. Vervolgens wordt met de methode #showTrivia() de quiz opgestart en de eerste vraag weergegeven op de html-pagina.
  - indien dit niet succesvol gebeurt wordt een gepast bericht naar de console gestuurd (dit mag eventueel ook via een alert of op de webpagina zelf) en is de quiz afgelopen.
- de methode #showTrivia zal de webpagina weergeven en is reeds gedeeltelijk geïmplementeerd. Implementeer zelf nog volgende items:
  - het weergeven van het aantal reeds gestelde vragen tov het totaal aantal vragen (span met id="question")
  - controleer of het antwoord correct was
  - implementeer het weergeven van het aantal reeds correcte antwoorden tov. het totaal aantal gegeven antwoorden (span met id="correct")
  - implementeer het weergeven van het correcte antwoord (div met id="answer")

## Oefening 5: FilmBrowser.

Dit is een oefening op Fetch, promises en de DOM API.

Deze oefening laat de gebruiker een zoekterm ingeven. Na het klikken op de 'Search' button krijgen we de 10 meest relevante films voor de zoekterm te zien. Zorg voor een gepaste boodschap, indien geen zoekterm is ingegeven of als er iets fout gaat bij het ophalen van de data. Voor elke film kan op de image geklikt worden en worden de details van de film getoond. Bij de detailview klik je op de image om terug te keren naar de zoekresultaten.

De films worden opgevraagd via de volgende api: [Open Movie Database ](http://www.omdbapi.com/). Om deze database te raadplegen heb je een key nodig (deze is gratis). Indien je geen key aanvraagt, kan je volgende key gebruiken: 'apikey=57927523'. Vraag toch je eigen key aan want per key is er een gelimiteerd aantal request per dag. Bekijk de api en tracht de juiste url's te bepalen die nodig zijn om films op te vragen en een film (detail) op te vragen via het id van de film: voor beide heb je een request naar de api nodig.

Start applicatie:

![F1.png](/docs/F1.png 'Resultaat')

Resultaat na zoekterm 'star' ingeven en op search knop klikken.

![F2.png](/docs/F2.png 'Resultaat')

Detail film:

![F3.png](/docs/F3.png 'Resultaat')

Indien geen poster beschikbaar is (poster: N/A) wordt de 'No Image Available' afbeelding (zie map images) weergegeven.

![F4.png](/docs/F4.png 'Resultaat')

Voor de opmaak en layout wordt opnieuw gebruikgemaakt van [Materializecss](https://materializecss.com/).

Bekijk heel grondig de HTML (hoeft niet gewijzigd te worden).

Implementeer de index.js zodat de applicatie opstart.

De start-bestanden bevatten reeds een klasse Film met de gepaste getters. Deze klasse heeft een property detail, om de details van een film op te slaan (data ontvangen via een tweede request naar de api).

De code heeft ook een klasse FilmRepository. Deze zal de films bijhouden en de nodige methodes voorzien om de FilmBrowserComponent te kunnen uitvoeren (zie verder), maw om de film database te bevragen en weer te geven.

De FilmRepository:

- de films worden bijgehouden in de #films array.

De methodes van deze klasse zijn:

- addFilms(dataObjecten) mapt de dataObjecten (van api) naar Film objects en voegt ze toen aan de array.
- addDetail(id,objDetail): haalt het juiste film Object op uit de array en voegt de details toe (zie screenshot detail en detail property van film object).
- getFilmById(id): retourneert film overeenkomstig het id (parameter).

Vervolgens is er nog de klasse FilmComponent.

- Deze bevat alle members en methods om de externe film database te bevragen en de films weer te geven en ook de details van de aangeklikte film weer te geven.
- Deze klasse heeft uiteraard een FilmRepository object nodig en moet de data ophalen: #searchFilms(searchText). hij maakt hierbij gebruik van de volgende url: http://www.omdbapi.com/?s=zoekterm&apikey=57927523, waarbij de zoekterm vervangen wordt door de ingegeven zoekterm op de webpagina.
- de methode #searchFilms(searchText) zal door gebruik te maken van de fetch API de films ophalen door de searchText mee te geven in het api request te halen:
  - indien dit succesvol gebeurt worden
    - de Objecten, indien er een zoekresultaat is, van de api toegevoegd als Film Objecten aan de array van de repository, gebruik hiervoor de method 'addFilms(dataObjecten)' van het filmRepository object. Vervolgens worden deze weergegeven op de pagina, #showFilms() method.
    - een gepaste boodschap gegeven - #showMessage(message) method, indien geen zoekresultaat is.
  - indien dit niet succesvol gebeurt, dan wordt een gepast bericht naar de console (dit mag eventueel ook via een alert of op de webpagina zelf) gestuurd.
- de methode #getFilm(id) zal, nadat op de knop details van een film is geklikt, de details data ophalen bij de api via een http request (url: http://www.omdbapi.com/?i=idFilm&plot=full&apikey=57927523, waarbij idFilm wordt vervangen door het id als argument meegegeven).
  - indien dit succesvol gebeurt, worden
    - de filmdata, indien er een zoekresultaat is, van de api toegevoegd als Film object details aan de overeenkomstige film uit de repository, gebruik hiervoor de method 'addDetail(id, objDetail)' Vervolgens wordt de film weergegeven op de pagina ,#showDetailFilm(film) method.
    - een gepaste boodschap gegeven - showMessage(message) method, indien geen zoekresultaat is.
  - indien dit niet succesvol gebeurt, dan wordt een gepast bericht naar de console (dit mag eventueel ook via een alert of op de webpagina zelf) gestuurd.
- de methode #showFilms() zal de films op de webpagina weergeven. Elke film bevat een knop om de details te bekijken #getFilm(id).
- de methode #showFilmsDetail(film) zal de film op de webpagina weergeven. Als er vervolgens geklikt wordt op de afbeelding van de film wordt er teruggekeerd naar het overzicht van de films - #showFilms().
