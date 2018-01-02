class Language {
  constructor() {
    this.state = {
      english: false;
      french: true;
    }

  }

  changeLanguage () {
    this.state.english = !this.state.english;
    this.state.french = !this.state.french;
  }
}

export default new Language();
