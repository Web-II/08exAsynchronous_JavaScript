export class Film {
  #id;
  #title;
  #poster;
  #type;
  #year;
  #detail;
  constructor(id, title, type, poster, year) {
    this.#id = id;
    this.#title = title;
    this.poster = poster;
    this.#type = type;
    this.#year = year;
    this.#detail = {
      time: '',
      genre: '',
      director: '',
      actors: '',
      plot: '',
      language: '',
    };
  }
  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get type() {
    return this.#type;
  }

  get poster() {
    return this.#poster;
  }
  set poster(value) {
    value !== 'N/A'
      ? (this.#poster = value)
      : (this.#poster = 'images/No_image_available.svg');
  }

  get year() {
    return this.#year;
  }

  get detail() {
    return this.#detail;
  }
}
