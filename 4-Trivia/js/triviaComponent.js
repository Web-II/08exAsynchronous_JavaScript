import TriviaRepository from './triviaRepository.js';

export default class TriviaComponent {
  #triviaRepository;
  #url;

  constructor() {
    this.#triviaRepository = new TriviaRepository();
    this.#url = 'https://opentdb.com/api.php?amount=10'; //'./data/exampleResponseApi.json'
    this.#initialiseHTML();
  }

  #initialiseHTML() {
    
  }
  #getData() {
    
  }

  #showTrivia() {
    const triviaHTML = document.getElementById('trivia');
    triviaHTML.innerHTML = '';

    // de volgende vraag
    const trivia = this.#triviaRepository.trivia;

    //TODO
    // #question opvullen:
    // geeft het aantal reeds gestelde vragen
    // op het totaal aantal vragen weer.

    // div met de vraag aanmaken en opvullen (sectie met blauwe tekst)
    triviaHTML.insertAdjacentHTML(
      'beforeend',
      `<div class="card-content">
				<span>${trivia.category} - Difficulty: ${trivia.difficulty}</span><br>
				<span>${trivia.question}</span>
			</div>`
    );

    // Mogelijke antwoorden afbeelden
    const divCA = document.createElement('div');
    divCA.className = 'card-action';
    const divRow = document.createElement('div');
    divRow.className = 'row';
    trivia.answers.forEach((a) => {
      divRow.insertAdjacentHTML(
        'beforeend',
        `<div class="col s12 m6">
					<p>
						<label>
							<input class="with-gap" name="group" value="${a}" type="radio" />
							<span>${a}</span>
						</label>
					</p>
				</div>
				`
      );
    });
    divCA.appendChild(divRow);
    triviaHTML.appendChild(divCA);

    // sectie met knop SUBMIT ANSWER en NEXT QUESTION
    triviaHTML.insertAdjacentHTML(
      'beforeend',
      `<div class="card-action">
					<button id="send" class="btn-small blue darken-2">Submit answer<i class="material-icons right">send</i></button>
          <button id="next" class="btn-small blue darken-2">Next Question</button>
				</div>`
    );

    // send-knop weergeven
    document.getElementById('send').classList.remove('hide');
    document.getElementById('next').classList.add('hide');

    // antwoorden inschakelen
    for (const radio of document.querySelectorAll('input[name="group"]')) {
      radio.disabled = false;
    }

    // eventhandlers instellen
    document.getElementById('send').onclick = () => this.#sendClickHandler(trivia);
    document.getElementById('next').onclick = () => this.#nextClickHander();
  }

  #sendClickHandler(trivia) {
    // als er geen enkele radio button checked is moet er niets gebeuren
    if (!document.querySelector('input[name="group"]:checked')) return;

    // antwoorden uitschakelen
    for (const radio of document.querySelectorAll('input[name="group"]')) {
      radio.disabled = true;
    }

    // TODO
    // controleren of het antwoord correct was

    // TODO
    // aantal correcte antwoorden op het totaal aantal antwoorden

    // TODO
    // tonen van het correcte antwoord

    // next-knop weergeven
    document.getElementById('send').classList.add('hide');
    document.getElementById('next').classList.remove('hide');

    // als het spel beëindigd is
    if (this.#triviaRepository.checkEndGame()) {
      // next-knop uitschakelen
      document.getElementById('next').classList.add('disabled');
    }
  }
  #nextClickHander() {
    // antwoord wissen
    document.getElementById('answer').innerHTML = '';
    // volgende vraag afbeelden
    this.#showTrivia();
  }
}

