class Media {
    constructor(title, isCheckedOut=false, ratings=[], averageRate = 0){
      this._title = title;
      this._isCheckedOut = isCheckedOut;
      this._ratings = ratings;
      this._averageRate = averageRate;
    }
    get title() {
      return this._title; 
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    get averageRate() {
      return this._averageRate
    }
    set isCheckedOut(change) {
      this._isCheckedOut = change;
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;  
    }
    getAverageRating() {
      this._averageRate = Number((this._ratings.reduce((sum, num)=>sum+num) / this._ratings.length).toFixed(1));
    }
    addRating(rate) {
      this._ratings.push(rate);
    }
  }
  
  class Book extends Media {
    constructor(author, pages, ...args){
      super(...args);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media{
    constructor(director, runtime, ...args){
      super(...args);
      this._director = director;
      this._runtime = runtime;
    }
    get director() {
      return this._drector;
    }
    get runtime() {
      return this._runtime;
    }
  }
  
  class CD extends Media {
    constructor(artist, songs, ...args) {
      super(...args);
      this._artist = artist;
      this._songs = songs;
    }
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
    shuffle() {
      return this._songs.sort(()=>Math.random() - 0.5)
    }
  }
  
  class Catalog extends Media {}
  
  const historyOfEverything = new Book('Bill Bryson', 544, 'A Short History of Nearly Everything');
  
  historyOfEverything.toggleCheckOutStatus()
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  historyOfEverything.getAverageRating()
  // console.log(historyOfEverything.getAverageRating())
  console.log(historyOfEverything);
  
  const speed = new Movie('Jan de Bont', 116, 'Speed');
  speed.toggleCheckOutStatus();
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  speed.getAverageRating()
  // console.log(speed.getAverageRating())
  console.log(speed)
  
  const Live = new CD('Liam', ['first', '2', 'third'], 'About life', false, [2, 4, 5, 5, 1]);
  Live.toggleCheckOutStatus();
  Live.getAverageRating();
  Live.shuffle()
  console.log(Live)