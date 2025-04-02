import { FilmRepository } from './filmRepository.js';

class FilmBrowserComponent {
  #filmRepository;
  #url;
  constructor() {
    this.#filmRepository = new FilmRepository();
    this.#url = 'http://www.omdbapi.com/';
    document.getElementById('searchBtn').onclick = () => {
      // TODO
    };
  }

  #searchFilms(searchText) {
    if (searchText !== '') {
      // TODO:
      // films opvragen
    }
  }

  #getFilm(id) {
    // TODO
    // details van één film opvragen
  }

  #showFilms() {
    document.getElementById('films').innerHTML = '';
    this.#filmRepository.films.forEach((film) => {
      document.getElementById('films').insertAdjacentHTML(
        'beforeend',
        `     
        <div class="col s12 m6">
          <div class="card small horizontal">
            <div class="card-image">
              <img id="${film.id}" src="${film.poster}">
              </div>
            <div class="card-stacked">  
              <div class="card-content">
                <span class="card-title">${film.title}</span>             
                <ul>
                  <li>Type: ${film.type}</li>
                  <li>Year: ${film.year}</li>
                </ul>
             </div> 
            </div>       
          </div>
        </div>
      `
      );
      document.getElementById(film.id).onclick = () => {
        // TODO
      };
    });
  }

  #showDetailFilm(film) {
    let details = '';
    Object.entries(film.detail).forEach(([key, value]) => {
      details += `<li><label>${key}:</label> ${value}</li>`;
    });
    document.getElementById('films').innerHTML = '';
    document.getElementById('films').insertAdjacentHTML(
      'beforeend',
      `     
        <div class="col s12">
          <div class="card horizontal">
            <div class="card-image">
              <img id="listFilms" src="${film.poster}">
            </div>
            <div class="card-stacked">  
              <div class="card-content">
                <span class="card-title">${film.title}</span>             
                <ul>
                  <li><label>type:</label> ${film.type}</li>
                  <li><label>year:</label> ${film.year}</li>
                  ${details}
                </ul>
              </div>
            </div>       
          </div>
        </div>
      `
    );
    document.getElementById('listFilms').onclick = () => {
      // TODO
    };
  }

  #showMessage(message) {
    document.getElementById('films').innerHTML = '';
    document.getElementById('films').insertAdjacentHTML(
      'beforeend',
      `
      <div class="col s12">
        <p>${message}</p>
      </div>
      `
    );
  }
}
