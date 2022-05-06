import { CountriesRepository } from './countriesRepository.js';

class CountriesComponent {
  #countriesRepository;

  constructor() {
    this.#countriesRepository = new CountriesRepository();
    this.initialiseHTML();
  }

  setupSearchBox() {
    const searchBox = document.getElementById('search');
    searchBox.addEventListener('keyup', () => {
      const filteredCountries = this.#countriesRepository.filteredCountries(
        searchBox.value
      );
      this.countriesToHTML(filteredCountries);
    });
    searchBox.focus();
  }

  // Beeld een doorgegeven countries-array af op de webpagina
  // (de countries-array zal alle landen bevatten
  // of de gefilterde landen)
  countriesToHTML(countries) {

  }
}

function init() {
  new CountriesComponent();
}

window.onload = init;
