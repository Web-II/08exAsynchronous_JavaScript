export default class Trivia {
  #category;
  #difficulty;
  #question;
  #answers;
  #correctAnswer;

  constructor(category, difficulty, question, answers, correctAnswer) {
    this.#category = category;
    this.#difficulty = difficulty;
    this.#question = question;
    this.#answers = answers;
    this.#correctAnswer = correctAnswer;
  }
  get category() {
    return this.#category;
  }
  get difficulty() {
    return this.#difficulty;
  }
  get question() {
    return this.#question;
  }
  get answers() {
    return this.#answers;
  }
  get correctAnswer() {
    return this.#correctAnswer;
  }
  isCorrectAnswer(answer) {}
}
