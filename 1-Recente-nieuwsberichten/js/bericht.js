export class Bericht {
  #publicatiedatum;
  #titel;
  #url;
  constructor(publicatiedatum, titel, url) {
    this.#publicatiedatum = publicatiedatum;
    this.#titel = titel;
    this.#url = url;
  }

  get publicatiedatum() {
    return this.#publicatiedatum;
  }

  get titel() {
    return this.#titel;
  }

  get url() {
    return this.#url;
  }

  toHTMLString() {
    return `<p>${this.publicatiedatum} -
      <a href="${this.url}">${this.titel}</a></p>`;
  }
}
