import Trivia from './trivia.js';

export default class TriviaRepository {
  #trivias = [];
  #answers = [];

  get trivias() {
    return this.#trivias;
  }

  get numberOfTrivias() {
    return this.#trivias.length;
  }

  get numberOfAnswers() {
    return this.#answers.length;
  }

  // geeft de volgende trivia terug (werkt op basis van
  // het aantal reeds gegeven antwoorden).
  get trivia() {}

  get correctAnswers() {}

  addTrivias(dataObjects) {}

  checkAnswer(answer) {}

  checkEndGame() {}
}
