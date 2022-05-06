import { Trivia } from './trivia.js';

export class TriviaGame {
  #trivias = [];
  #answers = [];

  get numberOfTrivias() {
    return this.#trivias.length;
  }

  get numberOfAnswers() {
    return this.#answers.length;
  }

  // geeft de volgende trivia terug (werkt op basis van
  // het aantal reeds gegeven antwoorden).
  get trivia() {
    // TODO
  }

  get correctAnswers() {
    // TODO 
    
  }

  addTrivias(dataObjects) {
    // TODO

  }

  checkAnswer(answer) {
    // TODO

  }
  
  checkEndGame() {
    // TODO
  }
}
