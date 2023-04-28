class CountriesComponent {
  #countriesRepository;
  #url;

  constructor() {
    //'./data/countries.json';
    
  }

  #initialiseHTML() {}

  #getData() {}

  #setupSearchBox() {
    const searchBox = document.getElementById('search');
    searchBox.addEventListener('keyup', () => {
      const filteredCountries = this.#countriesRepository.filteredCountries(
        searchBox.value
      );
      this.#countriesToHTML(filteredCountries);
    });
    searchBox.focus();
  }

  // Beeld een doorgegeven countries-array af op de webpagina
  // (de countries-array kan alle countries landen bevatten
  // of de gefilterde landen)
  #countriesToHTML(countries) {}
}