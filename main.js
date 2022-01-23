class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  };

  get title() {
    return this._title;
  };

  get ratings() {
    return this._ratings;
  };

  get isCheckedOut() {
    return this._isCheckedOut;
  };

  set isCheckedOut(checkOut) {
    this._isCheckedOut = checkOut;
  };

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  };

  getAverageRating() {
    const aveRating = this._ratings.reduce((acumulator, rating) => acumulator + rating, 0);
    return Math.round(aveRating / this._ratings.length);
  };

  addRating(newRating) {
    this._ratings.push(newRating);
  };
};

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  };

  get author() {
    return this._author;
  };

  get pages() {
    return this._pages;
  };
};

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  };

  get director() {
    return this._director;
  };

  get runTime() {
    return this._runTime;
  };
};

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist =  artist;
    this._songs = songs;
  };

  get artist() {
    return this._artist;
  };

  get songs() {
    return this._songs;
  };
};

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const shuffle = new CD('30', 'Adele', 'Easy on Me');
shuffle.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
shuffle.addRating(5);
shuffle.addRating(4);
shuffle.addRating(3);
console.log(shuffle.getAverageRating());
